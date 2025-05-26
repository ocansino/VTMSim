import React, { useState } from 'react';

const ProfilePanel = ({ profileText, setProfileText }) => {
  const [editMode, setEditMode] = useState(false);
  const [localText, setLocalText] = useState(profileText);

  const toggleEdit = () => {
    if (editMode) {
      setProfileText(localText); // Save on exit
    }
    setEditMode(!editMode);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Character Profile</h2>
        <button
          onClick={toggleEdit}
          className={`${
            editMode ? 'bg-green-600' : 'bg-yellow-600'
          } px-3 py-1 rounded text-sm hover:opacity-90`}
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>

      {editMode ? (
        <textarea
          className="w-full h-60 p-3 rounded bg-gray-900 text-white border border-gray-600"
          value={localText}
          onChange={(e) => setLocalText(e.target.value)}
        />
      ) : (
        <p className="whitespace-pre-wrap text-gray-200">{profileText}</p>
      )}
    </div>
  );
};

export default ProfilePanel;