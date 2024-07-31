import React from 'react';
import Card from './Card';
import interior1 from '../assets/image/interior1.jpeg'; // Ensure correct import path
import interior2 from '../assets/image/interior2.jpeg'; 
import interior3 from '../assets/image/interior3.jpeg'; 
import interior4 from '../assets/image/interior4.jpeg'; 

const CardHome = () => {
  return (
    <div className='flex flex-wrap items-center content-center justify-center gap-10 my-4 xl:px-[10%] px-5 lg:py-32'>
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
  );
}

export default CardHome;
