// src/pages/ChroniclePage.jsx
import React, { useState, useEffect, useRef } from 'react';

function Encounter({ content }) {
  const [diceCount, setDiceCount] = useState(5);
  const [results, setResults] = useState([]);
  const [successes, setSuccesses] = useState(0);

  const [enemyCount, setEnemyCount] = useState(2);
  const [defaultHealth, setDefaultHealth] = useState(4);
  const [enemyDamage, setEnemyDamage] = useState([]);
  const [pendingCount, setPendingCount] = useState(2);

  // Parse metadata once on mount
  useEffect(() => {
    const meta = content.find((item) => item.type === 'meta')?.value || {};
    const initEnemies = meta.defaultEnemies ?? 2;
    const initHealth = meta.defaultHealth ?? 4;
    const initDice = meta.defaultDice ?? 5;

    setEnemyCount(initEnemies);
    setPendingCount(initEnemies);
    setDefaultHealth(initHealth);
    setDiceCount(initDice);
    setEnemyDamage(Array(initEnemies).fill(0));
  }, [content]);

  

  const rollDice = () => {
    const rolls = Array.from({ length: diceCount }, () => Math.ceil(Math.random() * 10));
    const tens = rolls.filter((r) => r === 10).length;
    const sixToNine = rolls.filter((r) => r >= 6 && r <= 9).length;

    const pairedTens = Math.floor(tens / 2);
    const unpairedTens = tens % 2;
    const total = (pairedTens * 4) + (unpairedTens * 1) + sixToNine;

    setResults(rolls);
    setSuccesses(total);
  };

  const applyEnemyCount = () => {
    const newCount = Math.max(1, pendingCount);
    setEnemyCount(newCount);
    setEnemyDamage(Array(newCount).fill(0));
  };

  const adjustDamage = (index, delta) => {
    setEnemyDamage((prev) => {
      const updated = [...prev];
      updated[index] = Math.max(0, Math.min(defaultHealth, updated[index] + delta));
      return updated;
    });
  };

  return (
    <div className="bg-gray-800 p-4 rounded border border-gray-600 mt-4">
      <h3 className="text-lg font-semibold mb-2 text-red-300">Encounter</h3>

      {content.filter((item) => item.type === 'text').map((item, idx) => (
        <p key={idx} className="text-gray-300 mb-2 whitespace-pre-line">
          {item.value}
        </p>
      ))}

      <div className="flex items-center gap-3 mt-4">
        <label className="text-white">Enemy Dice:</label>
        <input
          type="number"
          min={1}
          value={diceCount}
          onChange={(e) => setDiceCount(Number(e.target.value))}
          className="w-16 p-1 rounded bg-gray-900 text-white border border-gray-700"
        />
        <button
          onClick={rollDice}
          className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded"
        >
          Roll
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-4">
          <p className="text-gray-300">Rolls: {results.join(', ')}</p>
          <p className="text-green-300 font-semibold">Successes: {successes}</p>
        </div>
      )}

      <div className="mt-6 flex items-center gap-3">
        <label className="text-white">Number of Enemies:</label>
        <input
          type="number"
          min={1}
          value={pendingCount}
          onChange={(e) => setPendingCount(Number(e.target.value))}
          className="w-16 p-1 rounded bg-gray-900 text-white border border-gray-700"
        />
        <button
          onClick={applyEnemyCount}
          className="bg-indigo-700 hover:bg-indigo-600 px-3 py-1 text-white rounded"
        >
          Apply
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {enemyDamage.map((damage, idx) => (
          <div key={idx} className="p-3 bg-gray-700 rounded border border-gray-500">
            <h4 className="text-white font-semibold mb-2">Enemy {idx + 1}</h4>
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={() => adjustDamage(idx, -1)}
                className="bg-green-600 hover:bg-green-500 px-2 py-1 rounded text-white"
              >
                −
              </button>
              <span className="text-white">{damage} Damage</span>
              <button
                onClick={() => adjustDamage(idx, 1)}
                className="bg-red-600 hover:bg-red-500 px-2 py-1 rounded text-white"
              >
                +
              </button>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: defaultHealth }).map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 border rounded-sm ${i < damage ? 'bg-red-500' : 'bg-gray-900'} border-gray-500`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ChroniclePage({ pageData, onNext, onPrevious, goToSection, isFirstPage, isLastPage }) {
  const [revealedEvents, setRevealedEvents] = useState([]);
  const [actionResults, setActionResults] = useState({}); // Track results per action
  const [skillCheckResults, setSkillCheckResults] = useState({});
  const [expandedActions, setExpandedActions] = useState({});
  const [expandedOutcomes, setExpandedOutcomes] = useState({});
  const [revealedSubChecks, setRevealedSubChecks] = useState({});
  const scrollRef = useRef(null);


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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pageData]);

  useEffect(() => {
    // Reset state when a new page is loaded
    setExpandedActions({});
    setExpandedOutcomes({});
    setRevealedEvents([]);
    setActionResults({});
    setRevealedSubChecks({});
  }, [pageData]);


  const renderSkillCheck = (check, checkKey, depth = 0) => {
    const isMain = typeof checkKey === 'number' || (Array.isArray(checkKey) && checkKey.length === 2);
    const key = isMain ? (Array.isArray(checkKey) ? checkKey.join('-') : checkKey) : checkKey.join('-');

    const isVisible = isMain || revealedSubChecks[checkKey.slice(0, -1).join('-')];
    if (!isVisible) return null;


    return (
      <div key={key} className={`ml-${depth * 4} bg-gray-800 p-3 rounded`}>
        {check.description && (
          <p className="text-gray-400 italic mb-2">{check.description}</p>
        )}

        {!actionResults[key] && (
          <div className="flex gap-4">
            <button
              className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded"
              onClick={() => {
                setActionResults((prev) => ({ ...prev, [key]: check.resultPass }));
                if (check.subChecks?.length) {
                  const subKey = Array.isArray(checkKey) ? checkKey : [checkKey];
                  setRevealedSubChecks((prev) => ({
                    ...prev,
                    [subKey.join('-')]: true,
                  }));
                }
              }}
            >
              Pass
            </button>
            <button
              className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => {
                setActionResults((prev) => ({ ...prev, [key]: check.resultFail }));
              }}
            >
              Fail
            </button>
          </div>
        )}

        {actionResults[key] && (
          <div className="mt-2 border border-blue-500 p-3 rounded">
            <p className="text-blue-300">{actionResults[key]}</p>
          </div>
        )}

        {/* Recursive render of subChecks */}
        {check.subChecks?.map((subCheck, subIdx) =>
          renderSkillCheck(subCheck, [...(Array.isArray(checkKey) ? checkKey : [checkKey]), subIdx], depth + 1)
        )}
      </div>
    );
  };


  

  return (
    <div ref={scrollRef} className="w-screen h-screen p-6 text-white bg-gray-900 overflow-y-auto">
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
            {section.heading === 'Encounter' ? (
              <Encounter content={section.content} />
            ) : (
              section.content.map((item, contentIdx) => {
                if (item.type === 'text') {
                  return (
                    <p key={contentIdx} className="mb-4 whitespace-pre-line text-gray-200">
                      {item.value}
                    </p>
                  );
                } else if (item.type === 'image') {
                  return (
                    <img
                      key={contentIdx}
                      src={item.src}
                      alt={item.alt || 'Scene image'}
                      className="mb-4 rounded-lg max-w-2xl mx-auto w-full h-auto"
                    />
                  );
                }
                return null;
              })
            )}
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
                  {action.type === 'skillCheck' && renderSkillCheck(action, idx)}
                  {action.type === 'multiSkillCheck' &&
                    action.skillChecks?.map((check, checkIdx) =>
                      renderSkillCheck(check, [idx, checkIdx])
                    )
                  }

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
          {pageData.choices && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Outcomes</h2>
              <div className="space-y-2">
                {pageData.choices.map((choice, idx) => (
                  <div key={choice.id || idx}>
                    <button
                      onClick={() =>
                        setExpandedOutcomes((prev) => ({
                          ...prev,
                          [idx]: !prev[idx],
                        }))
                      }
                      className="w-full bg-gray-800 hover:bg-gray-700 text-left p-3 rounded border border-gray-600"
                    >
                      Outcome {idx + 1}
                    </button>

                    {expandedOutcomes[idx] && (
                      <div className="mt-2 p-4 bg-gray-800 rounded border border-gray-600">
                        <p className="text-gray-300 mb-4">{choice.description}</p>
                        <button
                          onClick={() => {
                            if (choice.action === 'next' && onNext) onNext();
                            else if (choice.action === 'previous' && onPrevious) onPrevious();
                            else if (choice.action === 'goto' && goToSection && choice.targetId) {
                              goToSection(choice.targetId);
                            }
                          }}
                          className="bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded text-white"
                        >
                          {choice.label}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}