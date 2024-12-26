"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Router } from 'next/navigation';
import { auth } from '@/firebaseConfig';
import Sidebar from './Sidebar';
import Sidebarsm from './Sidebarsm';
import { useCart } from '../context/cartContext';

const Header = () => {
 

    const [sidebar,setSidebar] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [token,setToken] = useState(null)
    const { addToCart, cartItems } = useCart();
    const [loading,setLoading] = useState(true)
    const handleMouseEnter = () => { 
        setIsMenuOpen(true);
      }; 
      const handleMouseLeave = () => { // Delay hiding the menu
         setTimeout(() => { setIsMenuOpen(false); }, 1000); // Adjust the delay duration as needed 
       };

    const [darkMode, setDarkMode] = useState(false); 
    
    useEffect(() => { 
        // Check the user's preference in localStorage
         const savedTheme = localStorage.getItem('theme');
          if (savedTheme === 'dark') {
             document.documentElement.classList.add('dark');
              setDarkMode(true);
         } else {
           document.documentElement.classList.remove('dark');
           setDarkMode(false);
          }
      
    }, []); 
     
    useEffect(() => {
        const getTokenFromCookie = () => {
            const cookies = document.cookie.split('; ');
            const jwtCookie = cookies.find(cookie =>
                cookie.startsWith('sjwt='));
            if (jwtCookie) {
                return jwtCookie.split('=')[1];
            } return null;
        };
        const jwtToken = getTokenFromCookie();
        setToken(jwtToken)
        setLoading(false)
    },[])
        
        
  const logout = () => {
    console.log("logged out.")
  }    

 const toggleDarkMode = () => {
          if (darkMode) { 
              document.documentElement.classList.remove('dark');
              localStorage.setItem('theme', 'light');
              } else {
               document.documentElement.classList.add('dark');
               localStorage.setItem('theme', 'dark');
               }
               setDarkMode(!darkMode); 
};
         
    return (
        <nav className="fixed top-0 w-full z-50 shadow-sm bg-white dark:bg-def">
            {sidebar &&(
                <Sidebarsm/>
            ) }
            <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                       {!sidebar ? (
                            <svg onClick={() => sidebar ? setSidebar(false) : setSidebar(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 mr-4 lg:hidden text-black dark:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                       ) : (
                                <svg onClick={() => sidebar ? setSidebar(false) : setSidebar(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 mr-4 lg:hidden text-black dark:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                       )}

                        <span className="text-xl font-bold text-black dark:text-white">ShadowTrade</span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="text-black dark:text-white hover:text-indigo-600">Home</Link>

                        <Link href="/shop" className="text-black dark:text-white hover:text-indigo-600">Shop</Link>
                        
                         {!token && !loading && ( <Link href="/messages" className="text-black dark:text-white hover:text-indigo-600">Messages</Link>)}
                        {!token && !loading ? (
                            <Link href="/sell" className="text-black dark:text-white hover:text-indigo-600">Sell</Link>

                        ) : (
                                <Link href="/sellerdashboard" className="text-black dark:text-white hover:text-indigo-600">Dashboard</Link>
                        )}
                        <Link href="/community" className="text-black dark:text-white hover:text-indigo-600">Community</Link>
                       

                    </div>

                    <div className="flex items-center space-x-4 ">
                        <button onClick={toggleDarkMode} className="lg:p-2 p-1 dark:hover:bg-gray-800 hover:bg-defl rounded-full">
                            
                           {darkMode ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>

                           ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>

                           )}

                        </button>
                       
                            
                            
                         


                        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <button className="lg:p-2 p-1 hover:bg-defl dark:hover:bg-gray-800  rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 dark:text-white text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </button>
                              {isMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-def rounded-md shadow-lg transition-opacity duration-500" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                                    <div className="py-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                         <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-white">Item 1</a>
                                          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-white">Item 2</a>
                                          <a href="#" onClick={logout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-white">Logout</a> 
                                          </div> 
                                          </div>
                                        )} 
                                    </div>

                  
                       {!token && !loading &&(
                            <Link href="/cart" className="lg:p-2 p-1 dark:hover:bg-gray-800 hover:bg-defl rounded-full relative">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-black dark:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>

                                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full size-4 md:size-4 sm:size-4 flex items-center justify-center">{cartItems.length}</span>
                            </Link>
                       )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
