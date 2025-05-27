// src/components/ActionPanel.jsx
import React, { useState } from 'react';

const getBloodPotencyLevel = (bloodPotency = []) => {
  return bloodPotency.filter((v) => v === 1).length;
};

const bloodPotencyTable = {
  0: { surgeDice: 0, mendDamage: 1 },
  1: { surgeDice: 1, mendDamage: 1 },
  2: { surgeDice: 1, mendDamage: 2 },
  3: { surgeDice: 2, mendDamage: 2 },
  4: { surgeDice: 2, mendDamage: 3 },
  5: { surgeDice: 3, mendDamage: 3 },
  6: { surgeDice: 3, mendDamage: 3 },
  7: { surgeDice: 4, mendDamage: 3 },
  8: { surgeDice: 4, mendDamage: 4 },
  9: { surgeDice: 5, mendDamage: 4 },
  10: { surgeDice: 5, mendDamage: 5 }
};

const ActionPanel = ({ attributes, skills, bloodPotency }) => {
  const [difficulty, setDifficulty] = useState(2);
  const [meleeMod, setMeleeMod] = useState(0);
  const [firearmMod, setFirearmMod] = useState(0);

  const bpLevel = getBloodPotencyLevel(bloodPotency);
  const { surgeDice, mendDamage } = bloodPotencyTable[bpLevel] || { surgeDice: 0, mendDamage: 1 };
  const attributeNameCategory = (name) => {
    if (['strength', 'dexterity', 'stamina'].includes(name)) return 'physical';
    if (['charisma', 'manipulation', 'composure'].includes(name)) return 'social';
    return 'mental';
  };

  const rollDice = (pool) => {
    const rolls = Array.from({ length: pool }, () => Math.ceil(Math.random() * 10));
    const tens = rolls.filter((r) => r === 10).length;
    const baseSuccesses = rolls.filter((r) => r >= 6).length;
    const bonusSuccesses = Math.floor(tens / 2) * 2;
    const totalSuccesses = baseSuccesses + bonusSuccesses;
    return { rolls, totalSuccesses, baseSuccesses, bonusSuccesses, tens };
  };

  
  const handleRoll = (label, attributeName, skillName, modifier = 0) => {
      const attributeValue = attributes?.[attributeNameCategory(attributeName)]?.[attributeName] || 0;
      const skillValue = skills?.[skillName] || 0;
      const totalDice = attributeValue + skillValue + Number(modifier);

      const rolls = Array.from({ length: totalDice }, () => Math.ceil(Math.random() * 10));
      const tens = rolls.filter(r => r === 10).length;
      const successes = rolls.filter(r => r >= 6).length + Math.floor(tens / 2) * 2;
      const margin = successes - difficulty;

      alert(
        `${label} Roll (${attributeName} + ${skillName} + ${modifier}):\n` +
        `Rolled: [${rolls.join(', ')}]\n` +
        `10s: ${tens} → Extra Successes: ${Math.floor(tens / 2) * 2}\n` +
        `Total Successes: ${successes}\n` +
        `Difficulty: ${difficulty}\n` +
        `**Margin**: ${margin < 0 ? 'Failure' : `+${margin}`} ${margin < 0 ? '❌' : '✅'}`
      );
  };
  

  const handleRouseCheck = () => {
    const roll = Math.ceil(Math.random() * 10);
    const success = roll >= 6;
    alert(`Rouse Check: Rolled a ${roll} → ${success ? 'Success ✅' : 'Failure ❌ (Gain 1 Hunger)'}`);
  };

  const handleBloodSurge = () => {
    alert(`Blood Surge grants +${surgeDice} dice to a roll (Potency ${bpLevel})`);
  };

  const handleMending = () => {
    alert(`Mend: Heal ${mendDamage} points of superficial damage (Potency ${bpLevel})`);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Actions</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        <label>
          Difficulty:
          <input
            type="number"
            value={difficulty}
            onChange={(e) => setDifficulty(parseInt(e.target.value))}
            className="ml-2 px-2 py-1 w-16 bg-gray-900 text-white border border-gray-600 rounded"
          />
        </label>
        <label>
          Melee Modifier:
          <input
            type="number"
            value={meleeMod}
            onChange={(e) => setMeleeMod(parseInt(e.target.value))}
            className="ml-2 px-2 py-1 w-16 bg-gray-900 text-white border border-gray-600 rounded"
          />
        </label>
        <label>
          Firearm Modifier:
          <input
            type="number"
            value={firearmMod}
            onChange={(e) => setFirearmMod(parseInt(e.target.value))}
            className="ml-2 px-2 py-1 w-16 bg-gray-900 text-white border border-gray-600 rounded"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <button onClick={() => handleRoll('Unarmed Attack', 'strength', 'brawl', meleeMod)}>
          Unarmed Attack
        </button>
        <button onClick={() => handleRoll('Melee 1H', 'dexterity', 'melee', meleeMod)}>
          Melee Weapon (1H)
        </button>
        <button onClick={() => handleRoll('Melee 2H', 'strength', 'melee', meleeMod)}>
          Melee Weapon (2H)
        </button>
        <button onClick={() => handleRoll('Gun Attack', 'dexterity', 'firearms', firearmMod)}>
          Firearm Attack
        </button>
        <button onClick={() => handleRoll('Dodge', 'dexterity', 'athletics')}>
          Dodge
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <button onClick={handleRouseCheck} className="btn bg-pink-600 hover:bg-pink-700">Rouse Check</button>
        <button onClick={handleBloodSurge} className="btn bg-blue-600 hover:bg-blue-700">Blood Surge</button>
        <button onClick={handleMending} className="btn bg-green-600 hover:bg-green-700">Mend</button>
      </div>
    </div>
  );
};

export default ActionPanel;