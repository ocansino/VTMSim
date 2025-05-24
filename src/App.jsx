import React, { useState } from 'react';
import CharacterInfo from './components/CharacterInfo';
import AttributesGrid from './components/AttributesGrid';
import SkillsTable from './components/SkillsTable';
import HealthTracker from './components/HealthTracker';

function App() {
  const [skills, setSkills] = useState({
    athletics: 1, brawl: 2, craft: 0, drive: 0, firearms: 1,
    larceny: 0, melee: 1, stealth: 0, survival: 0,
    animal_ken: 0, etiquette: 0, insight: 0, intimidation: 1,
    leadership: 1, performance: 0, persuasion: 3, streetwise: 0, subterfuge: 2,
    academics: 0, awareness: 2, finance: 0, investigation: 1,
    medicine: 0, occult: 1, politics: 0, science: 0, technology: 0,
  });

  const [attributes, setAttributes] = useState({
    physical: { strength: 2, dexterity: 3, stamina: 2 },
    social: { charisma: 4, manipulation: 2, composure: 3 },
    mental: { intelligence: 3, wits: 2, resolve: 2 },
  });

  const maxHealth = attributes.physical.stamina + 3;
  const maxWillpower = attributes.social.composure + attributes.mental.resolve;


  return (
    <div className="min-h-screen w-screen bg-gray-950 px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="flex-1 w-full">
          <CharacterInfo
            name="Lena Markov"
            concept="Haunted Artist"
            predator="Sandman"
            chronicle="LA by Night"
            ambition="Immortalize her art"
            clan="Toreador"
            sire="Alexei"
            desire="Emotional connection"
            generation={12}
          />
          
        
          <HealthTracker
            maxHealth={maxHealth}
            maxWillpower={maxWillpower}
            
          />
          
        </div>
      </div>

      <AttributesGrid
        attributes={attributes}
        onAttributesChange={setAttributes}
      />
      <SkillsTable
        skills={skills}
        attributes={attributes}
        onSkillsChange={setSkills}
      />
    </div>
  );
}

export default App;