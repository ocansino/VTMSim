// src/components/SkillsTable.jsx
import React, { useState } from 'react';

const SkillsTable = ({ skills, attributes, onSkillsChange }) => {
  const [editMode, setEditMode] = useState(false);
  const [localSkills, setLocalSkills] = useState({ ...skills });

  const handleRoll = (skillName, attributeName) => {
    const diceCount =
      (attributes?.[attributeName]?.[attributeName] || 0) + (skills?.[skillName] || 0);
    const rolls = Array.from({ length: diceCount }, () => Math.ceil(Math.random() * 10));
    const successes = rolls.filter((r) => r >= 6).length;

    alert(
      `Rolling ${skillName.replace(/_/g, ' ')}: [${rolls.join(', ')}] → ${successes} successes`
    );
  };

  const toggleEdit = () => {
    if (editMode && onSkillsChange) {
      onSkillsChange(localSkills); // save changes
    }
    setEditMode(!editMode);
  };

  const handleDotClick = (skillName, value) => {
    if (!editMode) return;
    setLocalSkills((prev) => ({
      ...prev,
      [skillName]: value,
    }));
  };

  const skillGroups = {
    Physical: [
      { name: 'athletics', attribute: 'strength' },
      { name: 'brawl', attribute: 'strength' },
      { name: 'craft', attribute: 'dexterity' },
      { name: 'drive', attribute: 'dexterity' },
      { name: 'firearms', attribute: 'dexterity' },
      { name: 'larceny', attribute: 'dexterity' },
      { name: 'melee', attribute: 'strength' },
      { name: 'stealth', attribute: 'dexterity' },
      { name: 'survival', attribute: 'stamina' },
    ],
    Social: [
      { name: 'animal_ken', attribute: 'charisma' },
      { name: 'etiquette', attribute: 'charisma' },
      { name: 'insight', attribute: 'composure' },
      { name: 'intimidation', attribute: 'manipulation' },
      { name: 'leadership', attribute: 'charisma' },
      { name: 'performance', attribute: 'charisma' },
      { name: 'persuasion', attribute: 'manipulation' },
      { name: 'streetwise', attribute: 'manipulation' },
      { name: 'subterfuge', attribute: 'manipulation' },
    ],
    Mental: [
      { name: 'academics', attribute: 'intelligence' },
      { name: 'awareness', attribute: 'wits' },
      { name: 'finance', attribute: 'intelligence' },
      { name: 'investigation', attribute: 'intelligence' },
      { name: 'medicine', attribute: 'intelligence' },
      { name: 'occult', attribute: 'intelligence' },
      { name: 'politics', attribute: 'intelligence' },
      { name: 'science', attribute: 'intelligence' },
      { name: 'technology', attribute: 'intelligence' },
    ],
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded shadow-md mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <button
          className={`${
            editMode ? 'bg-green-600' : 'bg-yellow-600'
          } px-3 py-1 rounded text-sm hover:opacity-90`}
          onClick={toggleEdit}
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>

      {Object.entries(skillGroups).map(([category, group]) => (
        <div key={category} className="mb-4">
          <h3 className="text-lg font-bold mb-2">{category}</h3>
          <div className="grid grid-cols-1 gap-2">
            {group.map((skill) => (
              <div
                key={skill.name}
                className="grid grid-cols-12 items-center text-sm bg-gray-700 rounded px-3 py-2"
              >
                <span className="col-span-4 capitalize">{skill.name.replace(/_/g, ' ')}</span>

                <div className="col-span-4 flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      onClick={() => handleDotClick(skill.name, i)}
                      className={`w-3 h-3 rounded-full border cursor-pointer ${
                        i <= (localSkills?.[skill.name] || 0)
                          ? 'bg-red-600 border-red-600'
                          : 'bg-gray-700 border-gray-500'
                      } ${editMode ? 'hover:ring ring-red-300' : ''}`}
                    />
                  ))}
                </div>

                <div className="col-span-4 text-right">
                  <button
                    className="bg-indigo-600 px-2 py-1 rounded text-sm hover:bg-indigo-700"
                    onClick={() => handleRoll(skill.name, skill.attribute)}
                    disabled={editMode}
                  >
                    Roll
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsTable;