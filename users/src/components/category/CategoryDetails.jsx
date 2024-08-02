import React from 'react'
import CategoryBanner from './categoryBanner'
import Chandeliers from './Chandeliers'
import { useParams } from 'react-router-dom';

import ShowCategoryWise from './ShowCategoryWise'

const products =[
    {
      "name": "Crystal Elegance Chandelier",
      "price": "Rs. 35,000.00",
      "delivery": "Free Delivery",
      "category": "Chandeliers",
      "img": "https://www.whiteteak.com/media/catalog/product/h/l/hl165-10002_a__1.jpg?width=680&height=673&canvas=680,673&optimize=high&fit=bounds"
    },
    {
      "name": "Modern Geometric Chandelier",
      "price": "Rs. 28,000.00",
      "delivery": "Free Delivery",
      "category": "Chandeliers",
      "img": "https://www.whiteteak.com/media/catalog/product/h/l/hl91-10001_24_copy.jpg?width=550&height=550&canvas=550,550&optimize=high&fit=bounds"
    },
    {
      "name": "Antique Brass Chandelier",
      "price": "Rs. 40,000.00",
      "delivery": "Free Delivery",
      "category": "Chandeliers",
      "img": "path/to/image3.jpg"
    },
    {
      "name": "Rustic Wood Chandelier",
      "price": "Rs. 22,500.00",
      "delivery": "Free Delivery",
      "category": "Chandeliers",
      "img": "path/to/image4.jpg"
    },
    {
      "name": "Vintage Crystal Chandelier",
      "price": "Rs. 50,000.00",
      "delivery": "Free Delivery",
      "category": "Chandeliers",
      "img": "path/to/image5.jpg"
    },
    {
      "name": "Industrial Iron Pendant",
      "price": "Rs. 7,500.00",
      "delivery": "Free Delivery",
      "category": "Pendants",
      "img": "path/to/image6.jpg"
    },
    {
      "name": "Minimalist White Pendant",
      "price": "Rs. 6,800.00",
      "delivery": "Free Delivery",
      "category": "Pendants",
      "img": "path/to/image7.jpg"
    },
    {
      "name": "Classic Black Pendant",
      "price": "Rs. 5,600.00",
      "delivery": "Free Delivery",
      "category": "Pendants",
      "img": "path/to/image8.jpg"
    },
    {
      "name": "Glass Globe Pendant",
      "price": "Rs. 9,200.00",
      "delivery": "Free Delivery",
      "category": "Pendants",
      "img": "path/to/image9.jpg"
    },
    {
      "name": "Bronze Finish Pendant",
      "price": "Rs. 8,400.00",
      "delivery": "Free Delivery",
      "category": "Pendants",
      "img": "path/to/image10.jpg"
    },
    {
      "name": "Classic Wall Light",
      "price": "Rs. 4,300.00",
      "delivery": "Free Delivery",
      "category": "Wall Lights",
      "img": "path/to/image11.jpg"
    },
    {
      "name": "Modern LED Wall Light",
      "price": "Rs. 5,000.00",
      "delivery": "Free Delivery",
      "category": "Wall Lights",
      "img": "path/to/image12.jpg"
    },
    {
      "name": "Rustic Wall Sconce",
      "price": "Rs. 3,500.00",
      "delivery": "Free Delivery",
      "category": "Wall Lights",
      "img": "path/to/image13.jpg"
    },
    {
      "name": "Vintage Wall Lamp",
      "price": "Rs. 6,200.00",
      "delivery": "Free Delivery",
      "category": "Wall Lights",
      "img": "path/to/image14.jpg"
    },
    {
      "name": "Art Deco Wall Light",
      "price": "Rs. 7,500.00",
      "delivery": "Free Delivery",
      "category": "Wall Lights",
      "img": "path/to/image15.jpg"
    },
    {
      "name": "Modern Table Lamp",
      "price": "Rs. 3,200.00",
      "delivery": "Free Delivery",
      "category": "Table Lamps",
      "img": "path/to/image16.jpg"
    },
    {
      "name": "Classic Desk Lamp",
      "price": "Rs. 2,800.00",
      "delivery": "Free Delivery",
      "category": "Table Lamps",
      "img": "path/to/image17.jpg"
    },
    {
      "name": "Rustic Table Lamp",
      "price": "Rs. 4,000.00",
      "delivery": "Free Delivery",
      "category": "Table Lamps",
      "img": "path/to/image18.jpg"
    },
    {
      "name": "Vintage Table Lamp",
      "price": "Rs. 3,500.00",
      "delivery": "Free Delivery",
      "category": "Table Lamps",
      "img": "path/to/image19.jpg"
    },
    {
      "name": "Industrial Desk Lamp",
      "price": "Rs. 3,800.00",
      "delivery": "Free Delivery",
      "category": "Table Lamps",
      "img": "path/to/image20.jpg"
    },
    {
      "name": "Modern Floor Lamp",
      "price": "Rs. 7,000.00",
      "delivery": "Free Delivery",
      "category": "Floor Lamps",
      "img": "path/to/image21.jpg"
    },
    {
      "name": "Classic Floor Lamp",
      "price": "Rs. 6,500.00",
      "delivery": "Free Delivery",
      "category": "Floor Lamps",
      "img": "path/to/image22.jpg"
    },
    {
      "name": "Rustic Floor Lamp",
      "price": "Rs. 8,200.00",
      "delivery": "Free Delivery",
      "category": "Floor Lamps",
      "img": "path/to/image23.jpg"
    },
    {
      "name": "Vintage Floor Lamp",
      "price": "Rs. 7,800.00",
      "delivery": "Free Delivery",
      "category": "Floor Lamps",
      "img": "path/to/image24.jpg"
    },
    {
      "name": "Industrial Floor Lamp",
      "price": "Rs. 7,500.00",
      "delivery": "Free Delivery",
      "category": "Floor Lamps",
      "img": "path/to/image25.jpg"
    },
    {
      "name": "Decorative Vase Set",
      "price": "Rs. 2,000.00",
      "delivery": "Free Delivery",
      "category": "Home Decor",
      "img": "path/to/image26.jpg"
    },
    {
      "name": "Abstract Wall Art",
      "price": "Rs. 5,500.00",
      "delivery": "Free Delivery",
      "category": "Home Decor",
      "img": "path/to/image27.jpg"
    },
    {
      "name": "Decorative Mirror",
      "price": "Rs. 3,800.00",
      "delivery": "Free Delivery",
      "category": "Home Decor",
      "img": "path/to/image28.jpg"
    },
    {
      "name": "Decorative Sculpture",
      "price": "Rs. 6,200.00",
      "delivery": "Free Delivery",
      "category": "Home Decor",
      "img": "path/to/image29.jpg"
    },
    {
      "name": "Decorative Candle Holder",
      "price": "Rs. 2,500.00",
      "delivery": "Free Delivery",
      "category": "Home Decor",
      "img": "path/to/image30.jpg"
    },
    {
      "name": "Modern Ceiling Light",
      "price": "Rs. 12,000.00",
      "delivery": "Free Delivery",
      "category": "Ceiling Lights",
      "img": "path/to/image31.jpg"
    },
    {
      "name": "Classic Ceiling Light",
      "price": "Rs. 10,500.00",
      "delivery": "Free Delivery",
      "category": "Ceiling Lights",
      "img": "path/to/image32.jpg"
    },
    {
      "name": "Rustic Ceiling Light",
      "price": "Rs. 13,800.00",
      "delivery": "Free Delivery",
      "category": "Ceiling Lights",
      "img": "path/to/image33.jpg"
    },
    {
      "name": "Vintage Ceiling Light",
      "price": "Rs. 15,200.00",
      "delivery": "Free Delivery",
      "category": "Ceiling Lights",
      "img": "path/to/image34.jpg"
    },
    {
      "name": "Industrial Ceiling Light",
      "price": "Rs. 14,000.00",
      "delivery": "Free Delivery",
      "category": "Ceiling Lights",
      "img": "path/to/image35.jpg"
    },
    {
      "name": "Outdoor Wall Light",
      "price": "Rs. 6,000.00",
      "delivery": "Free Delivery",
      "category": "Outdoor Lights",
      "img": "path/to/image36.jpg"
    },
    {
      "name": "Outdoor Post Light",
      "price": "Rs. 8,200.00",
      "delivery": "Free Delivery",
      "category": "Outdoor Lights",
      "img": "path/to/image37.jpg"
    },
    {
      "name": "Outdoor Hanging Lantern",
      "price": "Rs. 9,500.00",
      "delivery": "Free Delivery",
      "category": "Outdoor Lights",
      "img": "path/to/image38.jpg"
    },
    {
      "name": "Outdoor Path Light",
      "price": "Rs. 5,200.00",
      "delivery": "Free Delivery",
      "category": "Outdoor Lights",
      "img": "path/to/image39.jpg"
    },
    {
      "name": "Outdoor Security Light",
      "price": "Rs. 7,800.00",
      "delivery": "Free Delivery",
      "category": "Outdoor Lights",
      "img": "path/to/image40.jpg"
    },
    {
      "name": "Modern Ceiling Fan",
      "price": "Rs. 12,500.00",
      "delivery": "Free Delivery",
      "category": "Ceiling Fans",
      "img": "path/to/image41.jpg"
    },
    {
      "name": "Classic Ceiling Fan",
      "price": "Rs. 10,800.00",
      "delivery": "Free Delivery",
      "category": "Ceiling Fans",
      "img": "path/to/image42.jpg"
    },
    {
      "name": "Rustic Ceiling Fan",
      "price": "Rs. 13,300.00",
      "delivery": "Free Delivery",
      "category": "Ceiling Fans",
      "img": "path/to/image43.jpg"
    },
    {
      "name": "Vintage Ceiling Fan",
      "price": "Rs. 15,500.00",
      "delivery": "Free Delivery",
      "category": "Ceiling Fans",
      "img": "path/to/image44.jpg"
    },
    {
      "name": "Industrial Ceiling Fan",
      "price": "Rs. 14,800.00",
      "delivery": "Free Delivery",
      "category": "Ceiling Fans",
      "img": "path/to/image45.jpg"
    },
    {
      "name": "Modern Vanity Light",
      "price": "Rs. 8,000.00",
      "delivery": "Free Delivery",
      "category": "Vanity Lights",
      "img": "path/to/image46.jpg"
    },
    {
      "name": "Classic Vanity Light",
      "price": "Rs. 7,500.00",
      "delivery": "Free Delivery",
      "category": "Vanity Lights",
      "img": "path/to/image47.jpg"
    },
    {
      "name": "Rustic Vanity Light",
      "price": "Rs. 9,200.00",
      "delivery": "Free Delivery",
      "category": "Vanity Lights",
      "img": "path/to/image48.jpg"
    },
    {
      "name": "Vintage Vanity Light",
      "price": "Rs. 10,500.00",
      "delivery": "Free Delivery",
      "category": "Vanity Lights",
      "img": "path/to/image49.jpg"
    },
    {
      "name": "Industrial Vanity Light",
      "price": "Rs. 8,800.00",
      "delivery": "Free Delivery",
      "category": "Vanity Lights",
      "img": "path/to/image50.jpg"
    },
    {
      "name": "Crystal Elegance Chandelier",
      "price": "Rs. 35,000.00",
      "delivery": "Free Delivery",
      "category": "Chandeliers",
      "img": "path/to/image51.jpg"
    },
    {
      "name": "Modern Geometric Chandelier",
      "price": "Rs. 28,000.00",
      "delivery": "Free Delivery",
      "category": "Chandeliers",
      "img": "path/to/image52.jpg"
    },
    {
      "name": "Antique Brass Chandelier",
      "price": "Rs. 40,000.00",
      "delivery": "Free Delivery",
      "category": "Chandeliers",
      "img": "path/to/image53.jpg"
    },
    {
      "name": "Rustic Wood Chandelier",
      "price": "Rs. 22,500.00",
      "delivery": "Free Delivery",
      "category": "Chandeliers",
      "img": "path/to/image54.jpg"
    },
    {
      "name": "Vintage Crystal Chandelier",
      "price": "Rs. 50,000.00",
      "delivery": "Free Delivery",
      "category": "Chandeliers",
      "img": "path/to/image55.jpg"
    },
    {
      "name": "Industrial Iron Pendant",
      "price": "Rs. 7,500.00",
      "delivery": "Free Delivery",
      "category": "Pendants",
      "img": "path/to/image56.jpg"
    },
    {
      "name": "Minimalist White Pendant",
      "price": "Rs. 6,800.00",
      "delivery": "Free Delivery",
      "category": "Pendants",
      "img": "path/to/image57.jpg"
    },
    {
      "name": "Classic Black Pendant",
      "price": "Rs. 5,600.00",
      "delivery": "Free Delivery",
      "category": "Pendants",
      "img": "path/to/image58.jpg"
    },
    {
      "name": "Glass Globe Pendant",
      "price": "Rs. 9,200.00",
      "delivery": "Free Delivery",
      "category": "Pendants",
      "img": "path/to/image59.jpg"
    },
    {
      "name": "Bronze Finish Pendant",
      "price": "Rs. 8,400.00",
      "delivery": "Free Delivery",
      "category": "Pendants",
      "img": "path/to/image60.jpg"
    },
    {
      "name": "Classic Wall Light",
      "price": "Rs. 4,300.00",
      "delivery": "Free Delivery",
      "category": "Wall Lights",
      "img": "path/to/image61.jpg"
    },
    {
      "name": "Modern LED Wall Light",
      "price": "Rs. 5,000.00",
      "delivery": "Free Delivery",
      "category": "Wall Lights",
      "img": "path/to/image62.jpg"
    },
    {
      "name": "Rustic Wall Sconce",
      "price": "Rs. 3,500.00",
      "delivery": "Free Delivery",
      "category": "Wall Lights",
      "img": "path/to/image63.jpg"
    },
    {
      "name": "Vintage Wall Lamp",
      "price": "Rs. 6,200.00",
      "delivery": "Free Delivery",
      "category": "Wall Lights",
      "img": "path/to/image64.jpg"
    },
    {
      "name": "Art Deco Wall Light",
      "price": "Rs. 7,500.00",
      "delivery": "Free Delivery",
      "category": "Wall Lights",
      "img": "path/to/image65.jpg"
    },
    {
      "name": "Modern Table Lamp",
      "price": "Rs. 3,200.00",
      "delivery": "Free Delivery",
      "category": "Table Lamps",
      "img": "path/to/image66.jpg"
    },
    {
      "name": "Classic Desk Lamp",
      "price": "Rs. 2,800.00",
      "delivery": "Free Delivery",
      "category": "Table Lamps",
      "img": "path/to/image67.jpg"
    },
    {
      "name": "Rustic Table Lamp",
      "price": "Rs. 4,000.00",
      "delivery": "Free Delivery",
      "category": "Table Lamps",
      "img": "path/to/image68.jpg"
    },
    {
      "name": "Vintage Table Lamp",
      "price": "Rs. 3,500.00",
      "delivery": "Free Delivery",
      "category": "Table Lamps",
      "img": "path/to/image69.jpg"
    },
    {
      "name": "Industrial Desk Lamp",
      "price": "Rs. 3,800.00",
      "delivery": "Free Delivery",
      "category": "Table Lamps",
      "img": "path/to/image70.jpg"
    },
    {
      "name": "Modern Floor Lamp",
      "price": "Rs. 7,000.00",
      "delivery": "Free Delivery",
      "category": "Floor Lamps",
      "img": "path/to/image71.jpg"
    },
    {
      "name": "Classic Floor Lamp",
      "price": "Rs. 6,500.00",
      "delivery": "Free Delivery",
      "category": "Floor Lamps",
      "img": "path/to/image72.jpg"
    },
    {
      "name": "Rustic Floor Lamp",
      "price": "Rs. 8,200.00",
      "delivery": "Free Delivery",
      "category": "Floor Lamps",
      "img": "path/to/image73.jpg"
    },
    {
      "name": "Vintage Floor Lamp",
      "price": "Rs. 7,800.00",
      "delivery": "Free Delivery",
      "category": "Floor Lamps",
      "img": "path/to/image74.jpg"
    },
    {
      "name": "Industrial Floor Lamp",
      "price": "Rs. 9,000.00",
      "delivery": "Free Delivery",
      "category": "Floor Lamps",
      "img": "path/to/image75.jpg"
    },
    {
      "name": "Modern Home Decor",
      "price": "Rs. 2,500.00",
      "delivery": "Free Delivery",
      "category": "Home Decor",
      "img": "path/to/image76.jpg"
    },
    {
      "name": "Classic Home Decor",
      "price": "Rs. 2,000.00",
      "delivery": "Free Delivery",
      "category": "Home Decor",
      "img": "path/to/image77.jpg"
    },
    {
      "name": "Rustic Home Decor",
      "price": "Rs. 3,000.00",
      "delivery": "Free Delivery",
      "category": "Home Decor",
      "img": "path/to/image78.jpg"
    },
    {
      "name": "Vintage Home Decor",
      "price": "Rs. 2,800.00",
      "delivery": "Free Delivery",
      "category": "Home Decor",
      "img": "path/to/image79.jpg"
    },
    {
      "name": "Industrial Home Decor",
      "price": "Rs. 3,500.00",
      "delivery": "Free Delivery",
      "category": "Home Decor",
      "img": "path/to/image80.jpg"
    }
  ]
  

  
  
  const categoryDetails = () => {
    const { name } = useParams();

    const filteredProducts = products.filter(product => product.category.toLowerCase() === name.toLowerCase());
    // Add more categories as needed
  
    return (
      <div>
        <CategoryBanner title="Our Products" />
        <Chandeliers name={name}/>
        <ShowCategoryWise products={filteredProducts} />
        {/* <ShowCategoryWise title="Pendants" products={pendants} />
        <ShowCategoryWise title="Wall Lights" products={wallLights} /> */}
        {/* Add more categories as needed */}
      </div>
    );
  };
  
  export default categoryDetails;