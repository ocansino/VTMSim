// src/pages/ChroniclePage.jsx
import React, { useState } from 'react';

export default function ChroniclePage({ pageData, onNext, onPrevious, isFirstPage, isLastPage }) {
  const [revealedEvents, setRevealedEvents] = useState([]);
  const [actionResults, setActionResults] = useState({}); // Track results per action
  const [skillCheckResults, setSkillCheckResults] = useState({});
  const [expandedActions, setExpandedActions] = useState({});
  


  const revealEvent = (eventId) => {
    if (!revealedEvents.includes(eventId)) {
      setRevealedEvents([...revealedEvents, eventId]);
    }
  };

  const handleActionClick = (action, actionIndex) => {
    
    setExpandedActions((prev) => ({
      ...prev,
      [actionIndex]: !prev[actionIndex],
    }));

    if (action.eventId) {
      revealEvent(action.eventId);
    }

    // Only apply result immediately for non-skill checks
    if (action.result && action.type !== 'skillCheck') {
      setActionResults((prev) => ({
        ...prev,
        [actionIndex]: action.result,
      }));
    }
  };

  

  return (
    <div className="w-screen h-screen p-6 text-white bg-gray-900 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">{pageData.title}</h1>
      
      {pageData.image && (
        <img
          src={pageData.image}
          alt="Scene"
          className="mb-4 rounded-lg max-w-2xl mx-auto w-full h-auto"
        />
      )}

      <p className="mb-4">
        {pageData.sections?.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2 border-b border-gray-600 pb-1">
              {section.heading}
            </h2>
            {section.paragraphs.map((text, pIdx) => (
              <p key={pIdx} className="mb-4 whitespace-pre-line text-gray-200">
                {text}
              </p>
            ))}
          </div>
        ))}
      </p>

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

              {expandedActions[idx] && (
                <>
                  {/* Skill Check Buttons */}
                  {action.type === 'skillCheck' && !actionResults[idx] && (
                    <div className="mt-2 p-3 bg-gray-800 rounded flex gap-4">
                      <button
                        className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded"
                        onClick={() =>
                          setActionResults((prev) => ({
                            ...prev,
                            [idx]: action.resultPass,
                          }))
                        }
                      >
                        Pass
                      </button>
                      <button
                        className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded"
                        onClick={() =>
                          setActionResults((prev) => ({
                            ...prev,
                            [idx]: action.resultFail,
                          }))
                        }
                      >
                        Fail
                      </button>
                    </div>
                  )}

                  {/* Result display (both types) */}
                  {actionResults[idx] && (
                    <div className="mt-2 p-3 border border-blue-500 bg-gray-800 rounded">
                      <p className="text-blue-200">{actionResults[idx]}</p>
                    </div>
                  )}

                  {/* Optional revealed event */}
                  {action.eventId && revealedEvents.includes(action.eventId) && (() => {
                    const event = pageData.events.find((e) => e.id === action.eventId);
                    return event ? (
                      <div className="mt-2 p-3 border-l-4 border-green-600 bg-gray-800 rounded">
                        <strong className="text-green-300">{event.title}</strong>
                        <p className="mt-1">{event.content}</p>
                      </div>
                    ) : null;
                  })()}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      {(onNext || onPrevious) && (
        <div className="flex justify-between mt-8 pt-4 border-t border-gray-700">
          <button
            onClick={onPrevious}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white disabled:opacity-30"
            disabled={isFirstPage}
          >
            Previous
          </button>
          <button
            onClick={onNext}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white disabled:opacity-30"
            disabled={isLastPage}
          >
            Next
          </button>
        </div>
      )}

    </div>
  );
}