// src/components/HealthTracker.jsx
import React, { useState, useEffect } from 'react';




const DamageBox = ({ value, onClick, editMode }) => {
  const color =
    value === 1
      ? 'bg-yellow-400 border-yellow-400'
      : value === 2
      ? 'bg-red-600 border-red-600'
      : 'bg-gray-700 border-gray-500';

  return (
    <div
      onClick={editMode ? onClick : undefined}
      className={`w-5 h-5 rounded border cursor-pointer ${color} ${
        editMode ? 'hover:ring ring-opacity-50' : ''
      }`}
    />
  );
};

const TrackerRow = ({ label, boxes, values, onBoxClick, editMode, statusLabel}) => (
  <div className="mb-4">
    <p className="font-semibold mb-1">{label}: {statusLabel}</p>
    <div className="flex space-x-1 flex-wrap">
      {values.map((value, index) => (
        <DamageBox
          key={index}
          value={value}
          editMode={editMode}
          onClick={() => onBoxClick(index)}
        />
      ))}
    </div>
  </div>
);

const HungerRow = ({ value, onClick, editMode, statusLabel }) => (
  <div className="mb-4">
    <p className="font-semibold mb-1">Hunger: {statusLabel}</p>
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          onClick={() => editMode && onClick(i)}
          className={`w-5 h-5 rounded border cursor-pointer ${
            i <= value
              ? 'bg-red-700 border-red-700'
              : 'bg-gray-700 border-gray-500'
          } ${editMode ? 'hover:ring ring-opacity-50' : ''}`}
        />
      ))}
    </div>
  </div>
);

const HumanityRow = ({ values, onBoxClick, editMode, statusLabel }) => (
  <div className="mb-4">
    <p className="font-semibold mb-1">Humanity: {statusLabel}</p>
    <div className="flex space-x-1">
      {values.map((state, i) => {
        const color =
          state === 2
            ? 'bg-yellow-400 border-yellow-400'  // full
            : state === 1
            ? 'bg-red-700 border-red-700'  // stain
              
            : 'bg-gray-700 border-gray-500';   // empty

        return (
          <div
            key={i}
            onClick={() => editMode && onBoxClick(i)}
            className={`w-5 h-5 rounded border cursor-pointer ${color} ${
              editMode ? 'hover:ring ring-opacity-50' : ''
            }`}
          />
        );
      })}
    </div>
  </div>
);

const BloodPotencyRow = ({ values, onBoxClick, editMode, statusLabel, onRouseCheck }) => (
  <div className="mb-4">
    <p className="font-semibold mb-1">Blood Potency: {statusLabel}</p>
    <div className="flex space-x-1">
      {values.map((active, i) => (
        <div
          key={i}
          onClick={() => editMode && onBoxClick(i)}
          className={`w-5 h-5 rounded border cursor-pointer ${
            active ? 'bg-pink-500 border-pink-500' : 'bg-gray-700 border-gray-500'
          } ${editMode ? 'hover:ring ring-opacity-50' : ''}`}
        />
      ))}
    </div>
    {!editMode && (
    <div className="mt-4">
    <button
      onClick={onRouseCheck}
      className="text-sm bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded shadow"
    >
      Rouse Check
    </button>
    </div>
    )}
  </div>
);

const HealthTracker = ({
  maxHealth,
  maxWillpower,
  health,
  setHealth,
  willpower,
  setWillpower,
  hunger,
  setHunger,
  humanity,
  setHumanity,
  bloodPotency,
  setBloodPotency,
}) => {
  const [editMode, setEditMode] = useState(false);

  

  const cycleDamage = (value) => (value + 1) % 3;

  const updateBox = (setFn, currentState) => (index) => {
    const updated = [...currentState];
    updated[index] = cycleDamage(currentState[index]);
    setFn(updated);
  };

  const toggleHunger = (i) => {
  setHunger((prev) => (i === prev ? i - 1 : i));
  };

  const toggleHumanity = (i) => {
    setHumanity((prev) => (i === prev ? i - 1 : i));
  };

  const cycleHumanityState = (index) => {
  setHumanity((prev) => {
    const updated = [...prev];
    updated[index] = (updated[index] + 1) % 3; // 0 → 1 → 2 → 0
    return updated;
  });
  };

  const getHealthStatus = () => {
    const filled = health.filter(v => v > 0).length;
    const agg = health.filter(v => v === 2).length;
  
    if (agg === maxHealth) return 'Torpor';
    if (filled === maxHealth) return 'Impaired';
    if (filled > 0) return 'Injured';
    return 'Healthy';
  };

  const getWillpowerStatus = () => {
    const filled = willpower.filter(v => v > 0).length;
    const agg = willpower.filter(v => v === 2).length;
    if (agg === maxWillpower) return 'Broken';
    if (filled === maxWillpower) return 'Impaired';
    if (filled > 0) return 'Strained';
    return 'Focused';
  };

  const getHungerStatus = () => {
    if (hunger >= 5) return 'Ravenous';
    if (hunger >= 3) return 'Hungry';
    if (hunger >= 1) return 'Peckish';
    return 'Sated';
  };

  const getHumanityStatus = () => {
    const full = humanity.filter(v => v === 1).length;
    if (full >= 9) return 'Saintly';
    if (full >= 7) return 'Humane';
    if (full >= 4) return 'Slipping';
    if (full >= 2) return 'Monstrous';
    if (full >= 1) return 'Feral';
    return 'Wight';
  };

  const toggleBloodPotency = (index) => {
  setBloodPotency((prev) => {
    const updated = [...prev];
    const newLevel = updated[index] === 1 ? index : index + 1;
    return updated.map((_, i) => (i < newLevel ? 1 : 0));
  });
  };

  const getBloodPotencyStatus = () => {
  const level = bloodPotency.filter((b) => b === 1).length;
  return `Potency ${level}`;
  };

  const handleRouseCheck = () => {
    const roll = Math.ceil(Math.random() * 10);
    const success = roll >= 6;
    alert(`Rouse Check: Rolled a ${roll} → ${success ? 'Success ✅' : 'Failure ❌ (Gain 1 Hunger)'}`);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow-md w-full h-fit">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Health & Willpower</h2>
        <button
          onClick={() => setEditMode((prev) => !prev)}
          className={`${
            editMode ? 'bg-green-600' : 'bg-yellow-600'
          } px-2 py-1 rounded text-sm`}
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        <TrackerRow
          label="Health"
          boxes={maxHealth}
          values={health}
          editMode={editMode}
          onBoxClick={updateBox(setHealth, health)}
          statusLabel={getHealthStatus()}
        />
        
        <TrackerRow
          label="Willpower"
          boxes={maxWillpower}
          values={willpower}
          editMode={editMode}
          onBoxClick={updateBox(setWillpower, willpower)}
          statusLabel={getWillpowerStatus()}
        />
        <HungerRow
          value={hunger}
          editMode={editMode}
          onClick={toggleHunger}
          statusLabel={getHungerStatus()}
        />
        <HumanityRow
          values={humanity}
          editMode={editMode}
          onBoxClick={cycleHumanityState}
          statusLabel={getHumanityStatus()}
        />
        
        <BloodPotencyRow
          values={bloodPotency}
          editMode={editMode}
          onBoxClick={toggleBloodPotency}
          statusLabel={getBloodPotencyStatus()}
          onRouseCheck={handleRouseCheck}
        />
        
      </div>
    </div>
  );
};

export default HealthTracker;
