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
  },
  {
   "id": "utonuvshiy-korol",
   "title": "Утонувший король",
   "note": "Таверна «Пьяный гусь», контрабандисты в погребе и крипта старого короля.",
   "start": "tavern",
   "maps": [
    {
     "id": "krypt",
     "file": "krypt.js",
     "title": "Крипта Утонувшего Короля"
    },
    {
     "id": "tavern",
     "file": "tavern.js",
     "title": "Таверна «Пьяный гусь»"
    }
   ],
   "models": []
  }
 ],
 "models": [
  {
   "id": "Мимик",
   "name": "Мимик",
   "path": "models/Мимик.glb"
  },
  {
   "id": "chest",
   "name": "Сундук",
   "path": "models/chest.glb",
   "height": 0.6
  },
  {
   "id": "rogue",
   "name": "Плут в плаще",
   "path": "models/rogue.glb"
  }
 ]
};
