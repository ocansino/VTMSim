//src/components/DistrictMap.jsx
import React, { useState } from 'react';

export default function DistrictMap({ district, onLocationSelect }) {
    const [hoveredLocation, setHoveredLocation] = useState(null);
    const defaultLocation = district.locations.find(loc => loc.id === district.defaultLocationId);

    let defaultPos = null;
    if (defaultLocation) {
    if (defaultLocation.shape === 'rect') {
        defaultPos = {
        x: defaultLocation.position.x + defaultLocation.position.width / 2,
        y: defaultLocation.position.y + defaultLocation.position.height / 2,
        };
    } else if (defaultLocation.shape === 'circle') {
        defaultPos = {
        x: defaultLocation.position.cx,
        y: defaultLocation.position.cy,
        };
    }
    }

    const [playerPos, setPlayerPos] = useState(defaultPos);
    

    const handleClick = (location) => {
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
        } else {
            console.warn('Unknown shape:', location.shape);
            return;
        }

        setPlayerPos(pos);
        console.log("Computed player position:", pos);

        // Delay the navigation slightly so the icon can render
        setTimeout(() => {
            onLocationSelect(location.id);
        }, 200); // 200ms is enough for one render cycle
        
    };
    
    return (
    <svg
        viewBox={`0 0 ${district.mapSize.width} ${district.mapSize.height}`}
        className="w-full h-full max-h-[70vh] bg-gray-900 border border-gray-700"
        preserveAspectRatio="xMidYMid meet"
    >
        {/* Render streets first (bottom layer) */}
        {district.streets?.map((street, i) => (
            <rect
            key={`street-${i}`}
            x={street.x}
            y={street.y}
            width={street.width}
            height={street.height}
            className="fill-gray-600 pointer-events-none"
            />
        ))}

        {/* Render locations (middle layer) */}
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

        {/* Render player icon (top layer) */}
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