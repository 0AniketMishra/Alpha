"use client"
import React from 'react'
import Header from '../components/Header'
import BecomeSeller from '../components/BecomeSeller'
import Sidebar from '../components/Sidebar'

function page() {
  return (
    <div>
        <Header/>

          <div className='container mx-auto max-w-custom px-4 lg:px-2 py-8 flex '>
              <Sidebar />
              <BecomeSeller />
          </div>
    </div>
  )
}

export default page