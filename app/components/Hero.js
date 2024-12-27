"use client"
import Link from 'next/link'
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';
import { BackgroundGraphics } from './BackgroundGraphics';

export default function Hero() {
    const categories = [
        { name: "Electronics", count: "320" },
        { name: "Fashion", count: "480" },
        { name: "Home & Living", count: "250" },
        { name: "Sports", count: "180" }
    ];

    const [listings, setListings] = useState([{
        id: 1,
        title: "Loading Please wait...",
        price: 299.99,
        originalPrice: 399.99,
        rating: 4,
        reviews: 128,
        image: "https://dummyimage.com/16:9x1080",
        description: "The content is currently Loading.",
        stock: 8,
        badge: "limited"
    },
        {
            id: 2,
            title: "Loading Please wait...",
            price: 299.99,
            originalPrice: 399.99,
            rating: 4,
            reviews: 128,
            image: "https://dummyimage.com/16:9x1080",
            description: "The content is currently Loading.",
            stock: 8,
            badge: "limited"
        },
        {
            id: 3,
            title: "Loading Please wait...",
            price: 299.99,
            originalPrice: 399.99,
            rating: 4,
            reviews: 128,
            image: "https://dummyimage.com/16:9x1080",
            description: "The content is currently Loading.",
            stock: 8,
            badge: "limited"
        },
        {
            id: 4,
            title: "Loading Please wait...",
            price: 299.99,
            originalPrice: 399.99,
            rating: 4,
            reviews: 128,
            image: "https://dummyimage.com/16:9x1080",
            description: "The content is currently Loading.",
            stock: 8,
            badge: "sale"
        },
]);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const url = "https://alpha-backend-v7bb.vercel.app/listings";

                const response = await fetch(url);
                const data = await response.json();
                setListings(data);
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };
        fetchListings();
    }, []);


    const featuredProducts = [
        {
            id: 1,
            title: "Premium Wireless Headphones",
            price: 299.99,
            originalPrice: 399.99,
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
            originalPrice: 129.99,
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
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
            description: "Designer sunglasses with UV protection and polarized lenses.",
            stock: 12,
            badge: "new" 
        }
    ];


    return (
        <div className='dark:bg-black bg-defl '>
            
            <section className="relative pt-24 lg:pt-30 pb-10 overflow-hidden">
                <BackgroundGraphics />
                <div className="lg:max-w-custom mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative items-center">
                        <HeroContent />
                        <HeroImage />
                    </div>
                </div>
            </section>

{/* Hero */}

            {/* <div className="max-w-custom  mt-12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-indigo-600">Shop by Category</h2>
                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center">
                        View All
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((category) => (
                        <div key={category.name} className="relative group">
                            <div className="relative h-40 w-full overflow-hidden rounded-lg bg-white dark:bg-gray-800 group-hover:opacity-75 transition-opacity">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-2xl font-semibold text-gray-900 dark:text-white">{category.name}</span>
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{category.count} Products</p>
                        </div>
                    ))}
                </div>
            </div> */}


            {/* Shop By Category */}


            <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-6  dark:bg-black">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center">
                        View All
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {listings.map((product) => (
                        <div key={product.id}>
                        <ProductCard

                            {...product}
                        />
                  </div>
                    ))}
                </div>
            </div>



            {/* Newsletter */}

            {/* <section className="bg-gray-100 dark:bg-def py-16 max-w-custom mx-auto rounded-lg ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Stay Updated</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Subscribe to our newsletter and get 10% off your first purchase plus exclusive access to new arrivals.
                    </p>

                    <form className="mt-8 max-w-sm mx-auto">
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-l-full border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 flex items-center"
                            >
                                Subscribe
                                <Send size={20} className="ml-2" />
                            </button>
                        </div>
                    </form>
                </div>
            </section> */}



            {/* Footer */}

            <footer class="text-gray-400 bg-white dark:bg-def body-font">
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span class="ml-3 text-xl text-black dark:text-white">Shadow Trade</span>
                        </a>
                        <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-black dark:text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-400 hover:text-white">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-black dark:text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-400 hover:text-white">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-black dark:text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-400 hover:text-white">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-black dark:text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-400 hover:text-white">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
               
            </footer>


        </div>
 
   

    )
}