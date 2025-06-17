// src/pages/TestChronicle.jsx
import React from 'react';
import ChroniclePage from './ChroniclePage';

const testPageData = {
  title: 'Growing Rat Problem',
  description: `The air in this room is moist and the floor is damp. There is a strong smell of sewage.`,
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