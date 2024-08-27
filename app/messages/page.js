"use client"
import React from 'react'
import Header from '../components/Header'
import ChatSidebar from '../components/ChatSidebar'
import Chat from '../components/Chat'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebaseConfig'


const page = () => {
  
  const [user, loading] = useAuthState(auth);
  const router = useRouter();


  if (!user && !loading)
    router.push("/login")


  return (
   <div>
    {!loading && user ? (
      <div className='scrollbar-hide'>
        <Header />
        <div className='container flex mx-auto md:px-2 lg:px-4 py-4 '>
          <ChatSidebar />
          <Chat />
        </div>
      </div>
    ): (
      <div>Loading...</div>
    )}
   </div>
  )
}

export default page