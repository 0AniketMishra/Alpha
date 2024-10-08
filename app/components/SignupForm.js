"use client"
import { db,auth } from '@/firebaseConfig';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import Link from 'next/link'
import React, { useState } from 'react'


function SignupForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    async function addNewUser(username,password, email){
        try{
            const userCredential = await createUserWithEmailAndPassword(
                 auth,
                 email, 
                 password,
                
            )
            const docRef = await addDoc(collection(db,"users"),{
                username: username, 
                password: password,
                email: email,
            }) 
              console.log("User Registered Successfully")
              return(true)
        } catch (error) {
            console.error(error);
        }
    }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const added = await addNewUser(username, password, email)
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
                                Create an Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupForm



