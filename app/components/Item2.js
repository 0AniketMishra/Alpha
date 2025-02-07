import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Heart, Share2, ShoppingCart, DollarSign } from 'lucide-react';
import Link from 'next/link'
import { useCart } from '../context/cartContext';
import { useProduct } from '../context/ProductContext';
import { useRouter } from 'next/navigation';


const colors = ['Stone Gray', 'Midnight Black', 'Ocean Blue'];
const specs = [
    { name: 'Dimensions', value: '7.8 x 3.6 x 0.3 inches' },
    { name: 'Weight', value: '6.07 ounces' },
    { name: 'Battery Life', value: 'Up to 20 hours' },
    { name: 'Connectivity', value: 'Bluetooth 5.0, Wi-Fi' }
];

export default function ProductDetails() {

    const [activeImage, setActiveImage] = useState(0);
    const { addToCart, cartItems } = useCart();
    const [show, setShow] = useState(false)
    const { currentProduct, setCurrentProduct } = useProduct();
    

    return (
        <div className="lg:pt-32 pt-24 px-4 sm:px-6 lg:px-8 max-w-custom mx-auto">
            <Link href='/shop'

                className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
            >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Shop
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                <div className="space-y-4">
                    <div className="aspect-16/10 relative overflow-hidden rounded-lg bg-gray-200">

                        {typeof currentProduct?.image == "string" ? (
                            <img
                                src={currentProduct?.image}
                                alt={currentProduct?.title}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <img
                                src={currentProduct?.image[activeImage]}
                                alt={currentProduct?.title}
                                className="h-full w-full object-cover"
                            />
                        )}

                        <button
                            onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : currentProduct?.image.length - 1))}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setActiveImage((prev) => (prev < currentProduct?.image.length - 1 ? prev + 1 : 0))}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="hidden md:flex gap-4">
                        {typeof currentProduct?.image != 'string' ? (
                            <div className='space-x-4'>
                                {currentProduct?.image?.map((img, idx) => (
                                    <button
                                        key={img}
                                        onClick={() => setActiveImage(idx)}
                                        className={`w-20 h-20  rounded-lg overflow-hidden ${activeImage === idx ? 'ring-2 ring-indigo-500' : ''
                                            }`}
                                    >
                                        <img src={img} alt="" className="h-full w-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div>
                                <button

                                    onClick={() => setActiveImage(idx)}
                                    className="w-20 h-20  rounded-lg overflow-hidden ring-2 ring-indigo-500 "
                                >
                                    <img src={currentProduct?.image} alt="" className="h-full w-full object-cover" />
                                </button>

                            </div>
                        )}
                    </div>
                </div>

                <div className=''>
                    <h2 className="text-sm title-font dark:text-gray-200 text-black  tracking-widest">BRAND NAME</h2>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{currentProduct?.title}</h1>

                    <div className="mt-4 flex items-center">

                        <div className="flex text-yellow-400">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${i < currentProduct?.rating ? 'fill-current' : ''}`}
                                />
                            ))}
                        </div>

                        <span className="ml-2 text-gray-600">({currentProduct?.reviews} reviews)</span>
                    </div>
                    <div className='mt-2'>
                        {show == false && (
                            <div>
                                <p className="leading-relaxed max-h-40 line-clamp-3 text-black dark:text-white">{currentProduct?.description}</p>
                                <p onClick={() => setShow(true)} className="leading-relaxed max-h-40 dark:text-blue-400 text-blue-600">Read More.</p>
                            </div>
                        )}
                        {show == true && (
                            <div>
                                <p className="leading-relaxed text-black dark:text-white">{currentProduct?.description}</p>
                                <p onClick={() => setShow(false)} className="leading-relaxed text-blue-400 ">Read Less.</p>
                            </div>
                        )}
                    </div>



                    <div className='mt-4 flex space-x-4'>
                        {currentProduct?.variants.map((info) => (
                            <div key={info.name}>
                                <h1 className='ml-2 text-black dark:text-white'>{info.name}</h1>
                                <div className='flex space-x-2 mb-2 mt-2 pr-2 bg-gray-100 dark:bg-def rounded-full'>
                                    <select className='rounded-full bg-gray-100 dark:bg-def text-black dark:text-white outline-none  py-2 px-3 text-base font-medium'>

                                        {info.options.map((option) => (
                                            <option key={option.value} className='bg-gray-300 px-4 py-2 rounded-full '>
                                                {option.value}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="">
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
                                    ${currentProduct?.price}
                                </p>
                                {currentProduct?.originalPrice && (
                                    <p className="text-sm text-gray-500 line-through">
                                        ${currentProduct?.originalPrice}
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
                            <button onClick={() => addToCart(currentProduct)} className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600">
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