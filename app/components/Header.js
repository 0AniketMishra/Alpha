"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Router } from 'next/navigation';
import { auth } from '@/firebaseConfig';
import Sidebar from './Sidebar';
import Sidebarsm from './Sidebarsm';

const Header = () => {
 

const [sidebar,setSidebar] = useState(false)

    const [isMenuOpen, setIsMenuOpen] = useState(false);
     const handleMouseEnter = () => { 
        setIsMenuOpen(true);
      }; 
      const handleMouseLeave = () => { // Delay hiding the menu
         setTimeout(() => { setIsMenuOpen(false); }, 1000); // Adjust the delay duration as needed 
         };
    return (
        <nav className="fixed top-0 w-full z-50 shadow-sm  bg-def">
            {sidebar &&(
                <Sidebarsm/>
            ) }
            <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                       {!sidebar ? (
                            <svg onClick={() => sidebar ? setSidebar(false) : setSidebar(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 mr-4 lg:hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                       ) : (
                                <svg onClick={() => sidebar ? setSidebar(false) : setSidebar(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 mr-4 lg:hidden">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                       )}

                        <span className="text-xl font-bold text-white">ShadowTrade</span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-indigo-600">Home</Link>

                        <Link href="/shop" className="text-white hover:text-indigo-600">Shop</Link>
                        
                        <Link href="/messages" className="text-white hover:text-indigo-600">Messages</Link>
                        <Link href="/community" className="text-white hover:text-indigo-600">Community</Link>
                       

                    </div>

                    <div className="flex items-center space-x-4 ">
                        <button className="lg:p-2 p-1 hover:bg-gray-800 rounded-full">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </button>
                       
                            
                            
                         


                        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <button className="lg:p-2 p-1 hover:bg-gray-800 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5 text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </button>
                              {isMenuOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-opacity duration-500" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                                    <div className="py-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                         <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 1</a>
                                          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 2</a>
                                          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 3</a> 
                                          </div> 
                                          </div>
                                        )} 
                                    </div>

                  
                        <Link href="/cart" className="lg:p-2 p-1 hover:bg-gray-800 rounded-full relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full size-4 md:size-4 sm:size-4 flex items-center justify-center">3</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
