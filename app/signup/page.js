"use client"
import React from 'react'
import Header from '../components/Header'
import SignupForm from '../components/SignupForm'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebaseConfig';
import { useRouter } from 'next/navigation';
import Loading from '../components/Loading';

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
            <SignupForm />
          </div>
        ) : (<Loading/>)}
    </div>
  )
}

export default Page