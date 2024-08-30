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




const Home = () => {

  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  
  if (!user && !loading) 
    router.push("/login")
  
  return (

<div>
      {!loading && user? (
        <div>
          <Header />

          <div className='container mx-auto max-w-custom px-4 lg:px-2 py-8 flex '>
            <Sidebar/>
            <Grid />
          </div>
        </div>
      ):(
          <Loading/>
)}
</div>
  )
}

export default Home