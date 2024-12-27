import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import ProductCard from './ProductCard';

const Grid = () => {
    const dummy = "This is dummy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Turpis massa sed elementum tempus egestas sed sed risus pretium. Dignissim enim sit amet venenatis urna cursus. Habitant morbi tristique senectus et netus et malesuada fames. Viverra adipiscing at in tellus integer feugiat. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet."

    const [listings, setListings] = useState([]);

     useEffect(() => {
         const fetchListings = async () => {
         try {
             const response = await fetch("https://alpha-backend-v7bb.vercel.app/listings");
              const data = await response.json();
               setListings(data);
             } catch (error) {
                 console.error('Error fetching listings:', error);
                 } }; 
                 fetchListings(); 
        }, []);


    return (
        <div>
            <section className="text-gray-600 body-font pt-2 pb-4 " >
                <div className=" px-2 pt-3 mx-auto" >
                    <div className="flex flex-wrap -m-2" >                                    
                            {listings.map((product) => (
                                <div key={product._id} className='2xl:w-1/4 xl:w-1/3 lg:w-1/3  rounded-lg md:w-1/2 p-2 w-full '>
                                    <ProductCard {...product} />
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Grid
