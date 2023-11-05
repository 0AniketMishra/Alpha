import React, { useState } from 'react'

const Item = ({info}) => {
    
    const [show,setShow] = useState(false)
  return (
    <div>
          <section className="text-white body-font "> 
              <div className="container py-4 px-4 mx-auto" bis_skin_checked="1">
                  <div className="  flex flex-wrap" bis_skin_checked="1">
                      <img alt="ecommerce" className="lg:w-2/5 w-full  object-cover object-center rounded-lg" src={info.image}/>
                          <div className="lg:w-3/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" bis_skin_checked="1">
                              <h2 className="text-sm title-font text-gray-200 tracking-widest">BRAND NAME</h2>
                          <h1 className="text-white text-3xl title-font font-medium mb-1">{info.title}</h1>
                              <div className="flex mb-4" bis_skin_checked="1">
                                  <span className="flex items-center">
                                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                      </svg>
                                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                      </svg>
                                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                      </svg>
                                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                      </svg>
                                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                      </svg>
                                      <span className="text-gray-200 ml-3">{info.reviews} Reviews</span>
                                  </span>
                                  <span className="flex ml-4 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                      <a className="text-white">
                                          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                          </svg>
                                      </a>
                                      <a className="text-white">
                                          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                          </svg>
                                      </a>
                                      <a className="text-white">
                                          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                          </svg>
                                      </a>
                                  </span>
                              </div>
                          <div className="flex items-center mb-6" bis_skin_checked="1">
                              <span className="title-font font-medium text-2xl ">$58.00</span>
                             
                              <button className="rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center text-white ml-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                  </svg>

                              </button>
                          </div>

                              <div>
                              {show==false &&(
                                <div>
                                      <p className="leading-relaxed max-h-40 line-clamp-4 ">{info.description}</p>
                                      <p onClick={() => setShow(true)} className="leading-relaxed max-h-40 text-blue-400 ">Read More.</p>
                                </div>
                              )}
                              {show==true &&(
                                <div>
                                      <p className="leading-relaxed ">{info.description}</p>
                                      <p onClick={() => setShow(false)} className="leading-relaxed text-blue-400 ">Read Less.</p>
                                </div>
                              )}
                              </div>


                              <div className="flex mt-6 items-center pb-2  mb-2" bis_skin_checked="1">
                                  <div className="flex" bis_skin_checked="1">
                                      <span className="mr-3">Color</span>
                                      <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                      <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                      <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                  </div>
                                  <div className="flex ml-6 items-center" bis_skin_checked="1">
                                      <span className="mr-3">Size</span>
                                      <div className="relative" bis_skin_checked="1">
                                          <select className="rounded border text-black appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                              <option>SM</option>
                                              <option>M</option>
                                              <option>L</option>
                                              <option>XL</option>
                                          </select>
                                          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                  <path d="M6 9l6 6 6-6"></path>
                                              </svg>
                                          </span>
                                      </div>
                                      
                                  </div>
                               
                              </div>
                              <div className='flex-row items-center'>
                              <button class="group relative h-10 w-40 overflow-hidden rounded-xl bg-green-500 text-lg font-bold text-white">
                                  Buy Now
                                  <div class="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                              </button>
                              
                              <button class="group relative ml-4 h-10 w-40 overflow-hidden rounded-xl bg-yellow-500 text-lg font-bold text-white">
                                  Add to Cart
                                  <div class="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                              </button>
                              </div>
                          </div>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Item