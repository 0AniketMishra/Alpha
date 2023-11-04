import React from 'react'
import Header from '../Header'
import ChatSidebar from '../ChatSidebar'
import Chat from '../Chat'
import Link from "next/link"
const page = () => {
  return (
    <div className='scrollbar-hide'>
        <Header/>
        <div className='container flex mx-auto md:px-2 lg:px-4 py-4 '>
            <ChatSidebar/>
            <Chat/>
      </div>

      
    </div>
  )
}

export default page