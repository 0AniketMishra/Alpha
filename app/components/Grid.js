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
             const response = await fetch('https://alpha-backend-v7bb.vercel.app/listings');
              const data = await response.json();
               setListings(data);
             } catch (error) {
                 console.error('Error fetching listings:', error);
                 } }; 
                 fetchListings(); 
        }, []);



    const featuredProducts = [
        {
            id: 1,
            title: "Premium Wireless Headphones with true noice cancellation and more advanced features",
            price: 299.99,
            originalPrice: 300,
            sellerId: "@Assasin123",
            sellerName: "The Assasin",
            rating: 4,
            reviews: 128,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
            description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
            stock: 8,
            badge: "limited"
        },
        {
            id: 6,
            title: "Premium Wireless Headphones",
            price: 299.99,
            sellerId: "@Assasin123",
            sellerName: "The Assasin",
            rating: 4,
            reviews: 128,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
            description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
            stock: 8,
            badge: "limited"
        },

        {
            id: 2,
            title: "Smart Watch Series 5",
            price: 399.99,
            sellerId: "@Assasin123",
            sellerName: "The Assasin",
            rating: 5,
            reviews: 256,
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
            description: "Latest smartwatch with advanced health monitoring and fitness tracking features.",
            stock: 15,
            badge: "new"
        },
        {
            id: 3,
            title: "Designer Backpack",
            price: 79.99,
            sellerId: "@Assasin123",
            sellerName: "The Assasin",
            rating: 4,
            reviews: 89,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
            description: "Stylish and durable backpack perfect for everyday use and travel.",
            stock: 20,
            badge: "sale"
        },
        {
            id: 4,
            title: "Premium Sunglasses",
            price: 159.99,
            rating: 5,
            reviews: 167,
            sellerId: "@Assasin123",
            sellerName: "The Assasin",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
            description: "Designer sunglasses with UV protection and polarized lenses.",
            stock: 12,
            badge: "new"
        }
    ];
    return (
        <div>
            <section className="text-gray-600 body-font pt-2 pb-4 " >
                <div className=" px-2 pt-3 mx-auto" bis_skin_checked="1">
                    
                    <div className="flex flex-wrap -m-2" bis_skin_checked="1">

                       

                                

                                    
                            {listings.map((product) => (
                                <div key={product.id} className='2xl:w-1/4 xl:w-1/3 lg:w-1/3  rounded-lg md:w-1/2 p-2 w-full '>
                                    <Link href={{ pathname: '/items/' + product._id, query: { title: product.title, id: product._id, image: product.image, price: product.price, reviews: product.reviews, sellerName: product.sellerName, sellerId: product.sellerId, description: product.description,originalPrice: product.originalPrice,variants: product.variants,highlightFeatures: product.highlightFeatures} }} >

                                        <ProductCard
                                          
                                            {...product}
                                        />
                                    </Link>

                                    </div>
                            ))}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Grid
