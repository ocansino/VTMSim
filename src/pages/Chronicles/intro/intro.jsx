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
        The figure observes your horrifying awakening for a long moment, her calm gaze unwavering. "A messy first meal," she finally states, her voice low and composed, carrying a faint, cultured British lilt. "Predictable, but inefficient. You'll learn to be more discreet." She steps closer, and you recognize the woman who visited you: Emerie Alveston. Her composure is unnerving, especially given the scene before 
        you. You've seen her around campus before, a pale woman with thin features and curly brown hair that just reaches her chin. You've crossed paths in hallways, walked into buildings, but never spoken or 
        interacted. Now, her presence here, at your lowest point, is a terrifying revelation. "Welcome to your new existence, childe," she continues, extending a hand to you. It's an offer of help, but there's an undeniable undercurrent of authority. "The hunger is a demanding master, but it can be controlled. I am Emerie. And it seems, you are mine now."

        She doesn't wait for a response, her eyes flicking to the drained student. "This can't stay here. The Second Inquisition is always watching, always hunting. We need to move." She gestures towards the deeper 
        shadows, indicating a path away from the immediate horror. "Come. There's much you need to understand, and precious little time to learn it." You are still kneeling in the sticky aftermath of your 
        monstrous act. The raw, primal terror of what you've done, combined with the lingering echo of an insatiable hunger, threatens to overwhelm you. Emerie stands patiently, her hand still outstretched, her gaze fixed on you with an unnerving mixture of assessment and expectation. The dead student is a terrifying monument to your transformation.
        `}, 
        
      ],
    },
  ],
  actions: [
    { label: 'Take Her Hand. You Feel An Indescribable Bond With Her.', eventId: 'emerieSire' },
    { label: 'Take Her Hand', eventId: 'emerieMawla' },
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
        targetId: 'page3'
      },
  ],
},
{
  id: 'page5',
  title: 'The Professor',
  sections: [
    {
      heading: 'The Offer',
      content: [
        { type: 'image', src: 'src/pages/Chronicles/intro/assets/EmerieTemp.jpg'},
        {type: 'text', value:`
        You reach out, your hand trembling, and grasp Emerie's. Her grip is firm and surprisingly reassuring amidst the chaos of your mind. You immediately notice how cold her flesh is. She pulls you effortlessly to 
        your feet, her eyes still scanning the area, dismissing the drained student with a clinical, almost detached, glance. "Follow me. Quickly," she murmurs, her voice leaving no room for argument. She moves with a 
        fluid, silent grace you instinctively mirror, navigating the campus shadows with an uncanny ease. You stumble once, your limbs still unfamiliar and uncooperative, but she stabilizes you with a hand on your arm, her touch strangely grounding.
        
        She leads you into a secluded, older academic building you hadn't noticed before, and through a series of quiet, dimly lit hallways. The building is utterly deserted. Finally, she pushes open the door to an 
        empty lecture hall. The room is dark, save for the faint glow filtering in from distant campus lights. She gestures toward a seat near the front. "Sit."
        `},
      ],
    },
    {
      heading: 'The Classroom',
      content: [
        { type: 'image', src: 'src/pages/Chronicles/intro/assets/campusClassroom.jpg'},
        {type: 'text', value:`
        The new hunger gnaws at you, a cold, empty ache that screams for satisfaction, but her presence, her calm authority, is a more immediate demand. You slump into the chair, your body aching, your mind a 
        whirlwind of fear, confusion, and the lingering phantom of ecstasy and horror. Emerie turns to face you, her expression serious, her eyes holding an ancient, knowing depth. "What you are experiencing," she 
        begins, her voice softer now, more pedagogical, "is the Embrace. You are no longer mortal. You are now Kindred. Vampire."

        "I have been observing you for some time," Emerie states, her gaze unwavering. "Your intellect, your drive for knowledge, your resilience—they are rare qualities. The world is changing, and the old ways are 
        crumbling. We need minds like yours. I chose you. I brought you across." She holds up her own wrist for a moment, revealing two faint, almost imperceptible puncture marks. "The thirst you feel now is the 
        blood of the dead. It will be your constant companion, a fire in your veins. But it is also power. You are no longer subject to the frailties of mortal flesh, but to the intricate laws of our kind. Your old life is gone. 
        Your new one, as my childe, as a Tremere, begins tonight."

        You are reeling. The words 'vampire' and 'dead' clash violently with every shred of your former reality. Yet, the chilling emptiness in your gut and the impossible sensation of unlife coursing through your veins 
        scream that she speaks the truth. Questions, desperate and urgent, flood your mind.
        `}, 
        
      ],
    },
  ],
  actions: [
    { label: 'Ask About What Happened To You', eventId: 'q1' },
    { label: 'Ask About What Being a Vampire Entails', eventId: 'q2' },
    { label: 'Ask About The Laws', eventId: 'q3' },
    { label: 'Ask About The Second Inquisition', eventId: 'q4' },
    { label: 'Ask About Our Relationship', eventId: 'q5' },

  ],
  events: [
    {
      id: 'q1',
      title: 'The Embrace',
      content: `
      "What happened to you, childe, is transformation. I drained you of your mortal blood, leaving you at the brink of death, and then I fed you a measure of my own. That act, the exchange of vitae, is the 
      Embrace. It halted your mortal heart and ignited the hunger, turning you into one of us. It is the ultimate act of creation, and of destruction. Your human life, with its frailties and certainties, is over. Your new 
      existence, as a Tremere, as my progeny, has begun."
      `
    },
    {
      id: 'q2',
      title: 'Our Nature',
      content: `
      Emerie sighs, a faint, almost imperceptible sound. "The nature of being a vampire, or Kindred as we prefer to be called, is complex, childe. We are no longer living, yet we are not truly dead. Our hearts do 
      not beat, we do not breathe, and the sun is our bane. Our sustenance is blood - the very force of life itself. We possess strength, speed, and senses far beyond mortal kine, but we are bound by profound 
      weaknesses. We are creatures of the night, driven by an insatiable thirst, and forever separated from the mortal coil we once inhabited. We exist in the shadows, an apex predator in a world that believes us to be myth."
      `
    },
    {
      id: 'q3',
      title: 'The Laws',
      content: `
      Emerie's gaze sharpens, moving from your face to the door. "The laws I mentioned are paramount for our survival, especially now. The most critical is the Masquerade. We are a secret. Mortals must never 
      know of our existence. Your act tonight, while born of instinct, is a grave breach. The consequences of such exposure are catastrophic for all Kindred. That body," she gestures dismissively, "will be dealt with. 
      I have resources. It will be made to look like an unfortunate, but mundane, tragedy. A drug overdose, a random act of violence, a medical emergency – something that fits the mortal narrative. You will learn 
      how to clean your messes more discreetly in the future, for your sake, and for ours."
      `
    },
    {
      id: 'q4',
      title: 'The Second Inquisition',
      content: `
      Emerie's composure finally cracks, a flicker of genuine grimness crossing her features. "The Second Inquisition, childe, is our greatest modern threat. They are mortal hunters, highly organized, globally 
      connected, and terrifyingly effective, often backed by governments and wielding advanced technology alongside their zeal. Unlike the ignorant witch hunters of old, they understand that vampires exist. 
      They target our havens, exploit our weaknesses, and systematically unravel our secrets. Their attack on our Vienna Chantry shattered the very foundation of the Tremere Clan. They are why discretion is no 
      longer merely prudent, but absolutely essential for every single one of us. They are why your uncontrolled act tonight is so gravely dangerous."
      `
    },
    {
      id: 'q5',
      title: 'The Sire and Childe',
      content: `
      Emerie's expression softens almost imperceptibly, a hint of something ancient and deep entering her eyes. "The bond between a sire and childe is fundamental, and often, the most important relationship
      you will ever know in unlife. I am your creator. I gave you this new existence, and in doing so, I have taken on the responsibility for your survival and your understanding of our world. You are bound to me 
      by blood, and through that bond, I will guide you, teach you, and protect you. You will look to me for instruction, for answers, and for your place within the Tremere. This is not merely a familial connection, 
      childe; it is a profound magical and social one, a tie that often lasts for centuries, shaping who and what you become." Use Outcome 1 when ready to move on.
      `
    },
  ],
  choices: [
      {
        id: 'sire',
        label: 'Accept Your Fate',
        description: 'It is a lot to take it, but you decide to go with the flow. Only she can help you now.',
        action: 'goto', // or a custom handler
        targetId: 'page7'
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
{
  id: 'page6',
  title: 'The Professor',
  sections: [
    {
      heading: 'The Offer',
      content: [
        { type: 'image', src: 'src/pages/Chronicles/intro/assets/EmerieTemp.jpg'},
        {type: 'text', value:`
        You reach out, your hand trembling, and grasp Emerie's. Her grip is firm and surprisingly reassuring amidst the chaos of your mind. You immediately notice how cold her flesh is. She pulls you effortlessly to 
        your feet, her eyes still scanning the area, dismissing the drained student with a clinical, almost detached, glance. "Follow me. Quickly," she murmurs, her voice leaving no room for argument. She moves with a 
        fluid, silent grace you instinctively mirror, navigating the campus shadows with an uncanny ease. You stumble once, your limbs still unfamiliar and uncooperative, but she stabilizes you with a hand on your arm, her touch strangely grounding.
        
        She leads you into a secluded, older academic building you hadn't noticed before, and through a series of quiet, dimly lit hallways. The building is utterly deserted. Finally, she pushes open the door to an 
        empty lecture hall. The room is dark, save for the faint glow filtering in from distant campus lights. She gestures toward a seat near the front. "Sit."
        `},
      ],
    },
    {
      heading: 'The Classroom',
      content: [
        { type: 'image', src: 'src/pages/Chronicles/intro/assets/campusClassroom.jpg'},
        {type: 'text', value:`
        The new hunger gnaws at you, a cold, empty ache that screams for satisfaction, but her presence, her calm authority, is a more immediate demand. You slump into the chair, your body aching, your mind a 
        whirlwind of fear, confusion, and the lingering phantom of ecstasy and horror. Emerie turns to face you, her expression serious, her eyes holding an ancient, knowing depth. "What you are experiencing," she 
        begins, her voice softer now, more pedagogical, "is the Embrace. You are no longer mortal. You are now Kindred. Vampire."

        "I was alerted to another presence here on campus" Emerie states, her gaze sharp, "Another one of my - our kind. It led me here, to you. You didn't happen to see them, did you? I thought not. Embraces can be
        a bit hazy. This... this was an unusual, uncontrolled turning. A rogue." She studies your expression, noting your confusion. "Someone acted without permission, without guidance. That makes you dangerous. To 
        yourself, and to us. But it also means you are... unclaimed. A blank slate, albeit a very messy one." She takes a moment to think to herself. She then gestures to your blood-soaked state. "The hunger you feel 
        now is the blood of the dead. It will be your constant companion, a fire in your veins. It is power, but it is also a curse. Your old life is gone. Your new one, as a Kindred,  begins tonight. And for now, you are 
        under my care."

        You are reeling. The words 'vampire' and 'dead' clash violently with every shred of your former reality. Yet, the chilling emptiness in your gut and the impossible sensation of unlife coursing through your veins 
        scream that she speaks the truth. Questions, desperate and urgent, flood your mind.
        `}, 
        
      ],
    },
  ],
  actions: [
    { label: 'Ask About What Happened To You', eventId: 'q1' },
    { label: 'Ask About What Being a Vampire Entails', eventId: 'q2' },
    { label: 'Ask About The Laws', eventId: 'q3' },
    { label: 'Ask About The Second Inquisition', eventId: 'q4' },
    { label: 'Ask About Our Relationship', eventId: 'q5' },

  ],
  events: [
    {
      id: 'q1',
      title: 'The Embrace',
      content: `
      Emerie's expression hardens slightly, her eyes flicking to the blood staining your clothes. "You underwent the Embrace. Someone, either by accident or perhaps trying to cause chaos, drained you to near 
      death and then, for reasons unknown, allowed your body to absorb enough Kindred blood to complete the transformation. You are a fledgling, but without a guiding hand, you're a disaster waiting to 
      happen. Most 'rogue' Embraces result in the quick demise of the fledgling, often by their own uncontrolled hunger or by our kind's 'justice'. You're fortunate I found you before either happened."
      `
    },
    {
      id: 'q2',
      title: 'Our Nature',
      content: `
      Emerie sighs, a faint, almost imperceptible sound. "The nature of being a vampire, or Kindred as we prefer to be called, is complex, childe. We are no longer living, yet we are not truly dead. Our hearts do 
      not beat, we do not breathe, and the sun is our bane. Our sustenance is blood - the very force of life itself. We possess strength, speed, and senses far beyond mortal kine, but we are bound by profound 
      weaknesses. We are creatures of the night, driven by an insatiable thirst, and forever separated from the mortal coil we once inhabited. We exist in the shadows, an apex predator in a world that believes us to be myth."
      `
    },
    {
      id: 'q3',
      title: 'The Laws',
      content: `
      Emerie's gaze sharpens, moving from your face to the door. "The laws I mentioned are paramount for our survival, especially now. The most critical is the Masquerade. We are a secret. Mortals must never 
      know of our existence. Your act tonight, while born of instinct, is a grave breach. The consequences of such exposure are catastrophic for all Kindred. That body," she gestures dismissively, "will be dealt with. 
      I have resources. It will be made to look like an unfortunate, but mundane, tragedy. A drug overdose, a random act of violence, a medical emergency – something that fits the mortal narrative. You will learn 
      how to clean your messes more discreetly in the future, for your sake, and for ours."
      `
    },
    {
      id: 'q4',
      title: 'The Second Inquisition',
      content: `
      Emerie's composure finally cracks, a flicker of genuine grimness crossing her features. "The Second Inquisition, childe, is our greatest modern threat. They are mortal hunters, highly organized, globally 
      connected, and terrifyingly effective, often backed by governments and wielding advanced technology alongside their zeal. Unlike the ignorant witch hunters of old, they understand that vampires exist. 
      They target our havens, exploit our weaknesses, and systematically unravel our secrets. Their attack on our Vienna Chantry shattered the very foundation of the Tremere Clan. They are why discretion is no 
      longer merely prudent, but absolutely essential for every single one of us. They are why your uncontrolled act tonight is so gravely dangerous."
      `
    },
    {
      id: 'q5',
      title: 'The Sire and Childe',
      content: `
      Emerie's gaze is firm, her tone practical. "Traditionally, a sire is the one who performs the Embrace, who grants the Gift of unlife. They are responsible for teaching their childe the laws of our kind, for 
      guiding them through their new existence, and for ensuring they do not breach the Masquerade. The childe, in turn, owes their sire loyalty and obedience. However, your situation is... unique. You have no 
      sire to guide you. That makes you dangerous and vulnerable. For now, I will take on that responsibility. I will act as your Mawla - a mentor, a surrogate sire if you will. I am taking ownership of your 
      education and your integration into Kindred society. You will still owe me the same loyalty and heed my instruction as a surrogate childe, for without it, your future will be short and brutal."
      `
    },
  ],
  choices: [
      {
        id: 'sire',
        label: 'Accept Your Fate',
        description: 'It is a lot to take it, but you decide to go with the flow. Only she can help you now.',
        action: 'goto', // or a custom handler
        targetId: 'page8'
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
{
  id: 'page7',
  title: 'The Interlude',
  sections: [
    {
      heading: 'The Chantry - San Fernando University Annex Building',
      content: [
        { type: 'image', src: 'src/pages/Chronicles/intro/assets/tremereChantry.jpg'},
        {type: 'text', value:
        `The blur of the first few nights is a kaleidoscope of terror, hunger, and bewildering instruction. Emerie moves with unnerving efficiency, guiding you away from the gruesome scene, the drained student 
        seemingly vanishing into the night as if in a bad dream. There are scattered explanations offered, only terse commands to follow, to stay silent, to mimic her preternatural stillness as you navigate the night. 
        Your hunger is a raw, burning ache, a constant companion that Emerie teaches you how to manage - for now.

        Your first night ends at a new destination, an off-campus annex building of San Fernando University, a place that looks nondescript to mortal eyes but, through Emerie's subtle manipulation, becomes your new, 
        hidden reality. This is her Tremere Chantry. It's not the grand, imposing fortress you might imagine as a wizard den from ancient tales, but a series of interconnected, soundproofed rooms, labs, and a 
        surprisingly extensive library concealed behind unassuming office doors.

        Over the following nights, your existence transforms into a disorienting montage. You learn to control the gnawing hunger, Emerie a stern but ever-present guide. She introduces you to the rudimentary 
        principles of Blood Sorcery, demonstrating how to focus your will, how to sense the latent power in all things, though true mastery feels impossibly distant. You spend hours poring over dusty, ancient texts in 
        the Chantry's library, grappling with dense occult theory that somehow, now, makes a terrifying kind of sense. You learn the strictures of the Masquerade, the vital importance of secrecy, and the terrifying 
        omnipresence of the Second Inquisition.

        Emerie assigns you the role of Acolyte. This isn't a title of prestige, but one of utility. You are her extra pair of hands, her shadow, there to aid her in whatever tasks she deems necessary for the Chantry's, and by 
        extension, the Clan's, continued existence in this precarious new era. However it comes with the promise of advancement. Once you come into your own, you will be made an Apprentice, a fully fledged 
        member of the Clan. You observe her, a silent witness to her tireless work - managing contacts, studying arcane lore, conducting hushed conversations that hint at larger, unseen struggles. The days are for 
        daysleep in a carefully concealed room; the nights are for relentless learning and the cold reality of your new, monstrous unlife. Your initial terror slowly gives way to a grim acceptance, replaced by a growing, 
        unsettling curiosity about the powers you now wield and the hidden world you now inhabit.

        As the initial shock of your transformation begins to settle, a different kind of unease takes root: the unsettling realization that the Chantry isn't just Emerie's domain. In the flickering, low-lit nights that follow 
        your Embrace, you begin to acquaint yourself with other figures who move through the annex, their routines as precise and shadowy as Emerie's. Several people seem to come and go, but three come to your mind as permanent residents. 

        There's Olohand, the dignified elder with his white muttonchops, his movements as quiet and deliberate as turning the fragile pages of an ancient manuscript. You've heard him in hushed conversations with 
        Emerie about forgotten histories and the weight of their Clan's lost knowledge. His presence here feels like a living archive, a connection to an older, more formalized world you've only just begun to glimpse.

        And then there's Stephen Benson, Olohand's childe. He's the most outwardly awkward among them, often seen hunched over a laptop in a quiet corner or shuffling quickly through the Chantry's narrow 
        hallways, a perpetually stressed look on his pale face. You've heard whispered exchanges about "brown paper packages" and "sourcing rare texts," his perpetual task. He seems more at home in the realm of 
        ancient languages than in the new, dangerous reality you now inhabit.

        Finally, there's Serena "Seraph" Varma, the other Apprentice. She's a stark contrast to Stephen's academic nervousness, moving with a sharp, almost military precision. Her eyes seem to constantly scan, assess, 
        and her focus is clearly on the immediate, tangible threats. While Olohand and Stephen are buried in the past and texts, Serena feels rooted firmly in the dangerous present, her vigilance a constant reminder of 
        the unseen enemies lurking just outside the Chantry's walls.


        `},
        
      ],
    },
    
    
    
  ],
  
  
  actions: [
    { label: 'Lost In The Pursuit Of Knowledge', eventId: 'introStudent' },
    { label: 'Sought A Fleeting Moment Of Connection', eventId: 'introSeeker' },
    
    
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
        label: 'Go Back',
        description: 'This does not sound right.',
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