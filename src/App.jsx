import React, { useState } from 'react';
import { useEffect } from 'react';
import CharacterInfo from './components/CharacterInfo';
import AttributesGrid from './components/AttributesGrid';
import SkillsTable from './components/SkillsTable';
import HealthTracker from './components/HealthTracker';
import DisciplinesPanel from './components/DisciplinesPanel';
import MeritsPanel from './components/MeritsPanel';
import ProfilePanel from './components/ProfilePanel';
import InventoryPanel from './components/InventoryPanel';
import ActionPanel from './components/ActionPanel';
import NotesPanel from './components/NotesPanel';

function App() {
  const [activeTab, setActiveTab] = useState('skills');
  const handleExport = () => {
    const data = {
      characterInfo,
      attributes,
      skills,
      disciplines,
      merits,
      profileText,
      inventoryText, // added now
      notesText,
      health,
      willpower,
      hunger,
      humanity,
      bloodPotency
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${characterInfo.name || 'vtm_character'}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.characterInfo) setCharacterInfo(data.characterInfo);
        if (data.attributes) setAttributes(data.attributes);
        if (data.skills) setSkills(data.skills);
        if (data.disciplines) setDisciplines(data.disciplines);
        if (data.merits) setMerits(data.merits);
        if (data.profileText) setProfileText(data.profileText);
        if (data.inventoryText) setInventoryText(data.inventoryText);
        if (data.notesText) setNotesText(data.notesText);
        if (Array.isArray(data.health)) setHealth(data.health);
        if (Array.isArray(data.willpower)) setWillpower(data.willpower);
        if (typeof data.hunger === 'number') setHunger(data.hunger);
        if (data.humanity) setHumanity(data.humanity);
        if (data.bloodPotency) setBloodPotency(data.bloodPotency);

        alert('Character imported successfully!');
      } catch (err) {
        alert('Failed to import character: Invalid JSON');
      }
    };
    reader.readAsText(file);
  };
  
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

  const [inventoryText, setInventoryText] = useState(
    "List your items, equipment, or resources here..."
  );

  const maxHealth = attributes.physical.stamina + 3;
  const maxWillpower = attributes.social.composure + attributes.mental.resolve;

  const [characterInfo, setCharacterInfo] = useState({
    name: 'Lena Markov',
    concept: 'Haunted Artist',
    predator: 'Sandman',
    chronicle: 'LA by Night',
    ambition: 'Immortalize her art',
    clan: 'Toreador',
    sire: 'Alexei',
    desire: 'Emotional connection',
    generation: 12
  });
  const [notesText, setNotesText] = useState('');
  const [health, setHealth] = useState([]);
  const [willpower, setWillpower] = useState([]);
  const [hunger, setHunger] = useState(0);
  const [humanity, setHumanity] = useState(Array(10).fill(0));
  const [bloodPotency, setBloodPotency] = useState(Array(10).fill(0));
  useEffect(() => {
    const max = attributes.physical.stamina + 3;
    setHealth((prev) => {
      const newArr = [...prev.slice(0, max)];
      while (newArr.length < max) newArr.push(0);
      return newArr;
    });
  }, [attributes.physical.stamina]);

  useEffect(() => {
    const max = attributes.social.composure + attributes.mental.resolve;
    setWillpower((prev) => {
      const newArr = [...prev.slice(0, max)];
      while (newArr.length < max) newArr.push(0);
      return newArr;
    });
  }, [attributes.social.composure, attributes.mental.resolve]);
  
  return (
    
    <div className="min-h-screen w-screen bg-gray-950 px-6 pb-24 pt-8">
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="flex-1 w-full">
          <CharacterInfo
            characterInfo={characterInfo}
            onChange={setCharacterInfo}
          />
          
        
          <HealthTracker
            maxHealth={maxHealth}
            maxWillpower={maxWillpower}
            health={health}
            setHealth={setHealth}
            willpower={willpower}
            setWillpower={setWillpower}
            hunger={hunger}
            setHunger={setHunger}
            humanity={humanity}
            setHumanity={setHumanity}
            bloodPotency={bloodPotency}
            setBloodPotency={setBloodPotency}
            
          />
          
        </div>
      </div>

      <AttributesGrid
        attributes={attributes}
        onAttributesChange={setAttributes}
      />
      <div className="mt-6">
  
      <div className="flex space-x-4 border-b border-gray-700 mb-4">
        
        {['skills', 'disciplines', 'merits', 'profile', 'inventory', 'actions', 'notes'].map((tab) => (
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
        <div className="flex flex-wrap gap-4 mt-6">
          <button
            onClick={handleExport}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
          >
            Export Character
          </button>

          <label className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm cursor-pointer">
            Import Character
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </label>
        </div>
      </div>

    {activeTab === 'skills' && (
    <SkillsTable
      skills={skills}
      attributes={attributes}
      onSkillsChange={setSkills}
    />
    )}

    {activeTab === 'disciplines' && (
      <DisciplinesPanel
        disciplines={disciplines}
        setDisciplines={setDisciplines}
      />
    )}

    {activeTab === 'merits' && (
      <MeritsPanel merits={merits} setMerits={setMerits} />
    )}

    {activeTab === 'profile' && (
      <ProfilePanel profileText={profileText} setProfileText={setProfileText} />
    )}

    {activeTab === 'inventory' && (
      <InventoryPanel
        inventoryText={inventoryText}
        setInventoryText={setInventoryText}
      />
    )}

    {activeTab === 'actions' && (
      <ActionPanel attributes={attributes} skills={skills} bloodPotency={bloodPotency} />
    )}

    {activeTab === 'notes' && (
      <NotesPanel notesText={notesText} setNotesText={setNotesText} />
    )}

    </div>
    
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-700 text-white z-50">
        <div className="flex justify-around py-3 text-sm">
          <button className="flex flex-col items-center focus:outline-none">
            <span className="text-lg">🗺️</span>
            <span>Map</span>
          </button>
          <button className="flex flex-col items-center focus:outline-none">
            <span className="text-lg">🎒</span>
            <span>Inventory</span>
          </button>
          <button className="flex flex-col items-center focus:outline-none">
            <span className="text-lg">📜</span>
            <span>Quest</span>
          </button>
          <button className="flex flex-col items-center focus:outline-none">
            <span className="text-lg">🧛</span>
            <span>Character</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;