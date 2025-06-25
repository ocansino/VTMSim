//pages/LocationPage.jsx
import React, { useState }  from 'react';
import { districts } from './districts.js';

export default function LocationPage({ locationId, onBack }) {
    const [activeNPC, setActiveNPC] = useState(null);
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
        <div className="w-screen h-screen bg-gray-900 text-white flex flex-col pb-20 relative">
        <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{locationData.name}</h2>
        <p className="mb-2 text-gray-400">
          District: <span className="font-semibold">{locationData.districtName}</span>
        </p>

        {locationData.description && (
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            {locationData.description}
          </p>
        )}

        {locationData.npcs?.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">People Here</h3>
            {locationData.npcs.map((npc) => (
              <div key={npc.id} className="mb-3 p-3 bg-gray-800 rounded">
                <p className="font-bold">{npc.name}</p>
                <p className="text-gray-400 mb-2">{npc.dialog}</p>
                {npc.canTalk && (
                  <button
                    onClick={() => setActiveNPC(npc)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded"
                  >
                    Talk
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {locationData.actions?.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Actions</h3>
            {locationData.actions.map((action) => (
              <button
                key={action.id}
                className="block mb-2 px-4 py-2 bg-purple-700 hover:bg-purple-800 rounded"
                onClick={() => alert(`Attempting action: ${action.label}`)}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={onBack}
          className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
        >
          Back to Map
        </button>
      </div>

      {/* 🗨️ Dialogue Modal */}
      {activeNPC && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-10">
          <div className="bg-gray-800 p-6 rounded shadow-xl w-96">
            <h3 className="text-2xl font-bold mb-2">{activeNPC.name}</h3>
            <p className="mb-4 text-gray-300">[Dialogue placeholder goes here]</p>
            <button
              onClick={() => setActiveNPC(null)}
              className="mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
