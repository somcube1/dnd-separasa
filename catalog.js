/* Каталог приключений, карт и моделей. Собирается автоматически, руками не править. */
window.CATALOG = {
 "adventures": [
  {
   "id": "Лесной поход",
   "title": "Лесной поход",
   "note": "Тестовое приключение: стоянка на поляне и пещера за ручьём.",
   "start": "polyana",
   "maps": [
    {
     "id": "peshera",
     "file": "peshera.js",
     "title": "Пещера за ручьём"
    },
    {
     "id": "polyana",
     "file": "polyana.js",
     "title": "Лесная поляна"
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
