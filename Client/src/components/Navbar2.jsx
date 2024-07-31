import React from 'react';

const Navbar2 = () => {
  const categories = [
    {
      name: "Living Room Furniture",
      subcategories: ["Sofas", "Coffee Tables", "TV Stands"]
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
    }
  ];

  return (
    <div className='flex flex-wrap justify-between items-center p-4'>
      {categories.map((category, index) => (
        <select
          key={index}
          className='p-2'
        >
          <option value="">{category.name}</option>
          {category.subcategories.map((subcategory, subIndex) => (
            <option key={subIndex} value={subcategory}>{subcategory}</option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default Navbar2;
