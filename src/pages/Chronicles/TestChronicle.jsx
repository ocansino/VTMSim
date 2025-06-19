// src/pages/TestChronicle.jsx
import React, { useState, useEffect } from 'react';
import ChroniclePage from '../ChroniclePage';
const STORAGE_KEY = 'chronicle_currentPage';
const chroniclePages = [
{
  title: 'Shadows in the Dark',
  sections: [
    {
      heading: 'Meeting Olohand',
      content: [
        { type: 'image', src: 'src/assets/testChronicle/olohandStudy.jpg'},
        {type: 'text', value:`You have started your journey as an fledgling in the San Fernando Valley, a region just outside Los Angeles. It has become known to many of the locals that you are here to find work, and it is not long before you are approached with a proposition. The Ancillae Tremere Olohand approaches you in the Chantry.
        Olohand: "Greetings to you! My name is Olohand. I am an Apprentice of the Fifth Circle, like a middle manager...of sorts. I have been told that you are new to this town, and you are looking for work? I have a task I need someone able to undertake. Please, come to my lab and I will explain the details further". You follow Olohand back to his lab.
        Olohand "I don't often leave this Chantry; my studies take up most of my time. However a few days ago I was in Chatsworth on business, and I heard a curious rumor. An acquaintance of mine swore that they would see shadows of a skeletal nature wandering mindlessly through the mountains. This individual has an...active imagination let's say. However he swears that these creatures are appearing more and more 
        frequently. I doubt its anything serious, probably just a misunderstanding, but I am curious about the truth. Alas, my studies keep me here so I thought I would ask you. Still...."
        Olohand walks over to the map on the wall and points in the direction of the mountains. There is a pin at the center of the area.
        Olohand "If they are real, I would suspect they are coming from that old cold-war era bunker just over the first mountain. I'm looking for an able body to go into the bunker and find what is causing this disturbance. I'm not a wealthy man, but I can pay you a small reward for this task, as well as put in a good word with the Regent. Oh, one other thing. I know a bit about the history of the Valley and I have a 
        strong suspicion that this bunker was once the home of a Sabbat warlord. He met his final death a long long time ago, but still you should keep an eye out for anything he might have left behind. If you find anything, could you return it to me? I would very much like to study it closely."
        After you agree to help Olohand, he thanks you and says: "Please make sure you are ready before you venture into the bunker. Who knows what horrors are inside that place...good luck to you!"
        Olohand bids you farewell, you make your preparations, and you leave to find the bunker.
        `,}
      ],
    },
    {
      heading: 'The Bunker - Entrance',
      content: [
        { type: 'image', src: 'src/assets/testChronicle/bunkerEntrance.jpg'},
        {type: 'text', value:`You are standing at the entrance to the abandoned bunker the scholar Olohand told you about. In a puddle of mud near the entrance way you notice a number of tracks from both animals, and some other unidentifiable footprints of a human nature, passing both in and out of the bunker.
        `,},
        
      ],
    },
  ],
  
  
  gameTips: [
    'These are game tips. They will give you extra information.',
    'For example, if you failed a roll it will mention an effect here.'
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
    { label: 'Investigate the marks',
      type: 'skillCheck',
      description: 'You try to gleam some information from the markings. (Wits + Investigation, Dif: 3)',
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
      content: 'A broken barrier that once sealed off the bunker. It is now a rusted heap of metal protecting nothing. You can use Outcome 1.'
    }
  ],
  choices: [
      {
        id: 'enterBunker',
        label: 'Enter the Bunker',
        description: 'Push your way through the mangled door and enter the bunker.',
        action: 'next', // or a custom handler
      },
      
      
  ],
},
{
    title: 'Bunker - Entrance Corridor',
    sections: [
      {
        heading: 'Last Action Taken',
        content: [
          {type: 'text', value:`You have left the outdoors and have entered a corridor leading further into the bunker.`},
          { type: 'image', src: 'src/assets/testChronicle/bunkerCorridor.jpg'},
        ],
      },
      {
        heading: 'Room Description',
        content: [{type: 'text', value:`Cobwebs form around the corners of the roof. The floor in this small room is mossy and slightly damp. Grass grows from between the cracks. Behind you are the stairs leading back to the outside. In front of you is a long hallway leading further into the bunker.`}],
      },
      
    ],
    
    
    objects: [
      'Rusted metal door leading outdoors',
      'An old wooden crate',
      'A makeshift wooden door leading further into the crypt',
    ],
    actions: [
      { label: 'Turn back towards the door', eventId: 'return'},
      { label: 'Examine the wooden crate for traps',
      type: 'skillCheck',
      description: 'You check the crate to see if it is trapped. (Wits + Investigation, Dif: 2)',
      resultPass: 'The crate is not trapped.',
      resultFail: 'You cannot tell if it is trapped or not.' 
      },
      { label: 'Open the wooden crate', eventId: 'woodenCrate' },
      { label: 'Put your ear to the door',
      type: 'skillCheck',
      description: 'You focus on hearing anything on the other side. (Wits + Awareness, Dif: 2)',
      resultPass: 'You notice a scraping sound on the other side of the door.',
      resultFail: 'You cannot tell if there is something in the next room.' 
      },
      { label: 'Open the door',
      type: 'skillCheck',
      description: 'The door is locked. You can either try and pick the lock(Dex + Larceny, Dif: 2), or try to force it open(Str + Larceny, Dif: 2)',
      resultPass: 'You successfully open the door without making too much noise. You can use the second Outcome.',
      resultFail: 'You open the door, but you make a lot of noise in the process, potentially alerting others to your presence. You can use the second Outcome.' 
      },
      
    ],
    events: [
      {
        id: 'return',
        title: 'The Rusted Door',
        content: 'You can return back to the entrance. You can use Outcome 1 to return to the entrance.'
      },
      {
        id: 'woodenCrate',
        title: 'The Wooden Crate',
        content: 'You search the crate and find a sturdy looking metal pipe(+2 damage)'
      },
    ],
    choices: [
      {
        id: 'exitBunker',
        label: 'Return to entrance',
        description: 'Exit the cold, damp corridor and return to the safety of the surface.',
        action: 'previous', // or a custom handler
      },
      {
        id: 'enterDoor1',
        label: 'Walk through door',
        description: 'Enter through the open door.',
        action: 'next', // or a custom handler
      },
      
      
    ],
},
{
    title: 'Bunker - Entrance Chamber',
    sections: [
      {
        heading: 'Last Action Taken',
        content: [
          {type: 'text', value:`You have opened the door and entered this chamber.`},
        ],
      },
      {
        heading: 'Returning',
        content: [
          {type: 'text', value:`If you are returning to this room, ignore the encounter.`},
          { type: 'image', src: 'src/assets/testChronicle/bunkerChamber.jpg'},
        ],
      },
      {
        heading: 'Room Description',
        content: [{type: 'text', 
          value:`You enter a long cylindrical room scattered with small planks of wood and half assembled rotting furniture. As you enter the room, you find 2 Mindless Undead. The enemies are shambling around the room in no particular routine, and appear extremely desiccated. All non-combat objects are disregarded until after combat finishes.
          `
        },
        { type: 'image', src: 'src/assets/testChronicle/mindlessUndead.jpg'},
        ],
      },
      {
        heading: 'Encounter',
        content: [
          {type: 'text', value:`2 Mindless Undead. Physical 2, Social/Mental 0. Health 4, Willpower 0. Brawl 2, Intimidation 4. 
            If you successfully detected the noise earlier and opened the door quietly, the enemy is unprepared and you get a free turn.`},
          { type: 'meta', value: { defaultEnemies: 2, defaultHealth: 4, defaultDice: 4 } } // optional enhancement
        ],
      },
      {
        heading: 'After Combat',
        content: [{type: 'text', 
          value:`You find nothing of value on the rotting undead. Continue on to explore the room.
          `
        }],
      },
      
    ],
    
    
    objects: [
      'The makeshift door behind you',
      'A wooden door up ahead',
      'A wooden door off to the side',
      'A pile of bones',
      'An Urn ontop of a stone pedestal',
    ],
    actions: [
      { label: 'Turn around', eventId: 'return1'},
      { label: 'Examine the door in front of you', eventId: 'frontDoor' },
      { label: 'Examine the door ahead for traps',
      type: 'skillCheck',
      description: 'You check the door to see if it is trapped. (Wits + Investigation, Dif: 2)',
      resultPass: 'You peer through the window of the door and notice a wire on the other side. It is trapped.',
      resultFail: 'You cannot tell if it is trapped or not.',
      subChecks: [
        {
          description: 'You can attempt to disarm the wire. (Dex + Larceny, Dif: 2)',
          resultPass: 'You slide a stick under the door and activate the trap. You hear a loud thud on the other side of the door.',
          resultFail: 'You fail to activate the trap.',
          
        }
      ] 
      },
      { label: 'Open the door ahead', eventId: 'openDoor' },
      
    ],
    events: [
      {
        id: 'return1',
        title: 'The Makeshift Door',
        content: 'You can return back the way you came. You can use the first outcome to go back.'
      },
      {
        id: 'frontDoor',
        title: 'The Door Ahead',
        content: 'This is a simple wooden door. It is unlocked.'
      },
      {
        id: 'openDoor',
        title: 'The Door Ahead',
        content: `You open the door ahead. 
        If you did not disable the trap, a rusty axe swings down from atop the door frame and strikes you. (Dex + Athletics, Dif: 4) to dodge. Otherwise Take 1 superficial damage.
        If you disabled the trap, you notice a rusty axe embedded into the door from the trap earlier. Use Outcome 2 to proceed through the door.`
      },
    ],
    choices: [
      {
        id: 'exitChamber',
        label: 'Leave the Chamber',
        description: 'Retreat from the chamber back to the corridor.',
        action: 'previous', // or a custom handler
      },
      {
        id: 'frontDoor',
        label: 'Go through the door ahead',
        description: 'Walk through the door into the next room.',
        action: 'previous', // or a custom handler
      },
      
      
    ],
},

]



export default function TestChronicle() {
  const [currentPageIndex, setCurrentPageIndex] = useState(() => {
    const saved = localStorage.getItem('chronicle_currentPage');
    return saved !== null && !isNaN(saved) ? Number(saved) : 0;
  });

  // Load saved progress from localStorage on first render
  useEffect(() => {
    const savedIndex = localStorage.getItem(STORAGE_KEY);
    if (savedIndex !== null && !isNaN(savedIndex)) {
      setCurrentPageIndex(Number(savedIndex));
    }
  }, []);

  // Save current index to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, currentPageIndex);
  }, [currentPageIndex]);
  
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