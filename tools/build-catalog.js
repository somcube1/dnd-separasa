/* Собирает catalog.js: список приключений, их карт и моделей.
   Запускается сам на GitHub при каждом изменении папок adventures и models (см. .github/workflows/catalog.yml).
   Руками запускать не нужно. Названия, высота и поворот уже известных моделей сохраняются. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const rel = (...p) => path.join(root, ...p);
const isDir = p => fs.existsSync(p) && fs.statSync(p).isDirectory();
const files = (dir, ext) => isDir(dir) ? fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith(ext)).sort((a, b) => a.localeCompare(b, 'ru')) : [];
function evalFile(file, name) {
  if (!fs.existsSync(file)) return null;
  const w = {};
  try { vm.runInNewContext(fs.readFileSync(file, 'utf8'), { window: w }, { timeout: 2000 }); }
  catch (e) { console.warn('Пропускаю ' + path.relative(root, file) + ': ' + e.message); return null; }
  return w[name] || null;
}
const old = evalFile(rel('catalog.js'), 'CATALOG') || { adventures: [], models: [] };
const known = new Map();
[...(old.models || []), ...(old.adventures || []).flatMap(a => a.models || [])].forEach(m => known.set(m.path, m));
function models(dirRel) {
  return files(rel(dirRel), '.glb').map(f => {
    const p = dirRel + '/' + f, was = known.get(p) || {}, base = f.replace(/\.glb$/i, '');
    const m = { id: was.id || base, name: was.name || base, path: p };
    if (was.height) m.height = was.height;
    if (was.rotY) m.rotY = was.rotY;
    return m;
  });
}
const adventures = [];
const advRoot = rel('adventures');
(isDir(advRoot) ? fs.readdirSync(advRoot).sort((a, b) => a.localeCompare(b, 'ru')) : []).forEach(dir => {
  if (!isDir(path.join(advRoot, dir))) return;
  const base = 'adventures/' + dir;
  const maps = files(rel(base, 'maps'), '.js').map(f => {
    const m = evalFile(rel(base, 'maps', f), 'MAP');
    if (!m || !m.id || !Array.isArray(m.rooms)) { console.warn('В файле ' + base + '/maps/' + f + ' нет карты, пропускаю'); return null; }
    return { id: String(m.id), file: f, title: m.title || String(m.id) };
  }).filter(Boolean);
  if (!maps.length) { console.warn('В приключении «' + dir + '» нет карт, пропускаю'); return; }
  const meta = evalFile(rel(base, 'adventure.js'), 'ADVENTURE') || {};
  adventures.push({
    id: dir, title: meta.title || dir, note: meta.note || '',
    start: maps.some(m => m.id === meta.start) ? meta.start : maps[0].id,
    maps, models: models(base + '/models')
  });
});
const catalog = { adventures, models: models('models') };
const out = '/* Каталог приключений, карт и моделей. Собирается автоматически, руками не править. */\nwindow.CATALOG = ' + JSON.stringify(catalog, null, 1) + ';\n';
const file = rel('catalog.js');
if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== out) { fs.writeFileSync(file, out); console.log('catalog.js обновлён'); }
else console.log('catalog.js без изменений');
console.log('Приключений: ' + adventures.length + ', общих моделей: ' + catalog.models.length);
