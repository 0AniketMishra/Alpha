"use client"

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebaseConfig'
import Loading from '../components/Loading'




const Page = () => {
    
    const [items, setItemss] = useState([{ id: 1, quantity: 1,price: 10 }, { id: 2, quantity: 1, price: 20 }])
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(10)
    
    
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null)


   

    useEffect(() => { // Function to get JWT from cookies 

        const getTokenFromCookie = () => {
            const cookies = document.cookie.split('; ');
            const jwtCookie = cookies.find(cookie =>
                cookie.startsWith('jwt='));
            if (jwtCookie) {
                return jwtCookie.split('=')[1];
            } return null;
        };
        const jwtToken = getTokenFromCookie();
        setToken(jwtToken)
       
        setLoading(false)
    },[]);




    if (!token && !loading)
        router.push("/login")

    const increaseQuantity = (id) => {
        setItemss(prev => prev.map(i =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        ));
    };
    const decreaseQuantity = (id) => {
        setItemss(prev => prev.map(i =>
            i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        ));
    };
    useEffect(() => {
      let sum =0
        items.map(item => {
          sum = sum+item.quantity*item.price
     })
     setPrice(sum)


    }, [items]);

   
    const cartItems = [
        {
            id: 1,
            title: "Premium Wireless Headphones",
            price: 299.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
            quantity: 1,
            color: "Black",
            size: "Standard"
        },
        {
            id: 2,
            title: "Smart Watch Series 5",
            price: 399.99,
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
            quantity: 1,
            color: "Silver",
            size: "44mm"
        }
    ];

    const userDetails = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        address: {
            street: "123 Main St",
            city: "San Francisco",
            state: "CA",
            zip: "94105",
            country: "United States"
        },
        purchaseHistory: {
            totalOrders: 15,
            totalSpent: 2499.99,
            memberSince: "January 2023",
            status: "Gold Member"
        }
    };

    const deliveryOptions = [
        {
            id: 'standard',
            name: 'Standard Delivery',
            price: 9.99,
            duration: '3-5 business days',
            description: 'Delivered by our trusted shipping partners'
        },
        {
            id: 'express',
            name: 'Express Delivery',
            price: 19.99,
            duration: '1-2 business days',
            description: 'Fast delivery for urgent orders'
        },
        {
            id: 'same-day',
            name: 'Same Day Delivery',
            price: 29.99,
            duration: 'Today',
            description: 'Available for select locations'
        }
    ];


    const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0]);
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + selectedDelivery.price + tax;

    const estimatedDelivery = new Date();
    estimatedDelivery.setDate(estimatedDelivery.getDate() + 3);


    return (
       <div>
        {!loading && token ?(
                <div>
                    <Header />
                    <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Shopping Cart</h1>
                            <div className="text-sm text-gray-500">
                                <span className="font-medium text-indigo-600">{cartItems.length} items</span> in your cart
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex-1 space-y-8">
                                {/* Cart Items */}
                                <div className="bg-white dark:bg-def rounded-lg shadow">
                                    <div className="p-6 space-y-6">
                                        {cartItems.map(item => (
                                            <div key={item.id}>
                                             <div  className="flex items-center gap-6 pb-6 border-b dark:border-gray-700 last:border-0 last:pb-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-24 h-24 object-cover rounded-lg"
                                                />

                                                <div className="flex-1">
                                                    <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                                                    <div className="mt-1 text-sm text-gray-500 space-y-1">
                                                        <p>Color: {item.color}</p>
                                                        <p>Size: {item.size}</p>
                                                    </div>

                                                    <div className="mt-4 flex items-center gap-4">
                                                        <div className="flex items-center border rounded-lg">
                                                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-l-lg">

                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                                </svg>

                                                            </button>
                                                            <span className="w-12 text-center">{item.quantity}</span>
                                                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-lg">


                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                                </svg>

                                                            </button>
                                                        </div>
                                                        <button className="text-red-500 hover:text-red-600 dark:hover:text-red-400">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                            </svg>

                                                        </button>
                                                    </div>
                                                </div>

                                                    <div className="text-right mr-4">
                                                        <p className="lg:text-lg md:text-md sm:text-sm  font-medium text-gray-900 dark:text-white">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </p>
                                                        <p className="text-sm md:text-xm sm:text-xm text-gray-500">${item.price} each</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        ))}
                                    </div>
                                </div>

                                {/* Delivery Options */}
                                <div className="bg-white dark:bg-def rounded-lg shadow">
                                    <div className="p-6">
                                        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                                            Choose Delivery Method
                                        </h2>
                                        <div className="space-y-4">
                                            {deliveryOptions.map((option) => (
                                                <label
                                                    key={option.id}
                                                    className={`flex items-center p-4 border rounded-lg cursor-pointer ${selectedDelivery.id === option.id
                                                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                                                        : 'border-gray-200 dark:border-gray-700'
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="delivery"
                                                        value={option.id}
                                                        checked={selectedDelivery.id === option.id}
                                                        onChange={() => setSelectedDelivery(option)}
                                                        className="h-4 w-4 text-indigo-600"
                                                    />
                                                    <div className="ml-4 flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <p className="font-medium text-gray-900 dark:text-white">{option.name}</p>
                                                            <p className="text-gray-900 dark:text-white">${option.price}</p>
                                                        </div>
                                                        <p className="text-sm text-gray-500">{option.description}</p>
                                                        <p className="text-sm text-gray-500">Estimated delivery: {option.duration}</p>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* User Details */}
                                <div className="bg-white dark:bg-def rounded-lg shadow mb-24">
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Shipping Address</h2>
                                            <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                                                Edit
                                            </button>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">{userDetails.name}</p>
                                                    <p className="text-gray-500">{userDetails.phone}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm text-gray-500">{userDetails.purchaseHistory.status}</p>
                                                    <p className="text-sm text-gray-500">{userDetails.purchaseHistory.totalOrders} orders</p>
                                                </div>
                                            </div>

                                            <div className="border-t dark:border-gray-700 pt-4">
                                                <p className="text-gray-700 dark:text-gray-300">{userDetails.address.street}</p>
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    {userDetails.address.city}, {userDetails.address.state} {userDetails.address.zip}
                                                </p>
                                                <p className="text-gray-700 dark:text-gray-300">{userDetails.address.country}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="w-full lg:w-96">
                                <div className="bg-white dark:bg-def rounded-lg shadow p-6 sticky top-24">
                                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Order Summary</h2>

                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                                            <span className="text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                                            <span className="text-gray-900 dark:text-white">${selectedDelivery.price}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600 dark:text-gray-400">Tax</span>
                                            <span className="text-gray-900 dark:text-white">${tax.toFixed(2)}</span>
                                        </div>
                                        <div className="border-t dark:border-gray-700 pt-4">
                                            <div className="flex justify-between">
                                                <span className="text-base font-medium text-gray-900 dark:text-white">Total</span>
                                                <span className="text-base font-medium text-gray-900 dark:text-white">
                                                    ${total.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 space-y-4">
                                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                                </svg>

                                                <span>Estimated delivery by {estimatedDelivery.toLocaleDateString()}</span>
                                            </div>
                                        </div>

                                        <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 flex items-center justify-center">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                            </svg>

                                            Proceed to Checkout
                                        </button>

                                        <p className="text-xs text-center text-gray-500">
                                            By proceeding, you agree to our Terms of Service and Privacy Policy
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        ):(
    <Loading/>
        )}
       </div>
    )
}

export default Page
