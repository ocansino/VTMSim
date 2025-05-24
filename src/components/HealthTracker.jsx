// src/components/HealthTracker.jsx
import React, { useState } from 'react';

const HealthRow = ({ label, boxes, value, onBoxClick, editMode, type }) => {
  return (
    <div className="mb-2">
      <p className="font-semibold mb-1">{label}</p>
      <div className="flex flex-wrap space-x-1">
        {Array.from({ length: boxes }).map((_, index) => {
          const filled = index < value;
          const isAgg = type === 'aggravated';
          const fillColor = filled
            ? isAgg
              ? 'bg-red-600 border-red-600'
              : 'bg-yellow-400 border-yellow-400'
            : 'bg-gray-700 border-gray-500';

          return (
            <div
              key={index}
              onClick={() => editMode && onBoxClick(index)}
              className={`w-5 h-5 rounded border cursor-pointer ${fillColor} ${
                editMode ? 'hover:ring ring-opacity-50' : ''
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

const HealthTracker = ({ maxHealth = 10, maxWillpower = 10 }) => {
  const [editMode, setEditMode] = useState(false);

  const [health, setHealth] = useState({
    superficial: 3,
    aggravated: 1,
  });

  const [willpower, setWillpower] = useState({
    superficial: 2,
    aggravated: 0,
  });

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleHealthClick = (type, index) => {
    setHealth((prev) => {
      const newVal = index + 1 === prev[type] ? index : index + 1;
      return { ...prev, [type]: newVal };
    });
  };

  const handleWillpowerClick = (type, index) => {
    setWillpower((prev) => {
      const newVal = index + 1 === prev[type] ? index : index + 1;
      return { ...prev, [type]: newVal };
    });
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow-md w-full h-fit">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Health & Willpower</h2>
      <button
        onClick={toggleEdit}
        className={`${
          editMode ? 'bg-green-600' : 'bg-yellow-600'
        } px-2 py-1 rounded text-sm`}
      >
        {editMode ? 'Save' : 'Edit'}
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <HealthRow
        label="Health (Superficial)"
        type="superficial"
        boxes={maxHealth}
        value={health.superficial}
        editMode={editMode}
        onBoxClick={(index) =>
            setHealth((prev) => ({ ...prev, superficial: index + 1 === prev.superficial ? index : index + 1,}))
        }
      />
      <HealthRow
        label="Health (Aggravated)"
        type="aggravated"
        boxes={maxHealth}
        value={health.aggravated}
        editMode={editMode}
        onBoxClick={(index) =>
            setHealth((prev) => ({ ...prev, aggravated: index + 1 === prev.aggravated ? index : index + 1, }))
        }
      />
      <HealthRow
        label="Willpower (Superficial)"
        type="superficial"
        boxes={maxWillpower}
        value={willpower.superficial}
        editMode={editMode}
        onBoxClick={(index) =>
            setWillpower((prev) => ({ ...prev, superficial: index + 1 === prev.superficial ? index : index + 1, }))
        }

      />
      <HealthRow
        label="Willpower (Aggravated)"
        type="aggravated"
        boxes={maxWillpower}
        value={willpower.aggravated}
        editMode={editMode}
        onBoxClick={(index) =>
            setWillpower((prev) => ({ ...prev, aggravated: index + 1 === prev.aggravated ? index : index + 1,}))
        }
      />
    </div>
  </div>
 );
};

export default HealthTracker;