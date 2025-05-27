import React, { useState } from 'react';

const InventoryPanel = ({ inventoryText, setInventoryText }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="p-4 bg-gray-800 text-white rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Inventory</h2>
        <button
          className={`${
            editMode ? 'bg-green-600' : 'bg-yellow-600'
          } px-3 py-1 rounded text-sm hover:opacity-90`}
          onClick={() => setEditMode((prev) => !prev)}
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>

      {editMode ? (
        <textarea
          className="w-full h-48 p-2 rounded bg-gray-900 border border-gray-600 text-white resize-none"
          value={inventoryText}
          onChange={(e) => setInventoryText(e.target.value)}
        />
      ) : (
        <div className="whitespace-pre-wrap text-gray-200">
          {inventoryText || 'No inventory listed.'}
        </div>
      )}
    </div>
  );
};

export default InventoryPanel;