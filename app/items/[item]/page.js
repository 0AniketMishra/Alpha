"use client"
import About from '@/app/components/About'
import Header from '@/app/components/Header'
import Item from '@/app/components/Item'
import Item2 from '@/app/components/Item2'
import Reviews from '@/app/components/Reviews'
import Seller from '@/app/components/Seller'
import React from 'react'


const page = ({params, searchParams}) => {


    return (
    <div className='bg-defl dark:bg-black'>
        <Header/>  
        <Item2 product={searchParams}/>
        <About info={searchParams}/>
        <Seller/>
        <Reviews/>
    </div>
  )
}

export default page