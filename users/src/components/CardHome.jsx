import React from 'react';
import Card from './Card';
import interior1 from '../assets/image/interior1.jpeg'; // Ensure correct import path
import interior2 from '../assets/image/interior2.jpeg'; 
import interior3 from '../assets/image/interior3.jpeg'; 
import interior4 from '../assets/image/interior4.jpeg'; 

const CardHome = () => {
  const cardData = [
    { img: interior1, title: "Modern Interior Design" },
    { img: interior2, title: "Elegant Living Room" },
    { img: interior3, title: "Chic Bedroom Ideas" },
    { img: interior4, title: "Stylish Office Space" },
    { img: interior1, title: "Minimalist Approach" },
    { img: interior2, title: "Cozy Home Setup" },
    { img: interior3, title: "Contemporary Styles" },
    { img: interior4, title: "Luxurious Interiors" },
    { img: interior1, title: "Bright & Modern" },
    { img: interior2, title: "Urban Living" },
    { img: interior3, title: "Serene Spaces" }
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
