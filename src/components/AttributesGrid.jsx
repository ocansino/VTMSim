// src/components/AttributesGrid.jsx
import React, { useState } from 'react';

const AttributeBlock = ({ category, attributes, editMode, onDotClick }) => (
  <div className="mb-4">
    <h2 className="text-xl font-semibold capitalize mb-2">{category}</h2>
    {Object.entries(attributes).map(([attr, value]) => (
      <div key={attr} className="flex items-center mb-2">
        <span className="w-32 capitalize">{attr}</span>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              onClick={() => editMode && onDotClick(category, attr, i)}
              className={`w-4 h-4 rounded-full border cursor-pointer ${
                i <= value ? 'bg-red-600 border-red-600' : 'bg-gray-700 border-gray-500'
              } ${editMode ? 'hover:ring ring-red-300' : ''}`}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const AttributesGrid = ({ attributes, onAttributesChange }) => {
  const [editMode, setEditMode] = useState(false);
  const [localAttributes, setLocalAttributes] = useState({ ...attributes });

  const toggleEdit = () => {
    if (editMode && onAttributesChange) {
      onAttributesChange(localAttributes);
    }
    setEditMode(!editMode);
  };

  const handleDotClick = (category, attr, value) => {
    setLocalAttributes((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [attr]: value,
      },
    }));
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded shadow-md mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Attributes</h2>
        <button
          className={`${
            editMode ? 'bg-green-600' : 'bg-yellow-600'
          } px-3 py-1 rounded text-sm hover:opacity-90`}
          onClick={toggleEdit}
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {Object.entries(localAttributes).map(([category, values]) => (
          <AttributeBlock
            key={category}
            category={category}
            attributes={values}
            editMode={editMode}
            onDotClick={handleDotClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AttributesGrid;