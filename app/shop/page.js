"use client"
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import { auth } from '@/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'


import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Grid from '../components/Grid'
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'

function page() {

 
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
        setLoading(false);
    
    });


    if (!token && !loading)
        router.push("/login")


  return (
    <div>
          <div>
              {!loading && token ? (
                  <div>
                      <Header />

                      <div className='container mx-auto max-w-custom px-4 lg:px-2 py-8 flex '>
                          <Sidebar />
                          <Grid />
                      </div>
                  </div>
              ) : (
                  <Loading />
              )}
          </div>

    </div>
  )
}

export default page