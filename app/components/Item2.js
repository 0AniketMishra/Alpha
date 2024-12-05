import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Heart, Share2, ShoppingCart, DollarSign } from 'lucide-react';
import Link from 'next/link'

const colors = ['Stone Gray', 'Midnight Black', 'Ocean Blue'];
const specs = [
    { name: 'Dimensions', value: '7.8 x 3.6 x 0.3 inches' },
    { name: 'Weight', value: '6.07 ounces' },
    { name: 'Battery Life', value: 'Up to 20 hours' },
    { name: 'Connectivity', value: 'Bluetooth 5.0, Wi-Fi' }
];

export default function ProductDetails({ product, }) {
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [activeImage, setActiveImage] = useState(0);
    const [show, setShow] = useState(false)
    const [variants,setVariants] = useState(product.variants)
    const [data,setData] = useState()
    const [variant1, setVariant1] = useState()


    const images = [
        product.image,
    ];
    

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const query = "https://alpha-backend-v7bb.vercel.app/listing/" + product.id
                const response = await fetch(query);
                const res = await response.json();
                setData(res.variants)

            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };
        fetchListings();
    }, []);


    
console.log(product)



    return (
        <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-custom mx-auto">
            <Link href='/shop'

                className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
            >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Shop
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                <div className="space-y-4">
                    <div className="aspect-16/10 relative overflow-hidden rounded-lg bg-gray-200">
                        <img
                            src={images[activeImage]}
                            alt={product.title}
                            className="h-full w-full object-cover"
                        />
                        <button
                            onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="hidden md:flex gap-4">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`w-20 h-20  rounded-lg overflow-hidden ${activeImage === idx ? 'ring-2 ring-indigo-500' : ''
                                    }`}
                            >
                                <img src={img} alt="" className="h-full w-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className='lg:mt-8'>
                    <h2 className="text-sm title-font dark:text-gray-200 text-black  tracking-widest">BRAND NAME</h2>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.title}</h1>

                    <div className="mt-4 flex items-center">

                        <div className="flex text-yellow-400">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${i < product.rating ? 'fill-current' : ''}`}
                                />
                            ))}
                        </div>

                        <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
                    </div>
                    <div className='mt-2'>
                        {show == false && (
                            <div>
                                <p className="leading-relaxed max-h-40 line-clamp-4 text-black dark:text-white">{product.description}</p>
                                <p onClick={() => setShow(true)} className="leading-relaxed max-h-40 dark:text-blue-400 text-blue-600">Read More.</p>
                            </div>
                        )}
                        {show == true && (
                            <div>
                                <p className="leading-relaxed ">{product.description}</p>
                                <p onClick={() => setShow(false)} className="leading-relaxed text-blue-400 ">Read Less.</p>
                            </div>
                        )}
                    </div>

                  

                    {data?.map((info) => (
                        <div key={info.name} className="mt-8">
                            <h2 className="font-semibold mb-2 text-black dark:text-white">{info.name}</h2>
                            <div className="flex gap-4">
                                {info?.options?.map(option => (
                                    <button
                                        key={option.name}
                                        onClick={() => setVariant1(option.value)}
                                        className={`px-4 py-2 text-sm md:text-md rounded-full border ${data[0]?.options[0]?.value == option.value
                                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                            : 'text-black dark:text-white border-gray-300 hover:border-gray-400'
                                            }`}
                                    >
                                        {option.value}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}


                    {/* <div className="mt-8">
                        <h2 className="font-semibold mb-4">Specifications</h2>
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                            {specs.map(spec => (
                                <div key={spec.name} className="border-t pt-4 dark:border-gray-700">
                                    <dt className="font-medium text-gray-500 dark:text-gray-400">{spec.name}</dt>
                                    <dd className="mt-1 text-gray-900 dark:text-white">{spec.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div> */}

                    <div className="mt-8 space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    ${product.price}
                                </p>
                                {product.originalPrice && (
                                    <p className="text-sm text-gray-500 line-through">
                                        ${product.originalPrice}
                                    </p>
                                )}
                            </div>

                            <div className="flex gap-2">
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <Heart className="h-6 w-6" />
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <Share2 className="h-6 w-6" />
                                </button>
                            </div>
                        </div>

                        <div className='flex space-x-4'>
                            <button className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-white py-3 px-8 rounded-lg hover:bg-yellow-600">
                                <ShoppingCart className="h-5 w-5" />
                                Add to Cart
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700">
                                <DollarSign className="h-5 w-5" />
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}