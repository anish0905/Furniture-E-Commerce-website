import React from 'react';
import Card from './Card';
import interior1 from '../assets/image/chandelier_thumbnails_1.webp'; // Ensure correct import path
import interior2 from '../assets/image/Pendant_light_thumbnails.webp'; 
import interior3 from '../assets/image/wall_lightCategory_thumbnails.webp'; 
import interior4 from '../assets/image/table_lamp_Category_thumbnails.webp'; 
import interior5 from '../assets/image/floor_lamp_Category_thumbnails.webp'; 
import interior6 from '../assets/image/home-decor-Category-thumbnails.webp'; 
import interior7 from '../assets/image/ceiling-light-Category-thumbnails.webp';  
import interior8 from '../assets/image/outdoor_light_Category_thumbnails.webp'; 
import interior9 from '../assets/image/ceiling_fan_Category_thumbnails.webp'; 

 

const CardHome = () => {
  const cardData = [
    { img: interior1, title: "Chandeliers" },
    { img: interior2, title: "Pendants" },
    { img: interior3, title: "Wall Lights" },
    { img: interior4, title: "Table Lamps" },
    { img: interior5, title: "Floor Lamps" },
    { img: interior6, title: "Home Decor" },
    { img: interior7, title: "Ceiling Lights" },
    { img: interior8, title: "Outdoor Lights" },
    { img: interior9, title: "Ceiling Fans" },
   
  ];

  return (
    <div className='lg:py-10 my-4 '>
      <h1 className='lg:text-4xl text-xl text-center mb-8'>Shop Decorative Lighting, Home Decor & Designer Fans</h1>
      <div className="flex flex-wrap items-center content-center justify-center lg:gap-10 xl:px-[10%] px-5 my-4 ">
        {cardData.map((data, index) => (
          <Card key={index} img={data.img} title={data.title} className="card" />
        ))}
      </div>
    </div>
  );
}

export default CardHome;
