import React, { useState } from 'react';

const CharacterInfo = ({ characterInfo, onChange }) => {
  const [editMode, setEditMode] = useState(false);

  const handleChange = (field, value) => {
    onChange({ ...characterInfo, [field]: value });
  };

  const fields = [
    ['Name', 'name'],
    ['Chronicle', 'chronicle'],
    ['Sire', 'sire'],
    ['Concept', 'concept'],
    ['Ambition', 'ambition'],
    ['Desire', 'desire'],
    ['Predator', 'predator'],
    ['Clan', 'clan'],
    ['Generation', 'generation'],
  ];

  return (
    <div className="p-4 bg-gray-800 text-white rounded shadow-md mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Character Info</h2>
        <button
          onClick={() => setEditMode((prev) => !prev)}
          className={`${
            editMode ? 'bg-green-600' : 'bg-yellow-600'
          } px-3 py-1 rounded text-sm hover:opacity-90`}
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 text-sm">
        {fields.map(([label, key]) => (
          <div key={key}>
            <label className="block font-semibold">{label}:</label>
            {editMode ? (
              <input
                className="w-full mt-1 px-2 py-1 bg-gray-900 text-white border border-gray-600 rounded"
                value={characterInfo[key] || ''}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            ) : (
              <div className="mt-1 text-gray-200">{characterInfo[key] || '—'}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterInfo;