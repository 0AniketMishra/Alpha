import React from 'react'

const ChatSidebar = () => {
  return (
    <div>
          <div className="h-screen py-8 overflow-y-auto bg-transparent   sm:w-64 w-60 ">
              <h1 className="text-xl font-medium text-gray-800 dark:text-white">Chats</h1>

              <div className="mt-4 space-y-4">
                  <button className="flex items-center w-full pr-1 pl-1 pt-3 pb-3 hover:bg-gray-600 rounded-md transition-colors duration-200  gap-x-2  focus:outline-none">
                      <img className="object-cover w-12 h-12 rounded-full" src="https://www.wired.com/images_blogs/underwire/2011/05/dread_pirate_roberts_0.jpg" alt=""/>

                          <div className="text-left rtl:text-right">
                              <h1 className="text-md font-medium  capitalize text-white">Mr. Dread Pirate Roberts</h1>

                              <p className="text-xs text-gray-500 dark:text-gray-400">The Owner</p>
                          </div>
                  </button>

                 
              </div>
          </div>
    </div>

  )
}

export default ChatSidebar