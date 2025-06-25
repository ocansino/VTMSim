//pages/LocationPage.jsx
import React from 'react';
import { districts } from './districts.js';

export default function LocationPage({ locationId, onBack }) {
  // Find location data by searching districts
  let locationData = null;
  for (const district of districts) {
    const found = district.locations.find((loc) => loc.id === locationId);
    if (found) {
      locationData = { ...found, districtName: district.name };
      break;
    }
  }

  if (!locationData) {
    return (
      <div className="w-screen h-screen p-4 bg-black text-red-500 flex flex-col justify-center items-center">
        <p>Location not found.</p>
        <button onClick={onBack} className="mt-4 px-4 py-2 bg-gray-700 rounded">
          Back to Map
        </button>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-gray-900 text-white flex flex-col pb-20">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{locationData.name}</h2>
        <p className="mb-2 text-gray-400">
          District: <span className="font-semibold">{locationData.districtName}</span>
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          This is a placeholder description for <strong>{locationData.name}</strong>.
          You can replace this with detailed content, NPCs, quests, shops, or any
          interaction you want.
        </p>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
        >
          Back to Map
        </button>
      </div>
    </div>
  );
}
