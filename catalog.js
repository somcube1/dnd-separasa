/* Каталог приключений, карт и моделей. Собирается автоматически, руками не править. */
window.CATALOG = {
 "adventures": [
  {
   "id": "derevnya-geroev",
   "title": "Деревня героев",
   "note": "Ваншот, 7–8 игроков 5-го уровня, 5e 2014, ~6 часов. Порядок карт: деревня → поляна Шапочки → берег Сьёоборе → Хауфхул → логово дракона. Финал в ином плане играется без карты.",
   "start": "derevnya",
   "maps": [
    {
     "id": "bereg",
     "file": "bereg.js",
     "title": "Берег Сьёоборе"
    },
    {
     "id": "derevnya",
     "file": "derevnya.js",
     "title": "Деревня в ночь Раугдурфа"
    },
    {
     "id": "haufhul",
     "file": "haufhul.js",
     "title": "Хауфхул: таверна Фуссо и крыши"
    },
    {
     "id": "logovo",
     "file": "logovo.js",
     "title": "Логово песчаного дракона"
    },
    {
     "id": "polyana",
     "file": "polyana.js",
     "title": "Поляна Красной Шапочки"
    }
   ],
   "models": []
  }
 ],
 "models": [
  {
   "id": "rogue",
   "name": "rogue",
   "path": "models/Герои/rogue.glb",
   "kind": "hero"
  },
  {
   "id": "Мимик",
   "name": "Мимик",
   "path": "models/Монстры/Мимик.glb",
   "kind": "monster"
  },
  {
   "id": "chest",
   "name": "chest",
   "path": "models/Объекты/chest.glb",
   "kind": "object"
  }
 ]
};
