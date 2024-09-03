"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function SellerForm() {

  const [isOptionSelected, setIsOptionSelected] = useState(true);

  const handleSelectChange = (event) => {
    if (event.target.value === 'yes') {
      setIsOptionSelected(true);
    } else {
      setIsOptionSelected(false);
    }
  };


  return (
    <div>

      <div className=" mx-auto container px-4 sm:px-6 lg:px-4 flex h-full  " >
        <div className="  lg:mx-8 w-full  max-w-[45rem]">
          {/* <img alt="ecommerce" layout="fill" className=" object-fill w-full h-[30rem] rounded-lg" src="https://quotefancy.com/media/wallpaper/3840x2160/1246546-Colleen-Houck-Quote-Bad-things-sometimes-happen-to-good-people-the.jpg" /> */}
        
          <div className=" w-full max-w-[45rem] bg-black">
            <h1 className="text-2xl font-bold sm:text-3xl mb-12">Register Youself As Seller ⭐</h1>

            <form>
              <div className="mb-5">
                <label for="name" className="mb-3 block  font-medium text-base">
                  Your Alias
                </label>
                <input type="text" name="name" id="name" placeholder="Enter your preferred Alias"
                  className="w-full rounded-md  bg-gray-900 py-3 px-6 text-base font-medium text-whiteoutline-none  " />
              </div>
              <div className="mb-5">
                <label for="phone" className="mb-3 block text-base font-medium text-base">
                  Phone 
                </label>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                  className="w-full rounded-md  bg-gray-900 py-3 px-6 text-base font-medium text-whiteoutline-none  " />
              </div>
              <div className="mb-5">
                <label for="email" className="mb-3 block text-base font-medium text-base">
                  Email Address
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email"
                  className="w-full rounded-md  bg-gray-900 py-3 px-6 text-base font-medium text-whiteoutline-none  " />
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 ">
                  <div className="mb-5">
                    <label  className="mb-3 block text-base font-medium text-base">
                      Do You Offer Cross-broder shipment?
                    </label>
                    {/* <input type="number" placeholder="Enter Shipping Distance (in Kilometers)"
                      className="w-full rounded-md  bg-gray-900 py-3 px-6 text-base font-medium text-whiteoutline-none appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  " /> */}
                    <select onChange={handleSelectChange} className='w-full rounded-md  bg-gray-900 py-3 px-6 text-base font-medium'>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                     </select>
                  </div>
                </div>
                {!isOptionSelected &&(
                  <div className="flex w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label for="distance" className="mb-3 block text-base font-medium text-base">
                        Enter the max. shipping distance
                      </label>
                     <div className='flex'>
                        <input type="number" placeholder="Enter Shipping Distance"
                          className="w-full rounded-l-md outline-none bg-gray-900 py-3 px-6 text-base font-medium text-whiteoutline-none appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  " />
                        <select className='rounded-r-md bg-gray-900 py-3  text-base font-medium'>
                          <option>Miles</option>
                          <option>Kilometers</option>
                        </select>  
                        </div>                  
                    
                    </div>
                
                  </div>
                )}
              </div>

              <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold text-base sm:text-xl">
                  Address Details
                </label>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input type="text" name="country"  placeholder="Enter Country"
                        className="w-full rounded-md  bg-gray-900 py-3 px-6 text-base font-medium text-whiteoutline-none  " />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input type="text" name="city" id="city" placeholder="Enter city"
                        className="w-full rounded-md  bg-gray-900 py-3 px-6 text-base font-medium text-whiteoutline-none  " />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input type="text" name="state" id="state" placeholder="Enter state"
                        className="w-full rounded-md  bg-gray-900 py-3 px-6 text-base font-medium text-whiteoutline-none  " />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                        className="w-full rounded-md  bg-gray-900 py-3 px-6 text-base font-medium text-whiteoutline-none  " />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-base outline-none">
                  Next
                </button>
              </div>
            </form>
          </div>
        
        
        </div>
       </div>
    </div>
  )
}

export default SellerForm