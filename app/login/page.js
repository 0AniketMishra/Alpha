"use client"
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebaseConfig';
import { useRouter } from 'next/navigation';
import Loading from '../components/Loading';


function Page() {
  
  const router = useRouter();
 const [loading, setLoading] = useState(true);
 const [token,setToken] = useState(null) 


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
    console.log('JWT Token:', jwtToken);
  setLoading(false)
  });


  if (token && !loading)
    router.push("/")

  return (
    <div>
      {!loading && token ==null ?
      (
      <div>
        <Header />
        <LoginForm/>
        </div>
      ):(<Loading/>)}
    </div>
  )
}

export default Page