"use client"
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebaseConfig';
import { useRouter } from 'next/navigation';
import Loading from '../components/Loading';
import SellerLogin from '../components/SellerLogin';


function Page() {
  
  const router = useRouter();
 const [loading, setLoading] = useState(true);
 const [token,setToken] = useState(null) 
 const [tab, setTab] = useState("Buyer")


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
      <div className='bg-black'>
        <Header />
        {/* <LoginForm/> */}
        <div className='text-white justify-center items-center h-screen flex'>
         <div className=''>
          <div className='max-w-[92%] mx-auto lg:max-w-md   w-full flex justify-evenly bg-def h-12 ml-4 rounded-xl  py-1 px-2'>
          
           <button onClick={() => setTab("Buyer")} className={`w-full rounded-xl ${tab == "Buyer" ? 'bg-orange-600 ' : ""}`}><h1>Buyer Login</h1></button> 
           <button onClick={() => setTab("Seller")} className={`w-full rounded-xl ${tab == "Seller" ? 'bg-orange-600  ' : ""}`}><h1>Seller Login</h1></button>  
          </div> 
          {tab == "Buyer" ? (
            <LoginForm/>
          ) : (
            <SellerLogin/>
          )}
          </div>          
        </div>
        </div>
      ):(<Loading/>)}
    </div>
  )
}

export default Page