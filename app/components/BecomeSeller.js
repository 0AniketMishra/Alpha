import React from 'react'

function BecomeSeller() {
  return (
     <div>
          <section className="text-gray-400 lg:ml-[18rem] bg-black body-font ">
              <div className="container mx-auto flex px-5 lg:py-24 py-32 md:flex-row flex-col items-center" bis_skin_checked="1">
                  <div className="lg:max-w-lg lg:w-full md:mb-0 mb-10" bis_skin_checked="1">
                      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left  " bis_skin_checked="1">
                      <h1 className="title-font flex sm:text-4xl text-3xl  font-medium text-white">Become a Seller</h1>
                          
                      <div className='flex'>
                          <h1 className="title-font flex sm:text-4xl text-3xl mb-4 font-medium text-white">Serve the </h1>
                          <h1 className="title-font flex ml-2 sm:text-4xl text-3xl mb-4 font-medium text-green-500 text-white">Community</h1>
                      </div>

                          
                    
                      <p className="mb-8 leading-relaxed">Join our vibrant marketplace and turn your passion into profit. Whether you are a seasoned entrepreneur or just starting out, we provide the tools, support, and community you need to grow your business. Start selling today and reach a global audience eager to discover what you have to offer!</p>
                      <div className="" bis_skin_checked="1">
                          <button class="group relative h-10 px-5 overflow-hidden rounded-lg bg-green-600 text-lg font-bold text-white">
                              Become a seller
                              <div class="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                          </button>
                      </div>
                  </div>
              </div>
          </section>
     </div>
  )
}

export default BecomeSeller