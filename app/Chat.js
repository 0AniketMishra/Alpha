import React from 'react'

const Chat = () => {
  return (
    <><div className='w-full my-4 bg-gray-900 rounded-xl lg:ml-10' >
      <div className='   mt-6 mx-auto rounded-xl xl:w-[98%] w-[92%] h-full'>

        <div>
          <div className='flex   items-center justify-between'>

            <div className="flex items-center space-x-2">
              <img src="https://www.wired.com/images_blogs/underwire/2011/05/dread_pirate_roberts_0.jpg" className="w-12 h-12 rounded-full" />

              <div className=''>
                <h1 className=' font-bold '>Mr. Dread Pirate Roberts</h1>
                
                <h1 className=' font-semibold text-sm text-gray-500'>The Owner</h1>

              </div>
            </div>


          </div>

          <div className="  h-[calc(100vh-15rem)] ">
            
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
          <div className=' flex  ml-2 items-end  justify-center '>
            <div className="flex items-center w-full ml-6 mr-6 ">
              <div className="flex space-x-2">
                <h1 >Hello</h1>
                <h1 >Hello</h1>
              </div>
              <input placeholder='Enter your message here' className='w-full outline-none border bg-gray-200 rounded-lg text-black p-2 ml-2 mr-2  scrollbar-hide ' />
              <h1>Hello</h1>

            </div>
          </div>
        </div>
      </div>

    </div>
    
   </>
      
 
 
  )
}

export default Chat