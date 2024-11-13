"use client"
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ChatSidebar from '../components/ChatSidebar'
import Chat from '../components/Chat'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebaseConfig'
import Loading from '../components/Loading'


const Page = () => {
  

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null)


  useEffect(() => { // Function to get JWT from cookies 

    const getTokenFromCookie = () => {
      const cookies = document.cookie.split('; ');
      const jwtCookie = cookies.find(cookie =>
        cookie.startsWith('jwt='));
      if (jwtCookie) {
        return jwtCookie.split('=')[1];
      } return null;
    };
    const jwtToken = getTokenFromCookie();
    setToken(jwtToken)
    setLoading(false)
  },[]);


  if (!token && !loading)
    router.push("/login")


  return (
   <div>
    {!loading && token ? (
      <div className='scrollbar-hide h-screen'>
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