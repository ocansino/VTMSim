// src/components/AttributesGrid.jsx
import React from 'react';

const AttributeBlock = ({ category, attributes }) => (
  <div className="mb-4">
    <h2 className="text-xl font-semibold capitalize mb-2">{category}</h2>
    {Object.entries(attributes).map(([attr, value]) => (
      <div key={attr} className="flex items-center mb-2">
        <span className="w-32 capitalize">{attr}</span>
        {[1, 2, 3, 4, 5].map(i => (
          <div
            key={i}
            className={`w-4 h-4 mx-1 rounded-full border ${
              i <= value ? 'bg-red-600' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    ))}
  </div>
);

const AttributesGrid = ({ attributes }) => (
  <div className="grid md:grid-cols-3 gap-4 bg-gray-900 text-white p-4 rounded shadow-md">
    {Object.entries(attributes).map(([category, values]) => (
      <AttributeBlock key={category} category={category} attributes={values} />
    ))}
  </div>
);

export default AttributesGrid;