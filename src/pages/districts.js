// src/pages/districts.js

export const districts = [
  {
    id: 'canoga',
    name: 'Canoga Park',
    mapSize: { width: 600, height: 400 },
    defaultLocationId: 'apartment',
    streets: [
      { x: -200, y: 200, width: 1000, height: 30 },  // horizontal street across the middle
      { x: 300, y: 0, width: 30, height: 400 },  // vertical street in the middle
    ],
    locations: [
      {
        id: 'apartment',
        name: 'Thai Massage Apartment',
        shape: 'rect',
        position: { x: 200, y: 100, width: 70, height: 100 },
        pageId: 'apartmentPage',
        description: `This possibly illegal studio apartment located above a Thai Massage Parlor is your Haven.
        `,
      },
      {
        id: 'tattooShop',
        name: `Nathan's Tattoo Shop`,
        shape: 'rect',
        position: { x: 135, y: 130, width: 70, height: 70 },
        pageId: 'tattooShopPage',
      },
      {
        id: 'nightclub',
        name: 'The Vibe',
        shape: 'rect',
        position: { x: -100, y: 100, width: 120, height: 100 },
        pageId: 'vibePage',
      },
      {
        id: 'pawnShop',
        name: 'Canoga Park Pawn Shop',
        shape: 'rect',
        position: { x: 200, y: 10, width: 100, height: 50 },
        pageId: 'pawnShopPage',
        description: "A shady place filled with old electronics and jewelry of unknown origin.",
        npcs: [
            { id: 'larry', name: 'Larry the Pawn Guy', dialog: 'Got something to sell?', canTalk: true },
            { id: 'ramon', name: 'Ramon the Thug', dialog: 'What do you want?' }
        ],
        actions: [
            { id: 'search', label: 'Search the shop', type: 'skillCheck', skill: 'Investigation', difficulty: 2 },
        ],
        quests: ['missingWatch'],
      },
      {
        id: 'bank',
        name: 'San Fernando Bank',
        shape: 'rect',
        position: { x: 350, y: 230, width: 150, height: 100 },
        pageId: 'bankPage',
      },
      {
        id: 'church',
        name: 'Our Lady of the Valley Church',
        shape: 'rect',
        position: { x: 550, y: 230, width: 100, height: 100 },
        pageId: 'churchPage',
      },
      {
        id: 'tireShop',
        name: 'Big Wheels Tire & Service',
        shape: 'rect',
        position: { x: 450, y: 120, width: 150, height: 80 },
        pageId: 'tireShopPage',
      },
      {
        id: 'urgentCare',
        name: 'Urgent Care',
        shape: 'rect',
        position: { x: 0, y: 230, width: 150, height: 100 },
        pageId: 'urgentCarePage',
      },
    ],
  },

  {
    id: 'suburbs',
    name: 'Suburbs',
    mapSize: { width: 600, height: 400 },
    defaultLocationId: 'park',
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