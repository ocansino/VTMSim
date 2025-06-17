// src/pages/ChroniclePage.jsx
import React, { useState } from 'react';

export default function ChroniclePage({ pageData }) {
  const [revealedEvents, setRevealedEvents] = useState([]);
  const [actionResults, setActionResults] = useState({}); // Track results per action

  const revealEvent = (eventId) => {
    if (!revealedEvents.includes(eventId)) {
      setRevealedEvents([...revealedEvents, eventId]);
    }
  };

  const handleActionClick = (action, actionIndex) => {
    if (action.eventId) {
      revealEvent(action.eventId);
    }
    if (action.result) {
      setActionResults(prev => ({
        ...prev,
        [actionIndex]: action.result
      }));
    }
  };

  return (
    <div className="w-screen h-screen p-6 text-white bg-gray-900 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">{pageData.title}</h1>
      
      {pageData.image && (
        <img src={pageData.image} alt="Scene" className="mb-4 rounded-lg" />
      )}

      <p className="mb-4">{pageData.description}</p>

      <div className="space-y-2 mb-6">
        {pageData.gameTips?.map((tip, idx) => (
          <div key={idx} className="text-sm text-yellow-300 italic border-l-4 pl-2 border-yellow-600">
            Gametip: {tip}
          </div>
        ))}
      </div>

      {pageData.objects && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Objects</h2>
          <ul className="list-disc list-inside">
            {pageData.objects.map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Actions</h2>
        <div className="space-y-2">
          {pageData.actions.map((action, idx) => (
            <div key={idx}>
              <button
                onClick={() => handleActionClick(action, idx)}
                className="w-full bg-gray-800 hover:bg-gray-700 text-left p-3 rounded border border-gray-600"
              >
                {action.label}
              </button>
              
              {/* Show result immediately under this button if it exists */}
              {actionResults[idx] && (
                <div className="mt-2 p-3 border border-blue-500 bg-gray-800 rounded">
                  <p className="text-blue-200">{actionResults[idx]}</p>
                </div>
              )}
              
              {/* Show revealed event immediately under this button if it exists */}
              {action.eventId && revealedEvents.includes(action.eventId) && (
                (() => {
                  const event = pageData.events.find((e) => e.id === action.eventId);
                  return event ? (
                    <div className="mt-2 p-3 border-l-4 border-green-600 bg-gray-800 rounded">
                      <strong className="text-green-300">{event.title}</strong>
                      <p className="mt-1">{event.content}</p>
                    </div>
                  ) : null;
                })()
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}