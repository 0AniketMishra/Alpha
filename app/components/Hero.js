import Link from 'next/link'
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';
import { BackgroundGraphics } from './BackgroundGraphics';
import Sample from './Sample';
import Testimonials from './Testimonials';
import Footer from './Footer';
import ProductCardSkeleton from './ProductCardSkeleton';

export default function Hero() {
    const categories = [
        { name: "Electronics", count: "320" },
        { name: "Fashion", count: "480" },
        { name: "Home & Living", count: "250" },
        { name: "Sports", count: "180" }
    ];

    const [listings, setListings] = useState([{_id: 1},{_id: 2},{_id: 3},{_id: 4}]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const url = "https://alpha-backend-v7bb.vercel.app/featuredPosts";

                const response = await fetch(url);
                const data = await response.json();
                setListings(data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };
        fetchListings();
    }, []);




    return (
        <div className='dark:bg-black bg-defl '>
 
 
                <div>
                    <section className="relative pt-32 lg:pt-30 pb-10 overflow-hidden">
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
                        <h1 className="text-3xl font-medium title-font dark:text-white text-black mb-12 text-center">Featured Products</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {loading ? (
                                 listings.map((listing) => (
                                    <ProductCardSkeleton key={listing._id} />
                                 )) 
                            ) : (
                                listings.map((listing) => (
                                    <ProductCard {...listing} key={listing._id} />
                                ))
                            )}
                        </div>
                    </div>


                    <Testimonials />
                    <Footer
                    />
                </div>
 


        </div>



    )
}