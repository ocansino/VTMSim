// src/pages/districts.js

export const districts = [
  {
    id: 'downtown',
    name: 'Downtown',
    mapSize: { width: 600, height: 400 },
    streets: [
      { x: 0, y: 200, width: 600, height: 15 },  // horizontal street across the middle
      { x: 300, y: 0, width: 15, height: 400 },  // vertical street in the middle
    ],
    locations: [
      {
        id: 'pawnShop',
        name: 'Pawn Shop',
        shape: 'rect',
        position: { x: 80, y: 150, width: 100, height: 60 },
        pageId: 'pawnShopPage',
      },
      {
        id: 'nightclub',
        name: 'Night Club',
        shape: 'circle',
        position: { cx: 320, cy: 180, r: 50 },
        pageId: 'nightclubPage',
      },
      {
        id: 'backAlley',
        name: 'Back Alley',
        shape: 'rect',
        position: { x: 450, y: 300, width: 120, height: 50 },
        pageId: 'backAlleyPage',
      },
    ],
  },

  {
    id: 'suburbs',
    name: 'Suburbs',
    mapSize: { width: 600, height: 400 },
    streets: [
      { x: 100, y: 100, width: 400, height: 12 },
      { x: 250, y: 50, width: 12, height: 300 },
    ],
    locations: [
      {
        id: 'park',
        name: 'City Park',
        shape: 'circle',
        position: { cx: 150, cy: 220, r: 60 },
        pageId: 'parkPage',
      },
      {
        id: 'library',
        name: 'Public Library',
        shape: 'rect',
        position: { x: 350, y: 100, width: 110, height: 70 },
        pageId: 'libraryPage',
      },
    ],
  },
];