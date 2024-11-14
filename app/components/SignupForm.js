"use client"
import { db,auth } from '@/firebaseConfig';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


function SignupForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [processing, setProcessing] = useState(false); 

    const router = useRouter()


    async function addNewUser(username,password){
        setProcessing(true)
        try{
            const response = await fetch('https://alpha-backend-v7bb.vercel.app/register', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include'
            });
            const data = await response
            console.log(data)
            if(response.status==201)
                router.push('/login');


        } catch (error) {
            console.error(error);
        }
        setProcessing(false)
    }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const added = await addNewUser(username, password)
    if(added){
      setUsername("")
      setPassword("")
      setEmail("")
    }
  }
    return (
        <div>


            <div className="mx-auto max-w-screen-xl px-4 py-[15vh] sm:px-6 lg:px-4 flex h-full  w-full" >

                <div className="hidden lg:w-1/2 lg:flex mx-8">
                    <img alt="ecommerce" layout="fill" className=" object-fill w-full h-[30rem] rounded-lg" src="https://quotefancy.com/media/wallpaper/3840x2160/1246546-Colleen-Houck-Quote-Bad-things-sometimes-happen-to-good-people-the.jpg" />

                </div>
                <div className='mx-auto'>


                    <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div className="  max-w-lg ">
                            <h1 className="text-2xl font-bold sm:text-3xl">Sign Up</h1>

                            <p className="mt-4 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                                ipsa culpa autem, at itaque nostrum!
                            </p>
                        </div>
                        <div>
                            <label className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-black outline-none shadow-sm"
                                    placeholder="Enter Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}

                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>


                            <div>
                                <label htmlFor="email" className="sr-only">Password</label>
                             <div htmlFor="email" className="relative">
                                <input
                                    
                                    className="w-full mt-4 rounded-lg border-gray-200 p-4 pe-12 text-black outline-none shadow-sm"
                                    placeholder="Enter Your Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}

                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                            </div>



                            
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 outline-none p-4 pe-12 text-black shadow-sm"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            
                                <Link href="/login" className="mr-auto w-1/2 flex-shrink-0">

                                <h1 className="underline text-sm text-gray-500">Already Have an account? Login</h1>
                                </Link>
                                
                        

                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                                onClick={handleSubmit}
                            >
                                {processing ? (
                                    <div className='inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'>
                                        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>asdf</span>
                                    </div>
                                ) : (
                                    <h1>Signup</h1>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupForm



