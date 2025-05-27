// src/components/NotesPanel.jsx
import React, { useState } from 'react';

const NotesPanel = ({ notesText, setNotesText }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Notes</h2>
        <button
          onClick={() => setEditMode((prev) => !prev)}
          className={`${
            editMode ? 'bg-green-600' : 'bg-yellow-600'
          } px-3 py-1 rounded text-sm hover:opacity-90`}
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>

      {editMode ? (
        <textarea
          value={notesText}
          onChange={(e) => setNotesText(e.target.value)}
          className="w-full h-48 p-2 rounded bg-gray-900 border border-gray-600 text-white resize-none"
        />
      ) : (
        <div className="whitespace-pre-wrap text-gray-200">
          {notesText || 'No notes added.'}
        </div>
      )}
    </div>
  );
};

export default NotesPanel;