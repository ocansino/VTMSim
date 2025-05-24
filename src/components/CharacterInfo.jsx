// src/components/CharacterInfo.jsx
import React from 'react';

const CharacterInfo = ({
  name,
  concept,
  predator,
  chronicle,
  ambition,
  clan,
  sire,
  desire,
  generation,
}) => {
  return (
    <div className="p-4 bg-gray-800 text-white rounded shadow-md mb-4">
      {/*<h1 className="text-2xl font-bold mb-2">{name}</h1> */}
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Chronicle:</strong> {chronicle}</p>
          <p><strong>Sire:</strong> {sire}</p>
        </div>
        <div>
          <p><strong>Concept:</strong> {concept}</p>
          <p><strong>Ambition:</strong> {ambition}</p>
          <p><strong>Desire:</strong> {desire}</p>
        </div>
        <div>
          <p><strong>Predator:</strong> {predator}</p>
          <p><strong>Clan:</strong> {clan}</p>
          <p><strong>Generation:</strong> {generation}</p>
        </div>
        <div>
          
          
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;