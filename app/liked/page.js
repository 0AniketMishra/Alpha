"use client"
import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import useFetch from '@/hooks/useUserState'


const page = () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

  const approval = useFetch();
  
  return (
    
   <div>
    {approval == 2?(
        <div>
          <Header />
          <div className="container px-5 pt-3 mx-auto" bis_skin_checked="1">
            <h1 className='text-white text-xl uppercase font-bold mb-6 mr-4' >Liked Items</h1>
            <div className="flex flex-wrap -m-4" bis_skin_checked="1">
              {items.map(item => {
                return (

                  <Link key={item.id} href={'/items/' + item.id} className="lg:w-1/4 md:w-1/2 p-2 w-full hover:scale-[1.05] transition-all duration-150 ease-out" bis_skin_checked="1">

                    <img alt="ecommerce" className="object-cover object-center w-full rounded-lg " src="https://dummyimage.com/420x260" />

                    <div className="mt-4" bis_skin_checked="1">
                      <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                      <h2 className="text-white title-font text-md font-medium">Glock 19: Semi-automatic pistol with preinstalled suppresor</h2>
                      <p className="mt-1 text-blue-600 font-bold">$16.00</p>
                    </div>

                  </Link>
                )
              })}



            </div>
          </div>
        </div>
    ):(
      <div>Loading...</div>
    )}
   </div>
  )
}

export default page