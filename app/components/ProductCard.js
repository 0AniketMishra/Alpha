

export default function ProductCard({
    image,
    title,
    price,
    rating,
    originalPrice,
    badge,
    description,
    variants,
    stock,
    reviews
}) {
    return (
        <div className="group  relative bg-white dark:bg-def rounded-xl shadow-lg  transition-all hover:shadow-xl">
            <div className="aspect-16/10 w-full overflow-hidden rounded-t-xl bg-gray-200 ">
                <img
                    src={image[0]}
                    alt={title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                />
                <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-600 dark:text-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                </button>
                {badge && (
                    <div className={`absolute top-2 left-2 px-3 py-1 rounded-full text-sm font-medium text-white
            ${badge === 'new' ? 'bg-green-500' :
                            badge === 'limited' ? 'bg-orange-500' :
                                'bg-red-500'}`}>
                        {badge === 'new' ? 'New Arrival' :
                            badge === 'limited' ? 'Limited Stock' :
                                'Sale'}
                    </div>
                )}
            </div>
            <div className="mt-4 p-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white line-clamp-1">{title}</h3>
                   
                    
                </div>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {description}
                </p>

                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-yellow-400">
                            {'⭐'.repeat(rating)}{'⭐'.repeat(5 - rating)}
                        </div>
                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                            ({reviews} reviews)
                        </span>
                    </div>
                   
                </div>

                {/* <div className="mt-2 pb-4 text-sm text-gray-500 dark:text-gray-400">
                    {stock < 10 ? (
                        <span className="text-orange-500">Only {stock} left in stock</span>
                    ) : (
                        <span>In Stock ({stock} available)</span>
                    )}
                    
                </div> */}
                <div className="flex mt-2 items-center space-x-2 ">
                    {originalPrice && (
                        <span className="text-md text-gray-500 line-through dark:text-gray-400">
                            ${originalPrice}
                        </span>
                    )}
                    <span className="text-xl  font-bold text-black dark:text-green-200">
                        ${price}
                    </span>
                </div>
               
            </div>

            <div className=" pl-4 pr-4 pb-4  space-y-2">
                <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-xl hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                    Buy Now
                </button>

                <button className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-colors dark:bg-indigo-500 dark:hover:bg-indigo-600">
                    Add to Cart
                </button>
               
            </div>



            
        </div>
    );
}