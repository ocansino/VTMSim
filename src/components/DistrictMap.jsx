//src/components/DistrictMap.jsx
import React, { useState } from 'react';

export default function DistrictMap({ district, onLocationSelect }) {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [playerPos, setPlayerPos] = useState(null);

  const handleClick = (location) => {
    // Update player position to center of the location shape
    let pos;
    if (location.shape === 'rect') {
      pos = {
        x: location.position.x + location.position.width / 2,
        y: location.position.y + location.position.height / 2,
      };
    } else if (location.shape === 'circle') {
      pos = {
        x: location.position.cx,
        y: location.position.cy,
      };
    }
    setPlayerPos(pos);
    onLocationSelect(location.id);
  };

  return (
    <svg
        viewBox={`0 0 ${district.mapSize.width} ${district.mapSize.height}`}
        className="w-full h-full max-h-[70vh] bg-gray-900 border border-gray-700"
        preserveAspectRatio="xMidYMid meet"
    >
        {/* Render streets */}
        {district.streets?.map((street, i) => (
        <rect
            key={`street-${i}`}
            x={street.x}
            y={street.y}
            width={street.width}
            height={street.height}
            className="fill-gray-600"
        />
        ))}

        
        {district.locations.map((loc) => {
        const isHovered = hoveredLocation === loc.id;
        const glowClass = isHovered
          ? 'filter drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]'
          : '';

        if (loc.shape === 'rect') {
          const { x, y, width, height } = loc.position;
          return (
            <rect
              key={loc.id}
              x={x}
              y={y}
              width={width}
              height={height}
              className={`fill-gray-700 cursor-pointer ${glowClass}`}
              onMouseEnter={() => setHoveredLocation(loc.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              onClick={() => handleClick(loc)}
              title={loc.name}
            />
          );
        } else if (loc.shape === 'circle') {
          const { cx, cy, r } = loc.position;
          return (
            <circle
              key={loc.id}
              cx={cx}
              cy={cy}
              r={r}
              className={`fill-gray-700 cursor-pointer ${glowClass}`}
              onMouseEnter={() => setHoveredLocation(loc.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              onClick={() => handleClick(loc)}
              title={loc.name}
            />
          );
        }
        return null;
      })}

      {/* Player icon */}
      {playerPos && (
        <circle
          cx={playerPos.x}
          cy={playerPos.y}
          r={12}
          fill="red"
          stroke="white"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}