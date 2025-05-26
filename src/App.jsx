import React, { useState } from 'react';
import CharacterInfo from './components/CharacterInfo';
import AttributesGrid from './components/AttributesGrid';
import SkillsTable from './components/SkillsTable';
import HealthTracker from './components/HealthTracker';
import DisciplinesPanel from './components/DisciplinesPanel';
import MeritsPanel from './components/MeritsPanel';
import ProfilePanel from './components/ProfilePanel';

function App() {
  const [activeTab, setActiveTab] = useState('skills');
  const [disciplines, setDisciplines] = useState([
  {
    name: 'Auspex',
    level: 3,
    powers: ['Heightened Senses', 'Sense the Unseen', 'Scry the Soul'],
  },
  {
    name: 'Celerity',
    level: 2,
    powers: ['Cat’s Grace', 'Rapid Reflexes'],
  },
  ]);

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

  const [merits, setMerits] = useState([
    { name: 'Iron Will', level: 2, descriptors: ['Resist Dominate', 'Resist Frenzy'] },
  ]);

  const [profileText, setProfileText] = useState(
    "Describe your character's backstory, appearance, or motivations here..."
  );

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
      <div className="mt-6">
  
      <div className="flex space-x-4 border-b border-gray-700 mb-4">
        {['skills', 'disciplines', 'merits', 'profile'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold uppercase tracking-wide text-sm border-b-2 transition-colors ${
              activeTab === tab
                ? 'border-yellow-500 text-yellow-400'
                : 'border-transparent text-gray-400 hover:text-yellow-300'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

    {activeTab === 'skills' && (
    <SkillsTable
      skills={skills}
      attributes={attributes}
      onSkillsChange={setSkills}
    />
    )}

    {activeTab === 'disciplines' && (
      <DisciplinesPanel disciplines={disciplines} />
    )}

    {activeTab === 'merits' && (
      <MeritsPanel merits={merits} setMerits={setMerits} />
    )}

    {activeTab === 'profile' && (
      <ProfilePanel profileText={profileText} setProfileText={setProfileText} />
    )}


    </div>

    </div>
  );
}

export default App;