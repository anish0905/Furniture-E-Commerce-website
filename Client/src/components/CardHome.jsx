import React from 'react';
import Card from './Card';
import interior1 from '../assets/image/interior1.jpeg'; // Ensure correct import path
import interior2 from '../assets/image/interior2.jpeg'; 
import interior3 from '../assets/image/interior3.jpeg'; 
import interior4 from '../assets/image/interior4.jpeg'; 



const CardHome = () => {
  return (
    <>
    <div>
        <div className='flex gap-2  m-4'>
      <Card
        img={interior1}
        title="Modern Interior Design"
      />
       <Card
        img={interior2}
        title="Modern Interior Design"
      />
       <Card
        img={interior3}
        title="Modern Interior Design"
      />
      <Card
        img={interior4}
        title="Modern Interior Design"
      />
         <Card
        img={interior1}
        title="Modern Interior Design"
      />
       <Card
        img={interior2}
        title="Modern Interior Design"
      />
      </div>
    </div>
    <div>
        <div className='flex gap-2  m-4'>
      <Card
        img={interior1}
        title="Modern Interior Design"
      />
       <Card
        img={interior2}
        title="Modern Interior Design"
      />
       <Card
        img={interior3}
        title="Modern Interior Design"
      />
      <Card
        img={interior4}
        title="Modern Interior Design"
      />
         <Card
        img={interior1}
        title="Modern Interior Design"
      />
       <Card
        img={interior2}
        title="Modern Interior Design"
      />
      </div>
    </div>

    </>
  );
}

export default CardHome;
