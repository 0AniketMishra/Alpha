"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'next-view-transitions';
import { usePathname, useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Router } from 'next/navigation';
import { auth } from '@/firebaseConfig';
import Sidebar from './Sidebar';
import Sidebarsm from './Sidebarsm';
import { useCart } from '../context/cartContext';
import { ThemeContext } from '../context/themeContext';
import { DollarSign, Gift, Headphones, Heart, Menu, MessageSquare, Moon, Search, ShoppingBag, ShoppingCart, Sun, Tag, Truck, Users, X, Zap } from 'lucide-react';

const Header = () => {
 

    const [sidebar,setSidebar] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [token,setToken] = useState(null)
    const { addToCart, cartItems } = useCart();
    const [loading,setLoading] = useState(true)
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [token2, setToken2] = useState(null)   

   const navLinks = [
    { href: 'shop', icon: ShoppingBag, label: 'Shop' },
    { href: 'Sell', icon: DollarSign, label: 'Become Seller' },
    { href: 'deals', icon: Heart, label: 'Deals' },
    { href: 'shipping', icon: Truck, label: 'Shipping' },
    { href: 'forum', icon: MessageSquare, label: 'Forum' },
    { href: 'support', icon: Headphones, label: 'Support' },
    { href: 'login', icon: Users, label: 'Login/Signup' },
  ]

  
     
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

    useEffect(() => {
        const getTokenFromCookie = () => {
            const cookies = document.cookie.split('; ');
            const jwtCookie = cookies.find(cookie =>
                cookie.startsWith('jwt='));
            if (jwtCookie) {
                return jwtCookie.split('=')[1];
            } return null;
        };
        const jwtToken = getTokenFromCookie();
        setToken2(jwtToken)
        setLoading(false)
    }, [])
        
        
  const logout = () => {
    console.log("logged out.")
  }    

 
         
    return (
        <header className="fixed w-full z-50 bg-white dark:bg-def border-b border-orange-100 dark:border-orange-900 shadow-sm">
            <div className="max-w-custom mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setSidebar(true)}
                        className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400"
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/"  className="flex items-center">
                            
                            <span className="ml-2 text-xl font-bold text-black dark:text-white">Shadow Trade</span>
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                         focus:outline-none focus:border-orange-500 dark:focus:border-orange-400"
                            />
                            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        </div>
                    </div>

                    {/* Cart icon */}
                    <div className="flex items-center space-x-2">
                        <Link href="/cart" className="p-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 rounded-full hover:bg-orange-50 dark:hover:bg-orange-900/20">
                            <ShoppingCart className="h-5 w-5" />
                        </Link>
                        <button className="flex p-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 rounded-full hover:bg-orange-50 dark:hover:bg-orange-900/20">
                            {theme == "light" ? (
                                <Sun className="h-5 w-5" onClick={toggleTheme}/>

                            ):(
                                <Moon className="h-5 w-5" onClick={toggleTheme}/>

                            )}
                        
                        </button>
                    </div>
                </div>
            </div>

            {/* Secondary Navigation */}
            <div className="hidden md:block bg-orange-50 dark:bg-orange-900/20">
                <div className="max-w-custom mx-auto px-4 sm:px-6">
                    <nav className="flex items-center justify-between h-10 text-sm">
                        <div className="flex space-x-8">
                            {navLinks.slice(0, 4).map((link) => (
                                <Link
                                    key={link.href}
                                    href={`/${link.href}`}
                                    
                                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 flex items-center space-x-1"
                                >
                                    <link.icon className="h-4 w-4" />
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="flex space-x-8">
                            {navLinks.slice(4).map((link) => (
                                <Link
                                    key={link.href}
                                    href={`/${link.href}`}
                                    
                                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 flex items-center space-x-1"
                                >
                                    <link.icon className="h-4 w-4" />
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {sidebar && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50"
                        onClick={() => setSidebar(false)}
                    />

                    {/* Sidebar */}
                    <div className={`fixed inset-y-0 left-0 w-[70%] bg-white dark:bg-def shadow-xl ${ sidebar ? 'animate-slideIn' : 'animate-slideOut'} translate-x-0 `}>
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center ">
                            <div className="flex items-center">
                                
                                <span className="ml-2 font-bold text-black dark:text-white">Shadow Trade</span>
                            </div>
                            <button
                                onClick={() => setSidebar(false)}
                                className="p-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Mobile Search */}
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700 ">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-200 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                           focus:outline-none focus:border-orange-500 dark:focus:border-orange-400"
                                />
                                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <nav className="p-4">
                            {navLinks.map((link) => (
                                <Link
                                    onClick={() => setSidebar(false)}
                                    key={link.href}
                                    href={`/${link.href}`}
                                    className="flex items-center space-x-2 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg"
                                >
                                    <link.icon className="h-5 w-5" />
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>

    )
}

export default Header
