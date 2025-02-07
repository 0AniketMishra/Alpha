"use client"
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import { auth } from '@/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Grid from '../components/Grid'
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'


function Page() {

 
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedSort, setSelectedSort] = useState('Newest');
    const [showFilters, setShowFilters] = useState(false);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null)
    const [prompt,setPrompt] = useState(false)


    const notify = () => toast('❗ Sellers can only view listings but cannot buy them.',{className:"mt-16 px-6 dark:bg-def text-black dark:text-white", position: "top-center"});



    useEffect(() => { // Function to get JWT from cookies 

        const getTokenFromCookie = () => {
            const cookies = document.cookie.split('; ');
            const jwtCookie = cookies.find(cookie =>
                cookie.startsWith('jwt='));
            const jwtCookie2 = cookies.find(cookie =>
                cookie.startsWith('sjwt='));
            if (jwtCookie ) {
                return jwtCookie.split('=')[1];
            }
            if(jwtCookie2){
                setPrompt(true)
                return jwtCookie2.split('='[1]);
               
            }
            return null;
        };
        const jwtToken = getTokenFromCookie();
        setToken(jwtToken)
        setLoading(false);
    
    },[]);

    useEffect(() => {
        if(prompt)
            notify()
    },[prompt])


    const categories = ['All', 'Electronics', 'Fashion', 'Home & Living', 'Sports'];
    const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Most Popular'];

    const products = [
        // Previous featuredProducts array plus more products...
        {
            id: 5,
            title: "Professional Camera",
            price: 899.99,
            rating: 5,
            reviews: 324,
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
            description: "Professional DSLR camera with advanced features for photography enthusiasts.",
            stock: 5,
            badge: "limited" 
        },
        // Add more products...
    ];


    if (!token && !loading)
        router.push("/login")


  return (
      <div className='dark:bg-gradient-to-br bg-gray-100 dark:from-black dark:to-[#0E0E0E] min-h-screen'>
          <div>
              {!loading && token ? (
                  <div className=''>
                      <Header />
                      <Toaster/>
                      <div className="md:pt-32 pt-24 px-2 h-full sm:px-6 lg:px-8 max-w-custom mx-auto">
                          <div className="flex flex-col md:flex-row md:items-center px-2 lg:px-0 md:justify-between py-4 ">

                              {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Shop All Products</h1> */}


                             <div className="flex items-center space-x-4 mb-4 lg:mb-0 md:mt-0">
                                  <button
                                      onClick={() => setShowFilters(!showFilters)}
                                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-600"
                                  >
                             
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 dark:text-white text-black">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                      </svg>

                                      <span className='text-black dark:text-white'>Filters</span>
                                  </button>
                                 
                                  <div className="relative">
                                      <select
                                          value={selectedSort}
                                          onChange={(e) => setSelectedSort(e.target.value)}
                                          className="appearance-none px-4 text-black dark:text-white py-2 border border-gray-300 rounded-lg pr-8 outline-none dark:bg-gray-800 dark:border-gray-600"
                                      >
                                          {sortOptions.map(option => (
                                              <option key={option} value={option} className='text-black dark:text-white'>{option}</option>
                                          ))}
                                      </select>
                                  
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                      </svg>

                                  </div>
                              </div>



                              
                          </div>

                          <div className="flex  flex-col md:flex-row gap-8">
                            {showFilters &&(
                                  <Sidebar />
                            )}

                              <div className="flex-1">
                               
                                     <Grid/>

                              </div>
                          </div>
                      </div>
                      <Footer />

                  </div>
              ) : (
                  <Loading />
              )}
          </div>

    </div>
  )
}

export default Page