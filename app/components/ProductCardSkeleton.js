import React from 'react'

function ProductCardSkeleton() {
  return (
    <div className="group relative bg-white dark:bg-def rounded-xl shadow-lg transition-all hover:shadow-xl">
      
        <div className="aspect-16/10 w-full overflow-hidden rounded-t-xl bg-gray-200">
          <div
            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity bg-gray-300 "
          />
          <div className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"/>
        </div>
        <div className="mt-4 p-4">
          <div className="space-y-2 animate-pulse">
            <div className="text-lg font-medium h-5 rounded-full dark:bg-gray-600 bg-gray-300 w-full line-clamp-1"></div>
          <div className="text-lg font-medium h-5 rounded-full dark:bg-gray-600 bg-gray-300 w-full line-clamp-1"></div>
          </div>
          <div className="mt-2  h-3 w-[80%] mt-4 rounded-full dark:bg-gray-600 bg-gray-300 animate-pulse"></div>
        <div className="mt-2  h-3 w-[80%] mt-4 rounded-full dark:bg-gray-600 bg-gray-300 animate-pulse"></div>

          <div className="flex mt-2 items-center space-x-2">
            
              <div className="text-md rounded-full dark:bg-gray-600 bg-gray-300 h-4 w-16"></div>
          <div className="text-md rounded-full dark:bg-gray-600 bg-gray-300 h-4 w-16 animate-pulse"></div>
            
          </div>
        </div>
      
      <div className="pl-4 pr-4 pb-4 space-y-3">
        <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-xl  transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
          Buy Now
        </button>
        <button className="w-full bg-orange-600 text-white text-black  py-2 rounded-xl transition-colors ">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCardSkeleton