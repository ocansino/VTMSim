// src/pages/intro.jsx
import React, { useState, useEffect } from 'react';
import ChroniclePage from '../../ChroniclePage';
const STORAGE_KEY = 'chronicle_currentPage';
const chroniclePages = [
{
  id: 'page1',
  title: 'The Prelude',
  sections: [
    {
      heading: 'San Fernando University',
      content: [
        { type: 'image', src: 'src/pages/Chronicles/intro/assets/campusNight.jpg'},
        {type: 'text', value:
        `You find yourself on campus, deep into the night, as the sprawling grounds of San Fernando University hum with a different kind of energy. The air, cooled hours ago by the descending sun, carries the sweet, heavy scent of night-blooming jasmine and the distant hum of exhaust fumes from the nearby streets. Lights blaze in lecture halls and dormitories, casting sharp, defined shadows across the manicured lawns and concrete pathways. Few students remain, most already retreated to their homes, leaving the campus to its own nocturnal rhythm.
        A shiver traces its way down your spine, though it isn't from the chill. A prickle of unease settles in, making the hairs on your arms stand on end. It feels like someone is watching you, even though the few students you do see are lost in their own worlds, hurrying by or scrolling through their phones. Maybe it was just the exhaustion of the day, a weariness that had been clinging to you for weeks now, making everything feel dull and distant. Tonight, though, feels different. Heavier. Like the prelude to something momentous, something you couldn't quite name.
        Your mind calms for a second, and you begin to snap back to reality. Why are you here?
        `},
        
      ],
    },
    
    
    
  ],
  gameTips: [
    'These are game tips. They will give you extra information.',
    `The choices below aren't that important, they just serve as extra roleplaying for the intro. In the future, they could matter.`
  ],
  
  actions: [
    { label: 'Lost In The Pursuit Of Knowledge', eventId: 'introStudent' },
    { label: 'Sought A Fleeting Moment Of Connection', eventId: 'introSeeker' },
    { label: 'Bound By Duty', eventId: 'introDuty' },
    { label: 'Drawn By The Allure Of The Unknown', eventId: 'introAllured' },
    
  ],
  events: [
    {
      id: 'introStudent',
      title: 'The Dedicated Student',
      content: `The library's hushed aisles were your sanctuary, or perhaps a dimly lit lab or classroom your domain. You were driven by an insatiable hunger for understanding, which lead you to
      pore over advanced texts, seeking the answers whispered within. Perhaps you immersed yourself in complex formulae or algorithms, trying to unravel the cold, elegant truth of the universe.
      Maybe you engaged in a late-night study group, pushing the boundaries of your intellect with fellow insomniacs. You are The Student. Use outcome 1.
      `
    },
    {
      id: 'introSeeker',
      title: 'The Seeker',
      content: `The pulse of the night drew you, for many possible reasons. It could be you were chasing the fleeting high of a campus party, hoping to lose yourself in the crowd and the music.
      Another possibility was meeting a clandestine contact, exchanging hushed words and secrets under the cover of darkness. 
      Or perhaps you were simply wandering, drawn by the distant promise of companionship, or perhaps just the desire to not be alone. You are The Seeker. Use outcome 2.
      `
    },
    {
      id: 'introDuty',
      title: 'The Bound',
      content: `You were bound by duty, grinding out a living under the cover of night. The campus was your employer, a necessary evil, as you worked a lonely shift, cleaning deserted halls or monitoring silent security feeds.
      Perhaps you assisted a reclusive professor, your duties taking you into obscure corners of laboratories or archives. Or maybe delivered late-night provisions, moving through the shadows unseen, a ghost in the machine. You are The Bound. Use outcome 1.
      `
    },
    {
      id: 'introAllured',
      title: 'The Allured',
      content: `The campus held secrets, and your restless curiosity wouldn't let you rest until you uncovered them, whether it was investigating whispered urban legends, drawn to the thrill of a chilling mystery, or
      documenting the forgotten: exploring abandoned buildings or hidden tunnels beneath the university. You are The Allured. Use outcome 2.
      `
    },
  ],
  choices: [
      {
        id: 'studentBound',
        label: 'Fulfill your purpose',
        description: 'You are supposed to be here, but not for the reason you think.',
        action: 'goto', // or a custom handler
        targetId: 'page2'
      },
      {
        id: 'seekerAllured',
        label: 'Find your purpose',
        description: 'You are an outsider, who came here for a purpose.',
        action: 'goto', // or a custom handler
        targetId: 'page3'
      },
      
      
  ],  
},
{
  id: 'page2',
  title: 'The Embrace',
  sections: [
    {
      heading: 'San Fernando University',
      content: [
        { type: 'image', src: 'src/pages/Chronicles/intro/assets/campusNight.jpg'},
        {type: 'text', value:
        `A chill that has nothing to do with the night air seizes you. It's a profound cold, seeping into your very bones, stealing the warmth from your skin. The faint campus sounds — a distant car, the rustle of leaves, your own shallow breath — suddenly become muted, then strangely amplified, then utterly silent.
        The chilling unease you feel intensifies, pulling you deeper into the university's shadowed heart. It's a magnetic draw, cold and undeniable, like an invisible current guiding you through the campus. Your feet carry you, almost against your will, towards an older building - a secluded academic hall.
        `},
      ],
    },
    {
      heading: 'The Secluded Hall',
      content: [
        { type: 'image', src: 'src/pages/Chronicles/intro/assets/campusHallway.jpg'},
        {type: 'text', value:
        `The air inside grows colder still, charged with an unnatural stillness that makes the hairs on your neck stand on end. The faint sounds of the campus outside vanish, replaced by a profound, echoing silence. The corridor ahead of you, poorly lit and smelling faintly of dust, seems to stretch endlessly into an abyss. Every instinct screams at you to turn back, but something compels you forward, a chilling fascination.`}, 
        {type: 'text', value:`As you step fully into that oppressive darkness, A shape detaches itself from the deepest shadows - too fast, too fluid, too wrong to be human. A moment later, you feel pure bliss. The fear you felt as the figure approached melts away. Your mind empties as a dizzying weakness washes over you, a drain more complete than any exhaustion you've ever known. 
        It's as if every drop of life, every spark of light, is being siphoned from your very core. A whisper, too low to understand, seems to echo directly in your mind. Then, only the chilling, absolute void. A falling sensation into an abyss darker than any night, colder than any ice. Your consciousness, your very being, unravels into nothingness.`},
      ],
    },
  ],
  actions: [
    { label: 'Succumb To The Void', eventId: 'embrace' },
  ],
  events: [
    {
      id: 'embrace',
      title: 'Fall Deeper and Deeper into Oblivion',
      content: `You fall to the darkness........
      Use Outcome 1.
      `
    },
  ],
  choices: [
      {
        id: 'theEmbrace',
        label: 'Embrace Oblivion',
        description: 'The void awaits.',
        action: 'goto', // or a custom handler
        targetId: 'page4'
      },
      {
        id: 'goBack',
        label: 'Go back',
        description: 'I want to go back to the previous page',
        action: 'goto', // or a custom handler
        targetId: 'page1'
      },
  ],
},
{
  id: 'page3',
  title: 'The Embrace',
  sections: [
    {
      heading: 'San Fernando University',
      content: [
        { type: 'image', src: 'src/pages/Chronicles/intro/assets/campusNight.jpg'},
        {type: 'text', value:
        `A chill that has nothing to do with the night air seizes you. It's a profound cold, seeping into your very bones, stealing the warmth from your skin. The faint campus sounds — a distant car, the rustle of leaves, your own shallow breath — suddenly become muted, then strangely amplified, then utterly silent.
        The chilling unease you feel intensifies, pulling you deeper into the university's shadowed heart. It's a magnetic draw, cold and undeniable, like an invisible current guiding you through the campus. Your feet carry you, almost against your will, towards an older building - a secluded academic hall.
        `},
      ],
    },
    {
      heading: 'The Lawn',
      content: [
        { type: 'image', src: 'src/pages/Chronicles/intro/assets/campusLawn.jpg'},
        {type: 'text', value:
        `The prickle of unease outside evolves into a palpable sense of being watched, of being hunted. The nocturnal rhythms of the campus suddenly feel predatory, the shadows stretching long and hungry. Your chosen path leads you instead into an unexpected, isolated corner of the university grounds. The air around you goes unnaturally still, the distant hum of traffic and student chatter fading into an oppressive silence.`}, 
        {type: 'text', value:
        `Your heart pounds, a frantic drum against your ribs, as you realize you are utterly alone. You can see the building approaching, only a small lawn in between you and safety. You never make it inside. A shape detaches itself from the deepest shadows - too fast, too fluid, too wrong to be human. It moves with a predatory grace, a silent, inevitable approach that locks you in place with primal fear.`},
        {type: 'text', value:
        `It crashes into you, and you fall to the ground. It is on top of you. A moment later, you feel pure bliss. The fear you felt as the figure appeared melts away. Your mind empties as a dizzying weakness washes over you, a drain more complete than any exhaustion you've ever known. It's as if every drop of life, every spark of light, is being siphoned from your very core.
         A whisper, too low to understand, seems to echo directly in your mind. Then, only the chilling, absolute void. A falling sensation into an abyss darker than any night, colder than any ice. Your consciousness, your very being, unravels into nothingness.  
        `},
      ],
    },
  ],
  actions: [
    { label: 'Succumb To The Void', eventId: 'embrace' },
  ],
  events: [
    {
      id: 'embrace',
      title: 'Fall Deeper and Deeper into Oblivion',
      content: `You fall to the darkness........
      Use Outcome 1.
      `
    },
  ],
  choices: [
      {
        id: 'theEmbrace',
        label: 'Embrace Oblivion',
        description: 'The void awaits.',
        action: 'goto', // or a custom handler
        targetId: 'page4'
      },
      {
        id: 'goBack',
        label: 'Go back',
        description: 'I want to go back to the previous page',
        action: 'goto', // or a custom handler
        targetId: 'page1'
      },
  ],
},
{
  id: 'page4',
  title: 'The Brutal Awakening',
  sections: [
    {
      heading: 'The Lawn',
      content: [
        { type: 'image', src: 'src/pages/Chronicles/intro/assets/campusLawn.jpg'},
        {type: 'text', value:`A gasp tears through you, but it's not for air. There's no need for breath, no beat in your chest. You are awake, but profoundly, terrifyingly changed. The darkness that consumed you moments ago now feels like a thin veil, easily torn. An unimaginable sensation surges through every fiber of your being—a wave of pure, exquisite bliss unlike anything you've ever known. It's a shocking ecstasy, a profound clarity 
        that elevates you beyond mortal limits. Every nerve ending sings, every thought is razor-sharp. You are laying in the lawn outside the Academic Hall at the base of a tree. You take in your surroundings. The world explodes around you with a horrifying vibrancy.

        Sounds are razor-sharp. You can hear the individual rustle of leaves on a distant tree, the frantic beat of a squirrel's heart across the quad, the low, guttural murmur of pipes deep within the campus buildings. 
        It's an overwhelming, painful symphony. Smells are intoxicatingly vivid. The metallic tang of rust on a nearby fence, the earthy scent of damp soil, the faint, cloying sweetness of human sweat, and something 
        else: something rich, vital, and overwhelmingly delicious. Colors are deeper, more vibrant, yet strangely cold. The greens of the grass are almost emerald, the asphalt a stark, unyielding grey.
        
        Then, the Hunger. It's a primal, all-consuming ache in your gut, a burning thirst that makes your throat raw and your muscles scream. It's not just hunger for food or water; it's a ravenous, desperate craving for 
        that rich, vital scent you now detect everywhere. It's a need that threatens to consume your every thought, every instinct. The bliss curdles into desperation, the clarity into a singular, animalistic focus. A red 
        haze descends, vision blurring, the world narrowing to that one desperate need. You lunge forward, a terrifying, unstoppable urge driving you. Your memory blurs, and you feel flashes of emotions. Primal 
        instincts, along with rage, desperation, and fear. Then there is only the tearing, the gushing warmth, and the brief, shuddering satisfaction as the world dissolves into an intoxicating void. 
        `},
      ],
    },
    {
      heading: 'The Degradation',
      content: [
        { type: 'image', src: 'src/pages/Chronicles/intro/assets/fear.jpg'},
        {type: 'text', value:`
        The next thing you know, you are on your knees, cold, sticky moisture clinging to your face and hands. The campus sounds have returned, but muffled, distant. The sublime ecstasy is gone, replaced by a 
        profound, chilling emptiness. Your mind slowly pieces together fractured images: a pale, still face; a torn piece of fabric; the faint, coppery tang in the air. A single, horrifying realization claws its way into your 
        consciousness: you are covered in blood, and a lifeless body lies before you—a student, utterly drained. You did this. The Hunger. Your first act as something new, something monstrous.
        
        Just as the primal horror truly sinks in, a figure steps out of the deeper shadows. She moves with an elegant, almost preternatural stillness, her silhouette defined against the campus lights. Her expression is 
        calm, authoritative, perhaps a touch weary, but utterly in control. She sizes you up in an instant, her gaze cool and assessing, missing nothing of your disoriented terror and burgeoning monstrous urges.
        `}, 
        
      ],
    },
  ],
  actions: [
    { label: 'You Feel An Indescribable Bond With Her', eventId: 'emerieSire' },
    { label: 'Listen To The Woman', eventId: 'emerieMawla' },
  ],
  events: [
    {
      id: 'emerieSire',
      title: 'An Understanding',
      content: `You are horrified by your current state. However, you feel a small amount of relief when she appears. You don't know why.
      Use Outcome 1 if you are a Tremere and Emerie is your Sire.
      `
    },
    {
      id: 'emerieMawla',
      title: 'The Woman',
      content: `You are horrified by your current state. She seems like she might know what happened.
      Use Outcome 2.
      `
    },
  ],
  choices: [
      {
        id: 'sire',
        label: 'Listen',
        description: 'Listen to her',
        action: 'goto', // or a custom handler
        targetId: 'page5'
      },
      {
        id: 'mawla',
        label: 'Go back',
        description: 'Listen to her',
        action: 'goto', // or a custom handler
        targetId: 'page6'
      },
      {
        id: 'goBack',
        label: 'Go back',
        description: 'I want to go back to the previous page',
        action: 'goto', // or a custom handler
        targetId: 'page4'
      },
  ],
},
]

export default function intro() {
  const [currentPageIndex, setCurrentPageIndex] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved !== null && !isNaN(saved) ? Number(saved) : 0;
  });

  //const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
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

  const handleGoToSection = (targetId) => {
    const targetIndex = chroniclePages.findIndex((page) => page.id === targetId);
    if (targetIndex !== -1) {
      setCurrentPageIndex(targetIndex);
    }
  };

  
  
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
        goToSection={handleGoToSection}
        isFirstPage={currentPageIndex === 0}
        isLastPage={currentPageIndex === chroniclePages.length - 1}
      />

      
    </div>
  );
}