import React, { useState } from 'react';

const MeritRow = ({
  merit,
  index,
  editMode,
  onNameChange,
  onLevelChange,
  onDescriptorChange,
  onAddDescriptor,
  onRemoveDescriptor,
  onRemoveMerit,
}) => (
  <div className="bg-gray-700 p-4 rounded mb-4">
    {editMode ? (
      <input
        className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-lg font-semibold mb-2 w-full"
        value={merit.name}
        onChange={(e) => onNameChange(index, e.target.value)}
      />
    ) : (
      <h3 className="text-lg font-semibold mb-1">{merit.name}</h3>
    )}

    <div className="flex items-center mb-2">
      <span className="text-sm text-gray-300 mr-2">Level:</span>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          onClick={() =>
            editMode &&
            onLevelChange(index, merit.level === i ? i - 1 : i)
          }
          className={`w-4 h-4 rounded-full border mr-1 cursor-pointer ${
            i <= merit.level
              ? 'bg-green-500 border-green-500'
              : 'bg-gray-700 border-gray-500'
          } ${editMode ? 'hover:ring ring-green-300' : ''}`}
        />
      ))}
    </div>

    <div className="mb-2">
      <p className="text-sm text-gray-300 mb-1">Descriptors:</p>
      <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
        {merit.descriptors.map((desc, dIdx) => (
          <li key={dIdx}>
            {editMode ? (
              <div className="flex items-center space-x-2">
                <input
                  className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-sm w-full"
                  value={desc}
                  onChange={(e) =>
                    onDescriptorChange(index, dIdx, e.target.value)
                  }
                />
                <button
                  className="text-red-400 hover:text-red-600"
                  onClick={() => onRemoveDescriptor(index, dIdx)}
                >
                  ✕
                </button>
              </div>
            ) : (
              desc
            )}
          </li>
        ))}
      </ul>
      {editMode && (
        <button
          onClick={() => onAddDescriptor(index)}
          className="mt-2 text-sm text-yellow-400 hover:text-yellow-200"
        >
          + Add Descriptor
        </button>
      )}
    </div>

    {editMode && (
      <button
        onClick={() => onRemoveMerit(index)}
        className="text-sm text-red-400 hover:text-red-600 mt-2"
      >
        Delete Merit
      </button>
    )}
  </div>
);

const MeritsPanel = ({ merits: initialMerits, setMerits }) => {
  const [editMode, setEditMode] = useState(false);

  const updateName = (index, name) => {
    setMerits((prev) =>
      prev.map((m, i) => (i === index ? { ...m, name } : m))
    );
  };

  const updateLevel = (index, level) => {
    setMerits((prev) =>
      prev.map((m, i) =>
        i === index ? { ...m, level: Math.max(0, level) } : m
      )
    );
  };

  const updateDescriptor = (mIndex, dIndex, value) => {
    setMerits((prev) =>
      prev.map((m, i) =>
        i === mIndex
          ? {
              ...m,
              descriptors: m.descriptors.map((d, j) =>
                j === dIndex ? value : d
              ),
            }
          : m
      )
    );
  };

  const addDescriptor = (index) => {
    setMerits((prev) =>
      prev.map((m, i) =>
        i === index ? { ...m, descriptors: [...m.descriptors, ''] } : m
      )
    );
  };

  const removeDescriptor = (mIndex, dIndex) => {
    setMerits((prev) =>
      prev.map((m, i) =>
        i === mIndex
          ? {
              ...m,
              descriptors: m.descriptors.filter((_, j) => j !== dIndex),
            }
          : m
      )
    );
  };

  const addMerit = () => {
    setMerits((prev) => [
      ...prev,
      { name: `New Merit ${prev.length + 1}`, level: 1, descriptors: [] },
    ]);
  };

  const removeMerit = (index) => {
    setMerits((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Merits</h2>
        <button
          className={`${
            editMode ? 'bg-green-600' : 'bg-yellow-600'
          } px-3 py-1 rounded text-sm hover:opacity-90`}
          onClick={() => setEditMode((prev) => !prev)}
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>

      {initialMerits.map((merit, idx) => (
        <MeritRow
          key={idx}
          index={idx}
          merit={merit}
          editMode={editMode}
          onNameChange={updateName}
          onLevelChange={updateLevel}
          onDescriptorChange={updateDescriptor}
          onAddDescriptor={addDescriptor}
          onRemoveDescriptor={removeDescriptor}
          onRemoveMerit={removeMerit}
        />
      ))}

      {editMode && (
        <button
          onClick={addMerit}
          className="text-sm text-yellow-400 hover:text-yellow-200 mt-2"
        >
          + Add Merit
        </button>
      )}
    </div>
  );
};

export default MeritsPanel;