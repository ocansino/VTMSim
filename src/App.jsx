import React from 'react';
import CharacterInfo from './components/CharacterInfo';
import AttributesGrid from './components/AttributesGrid';
import SkillsTable from './components/SkillsTable';

const characterData = {
  name: 'Lena Markov',
  concept: 'Haunted Artist',
  predator: 'Sandman',
  chronicle: 'LA by Night',
  ambition: 'Immortalize her art',
  clan: 'Toreador',
  sire: 'Alexei',
  desire: 'Emotional connection',
  generation: 12,
  attributes: {
    physical: {
      strength: 2,
      dexterity: 3,
      stamina: 2,
    },
    social: {
      charisma: 4,
      manipulation: 2,
      composure: 3,
    },
    mental: {
      intelligence: 3,
      wits: 2,
      resolve: 2,
    },
  },
  skills: {
    athletics: 1,
    brawl: 2,
    craft: 0,
    drive: 0,
    firearms: 1,
    larceny: 0,
    melee: 1,
    stealth: 0,
    survival: 0,
    animal_ken: 0,
    etiquette: 0,
    insight: 0,
    intimidation: 1,
    leadership: 1,
    performance: 0,
    persuasion: 3,
    streetwise: 0,
    subterfuge: 2,
    academics: 0,
    awareness: 2,
    finance: 0,
    investigation: 1,
    medicine: 0,
    occult: 1,
    politics: 0,
    science: 0,
    technology: 0,
  },
};

function App() {
  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <CharacterInfo
        name={characterData.name}
        concept={characterData.concept}
        predator={characterData.predator}
        chronicle={characterData.chronicle}
        ambition={characterData.ambition}
        clan={characterData.clan}
        sire={characterData.sire}
        desire={characterData.desire}
        generation={characterData.generation}
      />
      <AttributesGrid attributes={characterData.attributes} />
      <SkillsTable skills={characterData.skills} attributes={characterData.attributes} />
    </div>
  );
}

export default App;