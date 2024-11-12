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


    return (
        <nav className="fixed top-0 w-full z-50 shadow-sm  bg-gray-900">
            {sidebar &&(
                <Sidebarsm/>
            ) }
            <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <svg onClick={() => sidebar ? setSidebar(false) : setSidebar(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 mr-4 lg:hidden">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <span className="text-2xl font-bold text-indigo-400">ShadowTrade</span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-indigo-600">Home</Link>

                        <Link href="/shop" className="text-white hover:text-indigo-600">Shop</Link>
                        
                        <Link href="/messages" className="text-white hover:text-indigo-600">Messages</Link>
                        <a href="#" className="text-white hover:text-indigo-600">About</a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-gray-800 rounded-full">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </button>
                        <button className="p-2 hover:bg-gray-800 rounded-full">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                        </button>
                        <Link href="/cart" className="p-2 hover:bg-gray-800 rounded-full relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full size-6 flex items-center justify-center">3</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
