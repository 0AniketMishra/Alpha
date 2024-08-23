"use client"
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Grid from './components/Grid'
import { useRouter } from 'next/navigation'
import { auth } from '@/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
import approval from "../hooks/useUserState"
import useFetch from '../hooks/useUserState'

export default function Home() {

const approval = useFetch();
  
  return (

    
    <div>

   {approval ==2 ? (
      <div>
          <Header />

          <div className='container mx-auto px-4 lg:px-2 py-4 flex '>
            <Sidebar />
            <Grid />
          </div>
      </div>
   ):(
    <h1>Loading....</h1>
   )}
    </div>
 
   
  )
}
