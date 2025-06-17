// src/components/BottomNav.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export default function BottomNav({ onNavigate }) {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    
    { icon: '🗺️', label: 'Map', path: '/map' },
    { icon: '📜', label: 'Quest', path: '/quest' },
    { icon: '📕', label: 'Chronicle', path: '/chronicle' },
    { icon: '🧛', label: 'Character', path: '/' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-700 text-white z-50">
      <div className="flex justify-around py-3 text-sm">
        {navItems.map(({ icon, label, path }) => (
          <button
            key={label}
            onClick={() => navigate(path)}
            className="flex flex-col items-center focus:outline-none"
          >
            <span className="text-lg">{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
