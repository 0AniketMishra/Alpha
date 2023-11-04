import React from 'react'

const Chat = () => {
  const sents = [{id: 1,message: "Hey, I had a query about the cocaine that you are selling. I hope you people are not running any kind of scam! Though I trust this website but still "} , {id: 2, message: "Is it columbian?"}]
  return (
    <div className='scrollbar-hide'>
    
    <div className='w-full my-4 rounded-xl lg:ml-10 ' >
      <div className='   mt-6 mx-auto rounded-xl xl:w-[98%] w-[96%] '>

        <div>



          <div className='flex  p-2  items-center'>

              <div className="flex justify-between w-full ">

              <div className='flex items-center space-x-2'>
                <img src="https://www.wired.com/images_blogs/underwire/2011/05/dread_pirate_roberts_0.jpg" className="w-12 h-12 rounded-full" />

                <div className=''>
                  <h1 className=' font-bold '>Mr. Dread Pirate Roberts</h1>
                  <h1 className=' font-semibold text-sm text-gray-500'>The Owner</h1>
                </div>

              </div>
              
             
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>

            </div>


          </div>

          <div className=" overflow-y-scroll scroll-auto h-[calc(100vh-16rem)] scrollbar-hide ">
            
            <div>

              <div className="mt-2">

               {sents.map(sent => {
                return(
                  <div key={sents.id} className=" flex justify-end m-3 ">

                    <div
                      className="relative mr-3 text-black text-base max-w-[80%] lg:max-w-[60%]  bg-indigo-100 py-2 px-4 shadow rounded-lg">
                      <h1 className='font-medium  w-full'>{sent.message}</h1>
                    </div>
                  
                  </div>
                )
               })}

              </div>

            </div>


          </div>



        </div>
       
          <div className=' flex  items-end  justify-center '>
            <div className="flex items-center w-full ">
              <div className="flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                </svg>

              </div>

              <input placeholder='Enter your message here' className='w-full text-white outline-none  bg-gray-900 rounded-lg  p-2 ml-2 mr-2  ' />

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-10 h-10 lg:w-8 lg:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>


            </div>
          </div>
        
      </div>

    </div>
    
   </div>
      
 
 
  )
}

export default Chat