import React, { useState } from 'react';

const DisciplineRow = ({
  discipline,
  index,
  editMode,
  onLevelChange,
  onPowerChange,
  onAddPower,
  onRemovePower,
  onNameChange,
  onRemoveDiscipline
}) => (
  <div className="bg-gray-700 p-4 rounded mb-4">
    {editMode ? (
    <input
    className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-lg font-semibold mb-2 w-full"
    value={discipline.name}
    onChange={(e) => onNameChange(index, e.target.value)}
    />
    ) : (
    <h3 className="text-lg font-semibold mb-1">{discipline.name}</h3>
    )}

    <div className="flex items-center mb-2">
      <span className="text-sm text-gray-300 mr-2">Level:</span>
    {[1, 2, 3, 4, 5].map((i) => (
    <div
      key={i}
      onClick={() => {
        if (editMode) {
          onLevelChange(index, i);
        }
      }}
      className={`w-4 h-4 rounded-full border mr-1 cursor-pointer ${
        i <= discipline.level
          ? 'bg-purple-600 border-purple-600'
          : 'bg-gray-700 border-gray-500'
      } ${editMode ? 'hover:ring ring-purple-400' : ''}`}
    />
    ))}
    </div>

    <div className="mb-2">
  <p className="text-sm text-gray-300 mb-1">Powers:</p>
  <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
    {discipline.powers.map((power, pIdx) => (
      <li key={pIdx}>
        {editMode ? (
          <div className="flex items-center space-x-2">
            <input
              className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-sm w-full"
              value={power}
              onChange={(e) => onPowerChange(index, pIdx, e.target.value)}
            />
            <button
              className="text-red-400 hover:text-red-600"
              onClick={() => onRemovePower(index, pIdx)}
            >
              ✕
            </button>
          </div>
        ) : (
          power
        )}
      </li>
    ))}
  </ul>
  {editMode && (
    <button
      onClick={() => onAddPower(index)}
      className="mt-2 text-sm text-yellow-400 hover:text-yellow-200"
    >
      + Add Power
    </button>
  )}
</div>
{editMode && (
  <button
    onClick={() => onRemoveDiscipline(index)}
    className="mt-2 text-sm text-red-400 hover:text-red-600"
  >
    Delete Discipline
  </button>
)}
  </div>
);

const DisciplinesPanel = ({ disciplines, setDisciplines }) => {
  const [editMode, setEditMode] = useState(false);
  

  const toggleEdit = () => {
    setEditMode((prev) => !prev);
  };

  const updateLevel = (dIndex, clickedLevel) => {
    setDisciplines((prev) =>
        prev.map((d, i) =>
            i === dIndex
             ? { ...d, level: d.level === clickedLevel ? clickedLevel - 1 : clickedLevel }
                : d
            )
        );
    };

  const updatePower = (dIndex, pIndex, value) => {
    setDisciplines((prev) =>
      prev.map((d, i) =>
        i === dIndex
          ? {
              ...d,
              powers: d.powers.map((p, j) => (j === pIndex ? value : p)),
            }
          : d
      )
    );
  };

  const addPower = (dIndex) => {
    setDisciplines((prev) =>
      prev.map((d, i) =>
        i === dIndex ? { ...d, powers: [...d.powers, ''] } : d
      )
    );
  };

  const removePower = (dIndex, pIndex) => {
    setDisciplines((prev) =>
      prev.map((d, i) =>
        i === dIndex
          ? {
              ...d,
              powers: d.powers.filter((_, j) => j !== pIndex),
            }
          : d
      )
    );
  };

  const addDiscipline = () => {
    setDisciplines((prev) => [
      ...prev,
      { name: `New Discipline ${prev.length + 1}`, level: 1, powers: [] },
    ]);
  };

  const updateName = (dIndex, name) => {
  setDisciplines((prev) =>
    prev.map((d, i) => (i === dIndex ? { ...d, name } : d))
  );
  };

  const removeDiscipline = (dIndex) => {
    setDisciplines((prev) => prev.filter((_, i) => i !== dIndex));
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Disciplines</h2>
        <button
          className={`${
            editMode ? 'bg-green-600' : 'bg-yellow-600'
          } px-3 py-1 rounded text-sm hover:opacity-90`}
          onClick={toggleEdit}
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>

      {disciplines.map((discipline, idx) => (
        <DisciplineRow
            key={idx}
            index={idx}
            discipline={discipline}
            editMode={editMode}
            onLevelChange={updateLevel}
            onPowerChange={updatePower}
            onAddPower={addPower}
            onRemovePower={removePower}
            onNameChange={updateName}
            onRemoveDiscipline={removeDiscipline}
        />
      ))}

      {editMode && (
        <button
          onClick={addDiscipline}
          className="text-sm text-yellow-400 hover:text-yellow-200 mt-2"
        >
          + Add Discipline
        </button>
      )}
    </div>
  );
};

export default DisciplinesPanel;

