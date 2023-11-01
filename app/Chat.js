import React from 'react'

const Chat = () => {
  return (
    <><div className='w-full'>
      <div className='bg-white  border border-white hidden lg:block mt-6 mx-auto rounded-xl mr-4 xl:w-[98%] lg:w-[92%] h-full'>

        <div>
          <div className='flex  p-2  items-center justify-between'>

            <div className="flex items-center space-x-2">
              <img src="https://daily-dev-tips.com/images/25-06-2021.jpg" className="w-8 h-8 rounded-full" />
              <span className=' font-bold '>Human Name</span>
            </div>


          </div>

          <div className=" overflow-y-scroll scroll-auto  scrollbar-hide h-[calc(100vh-15rem)] mb-4">

            <div>

              <div className="mt-2">

                <div className=" flex justify-end ">
                  <h1 className='w-fit p-1 rounded-xl max-w-[50%] pl-2 pr-2 text-white font-bold  mr-4 mt-2 bg-blue-800   '>This is a message</h1>
                </div>

              </div>

            </div>


          </div>



        </div>
        <div className="">
          <div className=' mb-6 flex  ml-2 items-end  justify-center '>
            <div className="flex items-center w-full ml-6 mr-6 ">
              <div className="flex space-x-2">
                <h1>Hello</h1>
                <h1>Hello</h1>
              </div>
              <input placeholder='Enter your message here' className='w-full outline-none border bg-gray-200 rounded-lg text-black p-2 ml-2 mr-2 h-10 scrollbar-hide ' />
              <h1>Hello</h1>

            </div>
          </div>
        </div>
      </div>



    </div><div className='lg:hidden border border-white mt-6 mr-4 rounded-xl  ml-4 h-full bg-white'>
        <div className='flex p-2  items-center justify-between'>

          <div className="flex items-center space-x-2">
            <h1>Hello</h1>

            <img src="https://daily-dev-tips.com/images/25-06-2021.jpg" className="w-8 h-8 rounded-full" />
            <span className=' font-bold '></span>
          </div>


        </div>

        <div className=" overflow-y-scroll scrollbar-hide h-[68vh]">




          <div  className="">
         
              <div >
                <div className=" flex justify-end ">
                  <h1 className='w-fit p-1 rounded-xl max-w-[50%] pl-2 pr-2 text-white font-bold  mr-4 mt-2 bg-blue-800   '>Message</h1>
                </div>
              </div>

              


          </div>






        </div>
        <div className="">
          <div className=' mb-6 flex  items-end  justify-center '>
            <div className="flex items-center w-full ml-4 mr-4 ">
              <div className="flex space-x-2">
                <h1>Hello</h1>
                <h1>Hello</h1>

              </div>
              <input placeholder='Enter your message here' className='w-full outline-none border bg-gray-200 rounded-lg text-black p-2 ml-2 mr-2 h-10 scrollbar-hide ' />
              <h1>Hello</h1>

            </div>
          </div>
        </div>
      </div></>
      
 
 
  )
}

export default Chat