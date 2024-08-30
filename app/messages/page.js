"use client"
import React from 'react'
import Header from '../components/Header'
import ChatSidebar from '../components/ChatSidebar'
import Chat from '../components/Chat'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebaseConfig'
import Loading from '../components/Loading'


const Page = () => {
  
  const [user, loading] = useAuthState(auth);
  const router = useRouter();


  if (!user && !loading)
    router.push("/login")


  return (
   <div>
    {!loading && user ? (
      <div className='scrollbar-hide'>
        <Header />
          <div className='container mx-auto max-w-custom flex md:px-2 lg:px-4 pt-24'>
          <ChatSidebar />
          <Chat />
        </div>
      </div>
    ): (
      <Loading/>
    )}
   </div>
  )
}

export default Page