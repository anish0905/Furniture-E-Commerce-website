import React from 'react'
import { useLocation } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {

    const location = useLocation();
    const { product } = location.state || {}; // Destructure the product from state

    if (!product) {
        return <div>No product data available</div>;
    }

    return (
        <div className='flex flex-wrap justify-evenly content-center  gap-5 lg:px-[20%] my-4'>
            <div>
                <img src={product.img} alt={product.name} className='shadow-md rounded-sm' />
            </div>
            <div>
                <h1 className='text-2xl font-thin my-4 '>{product.name}</h1>

                <p className='text-[#8E95B2] my-4'>SKU WL128-10001</p>
                <p className='my-4 text-[#D4B080] tex-2xl'> {product.price}
                    <span className='text-black px-4'>(Price Inclusive Of All Taxes)</span>
                </p>

                <div className='flex  my-4 flex-col justify-start content-normal items-center gap-5 '>
                    <p>CHECK DELIVERY To Your Pincode:</p>
                    <div className='flex justify-start content-normal items-center gap-5'>
                        <input type="number" placeholder='Enter Pincode ' className='px-10 w-52 py-2 rounded-sm border border-black' />
                        <button className='bg-[#6e6d6c] w-20 h-10 text-white shadow-sm'>CHECK</button>
                    </div>
                </div>
                <button className=' w-full py-4 bg-[#E58377] rounded-sm text-white   flex justify-center content-normal items-center gap-5'>
                    <FaShoppingCart className='text-2xl' /><p> Add To CART</p>
                </button>
            </div>
        </div>
    )
}

export default ProductDetails
