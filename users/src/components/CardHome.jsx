import React from 'react';
import Card from './Card';
import interior1 from '../assets/image/interior1.jpeg'; // Ensure correct import path
import interior2 from '../assets/image/interior2.jpeg'; 
import interior3 from '../assets/image/interior3.jpeg'; 
import interior4 from '../assets/image/interior4.jpeg'; 

const CardHome = () => {
  return (
    <div className='lg:py-10 my-4 '>
      <h1 className='lg:text-4xl text-xl text-center mb-8'>Shop Decorative Lighting, Home Decor & Designer Fans</h1>
      <div className="flex flex-wrap items-center content-center justify-center gap-10 xl:px-[10%] px-5 ">
      <Card img={interior1} title="Modern Interior Design" className="card" />
      <Card img={interior2} title="Modern Interior Design" className="card" />
      <Card img={interior3} title="Modern Interior Design" className="card" />
      <Card img={interior4} title="Modern Interior Design" className="card" />
      <Card img={interior4} title="Modern Interior Design" className="card" />
      <Card img={interior1} title="Modern Interior Design" className="card" />
      <Card img={interior2} title="Modern Interior Design" className="card" />
      <Card img={interior1} title="Modern Interior Design" className="card" />
      <Card img={interior2} title="Modern Interior Design" className="card" />
      <Card img={interior3} title="Modern Interior Design" className="card" />
      </div>
    
      
    </div>
  );
}

export default CardHome;
