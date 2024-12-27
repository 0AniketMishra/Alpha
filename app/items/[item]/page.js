"use client"
import About from '@/app/components/About'
import Header from '@/app/components/Header'
import Item from '@/app/components/Item'
import Item2 from '@/app/components/Item2'
import Loading from '@/app/components/Loading'
import Reviews from '@/app/components/Reviews'
import Seller from '@/app/components/Seller'
import { useProduct } from '@/app/context/ProductContext'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const page = ({params, searchParams}) => {

  const router = useRouter(); 
  const  id  = useParams().item
  console.log(id)
      const { currentProduct, setCurrentProduct } = useProduct();
      const [loading,setLoading] = useState(true)
  
  useEffect(() => {

    const fetchListing = async () => {
      if (id) {
        try {
          const query = `https://alpha-backend-v7bb.vercel.app/listing/${id}`;
          const response = await fetch(query); const res = await response.json();
          //   setListing(res);
          setCurrentProduct(res);
          setLoading(false)
        } catch (error) {
          console.error('Error fetching listing:', error);
        }
      }
    };
    if(currentProduct ==null)
      fetchListing();
    
  }, []);

    return (
    <div className='bg-white dark:bg-black'>
       {loading == false || currentProduct != null ? (
         <div>
            <Header />
            <Item2 />
            <About loading={loading}/>
            <Seller />
            <Reviews />
         </div>
       ):(
    <Loading/>
       )}
    </div>
  )
}

export default page