import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Importing a chevron icon

const Navbar2 = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      name: "Living Room Furniture",
      subcategories: ["Sofas", "Coffee Tables", "TV Stands","Sofas", "Coffee Tables", "TV Stands","Sofas", "Coffee Tables", "TV Stands","Sofas", "Coffee Tables", "TV Stands","Sofas", "Coffee Tables", "TV Stands"]
    },
    {
      name: "Bedroom Furniture",
      subcategories: ["Beds", "Wardrobes", "Nightstands"]
    },
    {
      name: "Office Furniture",
      subcategories: ["Desks", "Office Chairs", "Bookcases"]
    },
    {
      name: "Outdoor Furniture",
      subcategories: ["Patio Sets", "Outdoor Chairs", "Garden Tables"]
    },
    {
      name: "Dining Furniture",
      subcategories: ["Dining Tables", "Dining Chairs", "Buffets"]
    },
    {
      name: "Dining Furniture",
      subcategories: ["Dining Tables", "Dining Chairs", "Buffets"]
    },
    {
      name: "Dining Furniture",
      subcategories: ["Dining Tables", "Dining Chairs", "Buffets"]
    }
  ];

  return (
    <div className='flex flex-wrap justify-between items-center p-4 lg:px-[20%]'>
      {categories.map((category, index) => (
        <div 
          key={index}
          className='relative p-2'
          onMouseEnter={() => setHoveredCategory(index)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <button className='flex items-center p-2  rounded'>
            {category.name}
            <FaChevronDown className='ml-2' />
          </button>
          {hoveredCategory === index && (
            <div className='absolute top-full left-0 mt-2 w-48 z-10 bg-white border border-gray-300 rounded shadow-lg'>
              <ul>
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className='p-2 hover:bg-gray-100'>
                    {subcategory}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar2;
