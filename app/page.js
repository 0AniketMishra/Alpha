"use client"
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Grid from './components/Grid'
import { useRouter } from 'next/navigation'
import { auth } from '@/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import LoginForm from './components/LoginForm'
import Loading from './components/Loading'
import Hero from './components/Hero'
import { useEffect, useState } from 'react'




const Home = () => {

  
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null)





  
  return (

<div>

    <Header/>
<Hero/>
</div>
  )
}

export default Home