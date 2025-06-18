// src/pages/CrimsonGutter1.jsx
import React from 'react';
import ChroniclePage from '../ChroniclePage';

const testPageData = {
  title: 'The Bunker - Entrance',
  description: 
  `You have started your journey as an fledgling in the town of Dragonshore, a village on the coast of the Great Sea of Neladrian. 
  It has become known to many of the locals that you are here to find paid work, and it is not long before you are approached with a proposition. 
  The eldery scholer, Olohand approchers you in the main street of Dragonshore.
  `,
  
  
  image: '/images/sewer_room.jpg', // replace with actual path or URL
  gameTips: [
    'It is too dangerous to rest in these sewers.',
    'If you have fallen through the floor, you are prone.'
  ],
  objects: [
    'A Control Panel',
    'Slash Marks',
    'Claw Marks',
    'A Steel Gate',
  ],
  actions: [
    { label: 'Examine the Control Panel', eventId: 'controlPanel' },
    { label: 'Examine the Slash Marks', eventId: 'slashMarks' },
    { label: 'Examine the Claw Marks', eventId: 'clawMarks' },
    { label: 'Examine the Steel Gate', eventId: 'steelGate' },
    { label: 'Attempt to disable the trap (Dex + Tech)', result: 'You fail to disable the trap and it continues spinning dangerously.' }
  ],
  events: [
    {
      id: 'controlPanel',
      title: 'The Control Panel',
      content: 'A small rusted terminal with flickering lights. It seems connected to the trap mechanism.'
    },
    {
      id: 'slashMarks',
      title: 'Slash Marks',
      content: 'Long, curved grooves in the floor tiles. Something sharp passed through recently.'
    },
    {
      id: 'clawMarks',
      title: 'Claw Marks',
      content: 'The scratches on the wall suggest more than just rats have been here.'
    },
    {
      id: 'steelGate',
      title: 'Steel Gate',
      content: 'A solid barrier blocks the tunnel. A keyhole glints in the dark.'
    }
  ]
};

export default function TestChronicle() {
  return <ChroniclePage pageData={testPageData} />;
}