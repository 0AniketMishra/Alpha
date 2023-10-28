"use client"
import About from '@/app/About'
import Header from '@/app/Header'
import Item from '@/app/Item'
import Reviews from '@/app/Reviews'
import Seller from '@/app/Seller'
import React from 'react'

const page = ({params}) => {
  
    return (
    <div>
        <Header/>
        <Item/>
        <About/>
        <Seller/>
        <Reviews/>
    </div>
  )
}

export default page