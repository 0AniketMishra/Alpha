import Link from 'next/link'
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';
import { BackgroundGraphics } from './BackgroundGraphics';
import Sample from './Sample';
import Testimonials from './Testimonials';

export default function Hero() {
    const categories = [
        { name: "Electronics", count: "320" },
        { name: "Fashion", count: "480" },
        { name: "Home & Living", count: "250" },
        { name: "Sports", count: "180" }
    ];

    const [listings, setListings] = useState([{
        _id: 1,
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
            _id: 2,
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
            _id: 3,
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
            _id: 4,
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



            <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-6  dark:bg-black">
                {/* <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white justify-center">Featured Products</h2>
                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center">
                        View All
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div> */}
                <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Featured Products</h1>
                


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {listings.map((product) => (
                      <ProductCard {...product} key={product._id}/>
                    //  <Sample {...product} key={product.id}/>
                    ))}
                </div>
            </div>



           <Testimonials/>


            {/* Footer */}

            <footer className="text-gray-400 bg-gray-100 dark:bg-def body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl text-black dark:text-white">Shadow Trade</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Delivering Unconditionally With The Lowest Fees Possible Making It</p>
                        <p className="text-sm text-orange-600">The Only Marketplace you need!</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black dark:text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-white">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black dark:text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-white">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black dark:text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-white">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black dark:text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-white">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>

            </footer>


        </div>
 
   

    )
}