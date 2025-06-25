//src/pages/MapPage.jsx
import React, { useState } from 'react';
import { districts } from './districts';
import DistrictMap from '../components/DistrictMap';
import LocationPage from './LocationPage';

export default function MapPage() {
  const [currentDistrictId, setCurrentDistrictId] = useState(districts[0].id);
  const [currentLocationId, setCurrentLocationId] = useState(null);

  const currentDistrict = districts.find((d) => d.id === currentDistrictId);

  if (currentLocationId) {
    return (
      <LocationPage
        locationId={currentLocationId}
        onBack={() => setCurrentLocationId(null)}
      />
    );
  }

  return (
    <div className="w-screen h-screen bg-gray-900 text-white flex flex-col pb-20">
        {/* Header with title and selector side by side */}
        <div className="flex items-center justify-between mb-4 px-6">
        <h1 className="text-3xl text-white">
            City Map - {currentDistrict.name}
        </h1>

        <div className="flex items-center">
            <label htmlFor="districtSelect" className="text-white mr-2">
            District:
            </label>
            <select
            id="districtSelect"
            value={currentDistrictId}
            onChange={(e) => setCurrentDistrictId(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
            >
            {districts.map((district) => (
                <option key={district.id} value={district.id}>
                {district.name}
                </option>
            ))}
            </select>
        </div>
        </div>

        
        {/* Map */}
        <div className="flex justify-center w-full flex-grow overflow-hidden">
        <div className="w-[80%] max-w-6xl h-full">
            <DistrictMap
            district={currentDistrict}
            onLocationSelect={(locId) => setCurrentLocationId(locId)}
            />
        </div>
        </div>


    

    </div>
  );
}
