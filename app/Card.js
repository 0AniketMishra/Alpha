import React from 'react'

const Card = () => {

  return (
   
         <div   className="lg:w-1/4 md:w-1/2 p-2 w-full hover:scale-[1.05] transition-all duration-150 ease-out" bis_skin_checked="1">

           <img alt="ecommerce" className="object-cover object-center w-full rounded-lg " src="https://dummyimage.com/420x260" />
           <div className="mt-4" bis_skin_checked="1">
           <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
           <h2 className="text-white title-font text-md font-medium">Glock 19: Semi-automatic pistol with preinstalled suppresor</h2>
           <p className="mt-1 text-blue-600 font-bold">$16.00</p>
            </div>
        </div>
                  



          

  )
}

export default Card