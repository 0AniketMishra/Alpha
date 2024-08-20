import { PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'

const ChatSidebar = () => {
    return (
        <div className='hidden lg:flex 2xl:flex bg-gray-900 h-[calc(100vh-9rem)] p-5 rounded-xl'>
            <div className="h-screen py-2 overflow-y-auto bg-transparent   sm:w-64 w-60 ">
                <div className="flex  items-center">
                    <h1 className="text-xl font-medium  dark:text-white">Chats</h1>
                    <h1 className="w-full"></h1>
                    <PlusIcon className='w-7 h-7'/>

                </div>

                <div className="mt-4 space-y-3">
                    <button className="flex items-center w-full   pt-3 pb-3  transition-colors duration-200  gap-x-2  focus:outline-none">
                        <img className="object-cover w-12 h-12 rounded-full" src="https://th.bing.com/th/id/OIP.FiJdvPQph0OnVlNf8AdKOwAAAA?rs=1&pid=ImgDetMain" alt="" />

                        <div className="text-left rtl:text-right">
                            <h1 className="text-md font-medium  capitalize text-white">Mr. Dread Pirate Roberts</h1>

                            <p className="text-xs text-gray-500 dark:text-gray-400">The Owner</p>
                        </div>
                    </button>
                    <button className="flex items-center w-full pr-1  pt-3 pb-3 rounded-lg transition-colors duration-200  gap-x-2  focus:outline-none">
                        <img className="object-cover w-12 h-12 rounded-full" src="https://th.bing.com/th/id/OIP.FiJdvPQph0OnVlNf8AdKOwAAAA?rs=1&pid=ImgDetMain" alt="" />

                        <div className="text-left rtl:text-right">
                            <h1 className="text-md font-medium  capitalize text-white">Cartel Dealer</h1>

                            <p className="text-xs text-gray-500 dark:text-gray-400">Seller</p>
                        </div>
                    </button>
                    <button className="flex items-center w-full pr-1  pt-3 pb-3  rounded-lg transition-colors duration-200  gap-x-2  focus:outline-none">
                        <img className="object-cover w-12 h-12 rounded-full" src="https://th.bing.com/th/id/OIP.FiJdvPQph0OnVlNf8AdKOwAAAA?rs=1&pid=ImgDetMain" alt="" />

                        <div className="text-left rtl:text-right">
                            <h1 className="text-md font-medium  capitalize text-white">Shadow Trade Support</h1>

                            <p className="text-xs text-gray-500 dark:text-gray-400">Support Team.</p>
                        </div>
                    </button>


                </div>
            </div>
        </div>

    )
}

export default ChatSidebar
