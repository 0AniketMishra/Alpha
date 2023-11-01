import React from 'react'
import Header from '../Header'
import ChatSidebar from '../ChatSidebar'
import Chat from '../Chat'
import Link from "next/link"
const page = () => {
  return (
    <div>
        <Header/>
        <div className='container flex mx-auto px-4 lg:px-2 py-4 '>
            <ChatSidebar/>
            <Chat/>
      </div>

      
    </div>
  )
}

export default page