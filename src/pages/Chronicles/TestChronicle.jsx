// src/pages/TestChronicle.jsx
import React, { useState } from 'react';
import ChroniclePage from '../ChroniclePage';

const chroniclePages = [
{
  title: 'Shadows in the Dark',
  sections: [
    {
      heading: 'Meeting Olohand',
      paragraphs: [
        `You have started your journey as an fledgling in the San Fernando Valley, a region just outside Los Angeles. It has become known to many of the locals that you are here to find work, and it is not long before you are approached with a proposition. The Ancillae Tremere Olohand approaches you in the Chantry.
        Olohand: "Greetings to you! My name is Olohand. I am an Apprentice of the Fifth Circle, like a middle manager...of sorts. I have been told that you are new to this town, and you are looking for work? I have a task I need someone able to undertake. Please, come to my lab and I will explain the details further". You follow Olohand back to his lab.
        Olohand "I don't often leave this Chantry; my studies take up most of my time. However a few days ago I was in Chatsworth on business, and I heard a curious rumor. An acquaintance of mine swore that they would see shadows of a skeletal nature wandering mindlessly through the mountains. This individual has an...active imagination let's say. However he swears that these creatures are appearing more and more 
        frequently. I doubt its anything serious, probably just a misunderstanding, but I am curious about the truth. Alas, my studies keep me here so I thought I would ask you. Still...."
        Olohand walks over to the map on the wall and points in the direction of the mountains. There is a pin at the center of the area.
        Olohand "If they are real, I would suspect they are coming from that old cold-war era bunker just over the first mountain. I'm looking for an able body to go into the bunker and find what is causing this disturbance. I'm not a wealthy man, but I can pay you a small reward for this task, as well as put in a good word with the Regent. Oh, one other thing. I know a bit about the history of the Valley and I have a 
        strong suspicion that this bunker was once the home of a Sabbat warlord. He met his final death a long long time ago, but still you should keep an eye out for anything he might have left behind. If you find anything, could you return it to me? I would very much like to study it closely."
        After you agree to help Olohand, he thanks you and says: "Please make sure you are ready before you venture into the bunker. Who knows what horrors are inside that place...good luck to you!"
        Olohand bids you farewell, you make your preparations, and you leave to find the bunker.
        `,
      ],
    },
    {
      heading: 'The Bunker - Entrance',
      paragraphs: [
        `You are standing at the entrance to the abandoned bunker the scholar Olohand told you about. In a puddle of mud near the entrance way you notice a number of tracks from both animals, and some other unidentifiable footprints of a human nature, passing both in and out of the bunker.
        `,
      ],
    },
  ],
  
  image: 'src/assets/testChronicle/olohandStudy.jpg', // replace with actual path or URL
  gameTips: [
    'It is too dangerous to rest in the bunker',
    'If you have fallen through the floor, you are prone and stunned for a turn.'
  ],
  
  objects: [
    'A Control Panel',
    'Slash Marks',
    'Claw Marks',
    'Steel Entrance',
  ],
  actions: [
    { label: 'Examine the Control Panel', eventId: 'controlPanel' },
    { label: 'Examine the Slash Marks', eventId: 'slashMarks' },
    { label: 'Examine the Claw Marks', eventId: 'clawMarks' },
    { label: 'Examine the Steel Gate', eventId: 'steelGate' },
    { label: 'Investigate the entrance (Wits + Investigation, Dif: 3)',
      type: 'skillCheck',
      resultPass: 'You notice that the Slash Marks and Claw Marks probably belonged to the same creature.',
      resultFail: 'You fail to notice anything out of the ordinary.' 
      
    }
  ],
  events: [
    {
      id: 'controlPanel',
      title: 'The Control Panel',
      content: 'A small rusted terminal with broken lightbulbs. It seems to have been once connected to the door mechanism.'
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
      content: 'A broken barrier that once sealed off the bunker. It is now a rusted heap of metal protecting nothing.'
    }
  ]
},
{
    title: 'Bunker - Entrance Corridor',
    sections: [
      {
        heading: 'Last Action Taken',
        paragraphs: [`You have left the outdoors and have entered a corridor leading further into the bunker.`],
      },
      {
        heading: 'Room Description',
        paragraphs: [`Cobwebs form around the corners of the roof. The floor in this small room is mossy and slightly damp. Grass grows from between the cracks.`],
      },
      
    ],
    image: 'src/assets/testChronicle/bunkerEntrance.jpg',
    
    objects: [
      'Rusted metal door leading outdoors',
      'An old wooden crate',
      'A wooden door leading further into the crypt',
    ],
    actions: [
      { label: 'Leave', eventId: 'return'},
      { label: 'Examine the wooden crate for traps (Wits + Investigation, Dif: 2)',
      type: 'skillCheck',
      resultPass: 'The crate is not trapped.',
      resultFail: 'You cannot tell if it is trapped or not.' 
      },
      { label: 'Open the wooden crate', eventId: 'woodenCrate' },
    ],
    events: [
      {
        id: 'return',
        title: 'The Rusted Door',
        content: 'You return back to the entrance.'
      },
      {
        id: 'woodenCrate',
        title: 'The Wooden Crate',
        content: 'You search the crate and find a sturdy looking metal pipe(+2 damage)'
      },
    ],
},

]



export default function TestChronicle() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleNext = () => {
    if (currentPageIndex < chroniclePages.length - 1) {
      setCurrentPageIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <ChroniclePage
        pageData={chroniclePages[currentPageIndex]}
        onNext={handleNext}
        onPrevious={handlePrev}
        isFirstPage={currentPageIndex === 0}
        isLastPage={currentPageIndex === chroniclePages.length - 1}
      />

      
    </div>
  );
}