"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function SellerForm() {

  const [isOptionSelected, setIsOptionSelected] = useState(true);
  const [password, setPasword] = useState("")
  const [distance,setDistance] = useState(0)
  const [email,setEmail] = useState("")
  const [alias, setAlias] = useState("")
  const [af,setAf] = useState(true)
  const [sf,setSf] = useState(false)



  const handleSelectChange = (event) => {
    if (event.target.value === 'yes') {
      setIsOptionSelected(true);
    } else {
      setIsOptionSelected(false);
    }
  };

  async function submit() {
    try {
      if(isOptionSelected)
          setDistance(-1)
      const response = await fetch('http://localhost:3001/registerseller', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          sellerName: alias, 
          shippingRange: distance, 
          agencyFulfilled: af,
          sellerFulfilled: sf,
          email: email,
          registrationFee: true, 
          password: password
         }),
        credentials: 'include'
      });

      const data = await response.json()
      console.log(data)

    } catch (error) {
console.log(error)
    }


  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    submit();
    }
  

  

  return (
    <div>

      <div className=" mx-auto max-w-7xl  sm:px-6  lg:px-4 flex h-full  " >
        <div className=" lg:mx-8 w-full ">
          {/* <img alt="ecommerce" layout="fill" className=" object-fill w-full h-[30rem] rounded-lg" src="https://quotefancy.com/media/wallpaper/3840x2160/1246546-Colleen-Houck-Quote-Bad-things-sometimes-happen-to-good-people-the.jpg" /> */}
        
          <div className=" w-full mx-auto px-6 max-w-[48rem] bg-black">
            <h1 className="text-2xl font-bold sm:text-3xl mb-12">Register Youself As Seller ⭐</h1>

            <form>
              <div className="mb-5">
                <label for="name" className="mb-3 block  font-medium text-base">
                  Your Alias
                </label>
                <input value={alias} onChange={(e) => setAlias(e.target.value)} type="text" name="name" id="name" placeholder="Enter your preferred Alias"
                  className="w-full rounded-md  bg-def outline-none py-3 px-6 text-base font-medium text-whiteoutline-none  " />
              </div>
              <div className="mb-5">
                <label for="phone" className="mb-3 block text-base font-medium text-base">
                  Password 
                </label>
                <input value={password} onChange={(e) => setPasword(e.target.value)} type="password" name="phone" id="phone" placeholder="Enter your phone number"
                  className="w-full rounded-md  bg-def outline-none py-3 px-6 text-base font-medium text-whiteoutline-none  " />
              </div>
              <div className="mb-5">
                <label for="email" className="mb-3 block text-base font-medium text-base">
                  Email for Getting Order Updates (optional)
                </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Enter your email"
                  className="w-full rounded-md  bg-def outline-none py-3 px-6 text-base font-medium text-whiteoutline-none  " />
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 ">
                  <div className="mb-5">
                    <label  className="mb-3 block text-base font-medium text-base">
                      Do You Offer Cross-broder shipment?
                    </label>
                    {/* <input type="number" placeholder="Enter Shipping Distance (in Kilometers)"
                      className="w-full rounded-md  bg-def outline-none py-3 px-6 text-base font-medium text-whiteoutline-none appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  " /> */}
                    <select onChange={handleSelectChange} className='w-full rounded-md  bg-def outline-none py-3 px-6 text-base font-medium'>
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
                        <input value={distance} onChange={(e) => setDistance(e.target.value)} type="number" placeholder="Enter Shipping Distance"
                          className="w-full rounded-l-md outline-none bg-def outline-none py-3 px-6 text-base font-medium text-whiteoutline-none appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  " />
                        <select className='rounded-r-md bg-def outline-none py-3  text-base font-medium'>
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
                  Choose Delivery Options
                </label>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div onClick={() => af ? setAf(false) : setAf(true)} className={`mb-5 w-full rounded-md  bg-def outline-none py-3 px-6 text-base font-medium outline-none ${af ? "text-indigo-500 border border-indigo-500" : "text-white border border-def"}`}>
                      <h1
                        className=" ">Agency Fulfilled</h1>
                      <p className='text-sm'>(FedEx, UPS, etc., handle the delivery)</p>
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div onClick={() => sf ? setSf(false) : setSf(true)} className={`mb-5 w-full rounded-md  bg-def outline-none py-3 px-6 text-base font-medium outline-none ${sf ? "text-indigo-500 border border-indigo-500" : "text-white border border-def"}`}>
                      <h1
                        className=" ">Seller Fulfilled</h1>
                      <p className='text-sm'>(Delivered directly by you, the seller)</p>
                    </div>
                  </div>
{!af && !sf &&(
                    <h1 className='mx-3'>Do not get High on your own Supply.. At least choose one option!</h1>

)}                  
                  
                </div>
              </div>

              <div>
                <button onClick={handleSubmit}
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