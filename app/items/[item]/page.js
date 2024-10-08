"use client"
import About from '@/app/components/About'
import Header from '@/app/components/Header'
import Item from '@/app/components/Item'
import Reviews from '@/app/components/Reviews'
import Seller from '@/app/components/Seller'
import React from 'react'


const page = ({params, searchParams}) => {


    return (
    <div>
        <Header/>  
        <Item info={searchParams}/>
        <About/>
        <Seller/>
        <Reviews/>
    </div>
  )
}

export default page