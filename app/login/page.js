"use client"
import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebaseConfig';
import { useRouter } from 'next/navigation';


function Page() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();


  if (user && !loading)
    router.push("/")

  return (
    <div>
      {!loading && !user ? 
      (
      <div>
        <Header />
        <LoginForm/>
        </div>
      ):(<div>Loading....</div>)}
    </div>
  )
}

export default Page