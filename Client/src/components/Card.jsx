import React from 'react';

const Card = ({ img, title }) => {
  return (
    <div className="w-64 border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="h-40 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="p-4 text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
}

export default Card;
