"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { db, auth } from '@/firebaseConfig';
import { useRouter } from 'next/navigation';



function LoginForm() {
    const [password, setPassword] = useState("")
    const [username, setusername] = useState("")
    const router = useRouter()


    const [token, setToken] = useState(null);
    const [err,setErr] = useState(false)
    const [processing,setProcessing] = useState(false); 



    



    async function login(username, password) {
        try {
            const response = await fetch('https://alpha-backend-v7bb.vercel.app/login', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                 credentials: 'include' 
                });
                
                  const data = await response.json()

            
                   const status = response.status
                
                      document.cookie = `jwt=${data.token}; path=/`;

            if (status == 200){
                router.push('/shop')
            }
            
                } catch (error) {
                 
         }

         setProcessing(false)
        if(token!=null)
            router.push("/")
        }
    
    
    
    const handleSubmit = async (e) => {
        setProcessing(true)
        e.preventDefault();
        const added = await login(username, password)
        if (added) {
            setPassword("")
            setusername("")
        }
    }


  


    return (
        <div className='bg-defl dark:bg-black h-screen'>


            <div className="mx-auto px-4 py-[20vh] sm:px-6 lg:px-4 flex h-full  w-full" >
                {/* <div className="hidden lg:w-1/2 lg:flex mx-8">
                    <img alt="ecommerce" layout="fill" className=" object-fill w-full h-[30rem] rounded-lg" src="https://quotefancy.com/media/wallpaper/3840x2160/1246546-Colleen-Houck-Quote-Bad-things-sometimes-happen-to-good-people-the.jpg" />
                </div> */}
                <div className=' mx-auto' >


                    <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4 bg-white dark:bg-def rounded-lg p-8">
                        <div className="">
                            <h1 className="text-2xl text-black dark:text-white font-bold sm:text-3xl">Login</h1>

                            <p className="mt-4 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                                ipsa culpa autem, at itaque nostrum!
                            </p>
                        </div>
                        <div>
                            <label  className="sr-only">Username</label>

                            <div className="relative">
                                <input
                                    type="username"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-black outline-none shadow-sm"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setusername(e.target.value)}
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


                            <Link href="/signup" className="mr-auto md:w-48 flex-shrink-0">

                                <h1 className="underline text-sm text-gray-500">No account?Sign Up</h1>
                            </Link>


                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white w-[25%]"
                                onClick={handleSubmit}
                            >
                                

                                {processing ? (
                                    <div className='inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'>
                                        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>asdf</span>
                                    </div>
                                ): (
                                      <h1>Login</h1>
                                )}
                            </button>

                        </div>
{err &&(
                            <h1 className='text-red-900 '>Incorrect Username or Password</h1>

)}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm



