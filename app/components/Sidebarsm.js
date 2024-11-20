import React from 'react'
import { db, auth } from '@/firebaseConfig';
import { signOut } from 'firebase/auth';
import Link from 'next/link';

const Sidebarsm = () => {
    async function logout() {
        await signOut(auth)
    }
    return (
        <div className="fixed bg-def z-1 top-16  h-full animate-slideIn  w-full max-w-[20rem] pr-0 pl-4 pt-2 pb-2  ">
            <div className="mb-2 p-2 mt-8">
                {/* <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white">Shop By Category</h5> */}
            </div>
            <nav className="flex flex-col gap-3    text-white">
                <Link href="/" tabindex="0" className="flex items-center w-[90%] p-3 rounded-lg text-start leading-tight transition-all hover:bg-gray-900 outline-none ">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>


                    </div>
                    <h1 className='text-lg'>Home</h1>
                </Link>
                <Link href="/shop" tabindex="0" className="flex items-center w-[90%] p-3 rounded-lg text-start leading-tight transition-all hover:bg-gray-900 outline-none ">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                       

                    </div>
                    <h1 className='text-lg'>Shop</h1>
                </Link>
                <Link href="/messages" role="button" tabindex="0" className="flex items-center w-[90%] p-3 rounded-lg text-start leading-tight transition-all hover:bg-gray-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>


                    </div>Messages
                </Link>
                <Link href="/community" role="button" tabindex="0" className="flex items-center w-[90%] p-3 rounded-lg text-start leading-tight transition-all hover:bg-gray-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>



                    </div>Community
                </Link>
                <div role="button" tabindex="0" className="flex items-center w-[90%] p-3 rounded-lg text-start leading-tight transition-all hover:bg-gray-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>

                    </div>Notifications <div className="grid place-items-center ml-auto justify-self-end">
                        <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500 text-white py-1 px-2 text-xs rounded-full" >
                            <span className="">14</span>
                        </div>
                    </div>
                </div>
                <Link href="/sellerdashboard" role="button" tabindex="0" className="flex items-center w-[90%] p-3 rounded-lg text-start leading-tight transition-all hover:bg-gray-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>


                    </div>Seller Dashboard
                </Link>
                <div role="button" tabindex="0" className="flex items-center w-[90%] p-3 rounded-lg text-start leading-tight transition-all hover:bg-gray-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                        </svg>

                    </div>Settings
                </div>
                <div onClick={() => logout()} role="button" tabindex="0" className="flex items-center w-[90%] p-3 rounded-lg text-start leading-tight transition-all hover:bg-gray-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </div>Log Out
                </div>
            </nav>
        </div>

    )
}

export default Sidebarsm
