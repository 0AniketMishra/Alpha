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




const Home = () => {

  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  
  if (!user && !loading) 
    router.push("/login")
  
  return (

<div>

    <Header/>
<Hero/>
</div>
  )
}

export default Home