import React from 'react'
import Header from '../Header'
import ChatSidebar from '../ChatSidebar'
import Chat from '../Chat'

const page = () => {
  return (
    <div>
        <Header/>
        <div className='container mx-auto px-4 lg:px-2 py-4 flex '>
            <ChatSidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default page