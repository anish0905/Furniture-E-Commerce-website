import React from 'react';

const ShowCategoryWise = ({ title, products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div key={index} className="card-info text-sm font-serif text-center font-thin flex flex-col justify-center items-center py-4 border rounded-lg shadow-md">
          <img src={product.img} alt={product.name} className="w-full h-auto mb-2" />
          <h3 className="text-lg font-medium mb-1">{product.name}</h3>
          <p className='text-red-400 mb-1'>{product.price}</p>
          <p className='text-green-700'>{product.delivery}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowCategoryWise;
