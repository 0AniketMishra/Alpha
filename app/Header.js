import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
          <div className="container mx-auto px-4     py-5 flex items-center">

            
              <Link href="/" className="mr-auto md:w-48 flex-shrink-0">
                  <div class="flex title-font font-medium items-center text-gray-900 mb-0 ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                      <span class="ml-3 text-xl text-white">Alpha</span>
                  </div>
              </Link>

             
              <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-200 rounded-md hidden md:flex xl:flex items-center">
                  <select className="bg-transparent  uppercase font-bold text-sm p-3 mr-2 text-black" name="" id="">
                      <option >all</option>
                  </select>
                  <input className="border-l border-gray-400 w-full outline-none bg-transparent font-semibold text-sm pl-4 text-black" type="text" placeholder="I'm searching for ..."/>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-black mr-2 ml-2 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>

              </div>

             
              <div className="ml-auto md:w-48 hidden sm:flex md:hidden lg:flex flex-col items-center place-items-end">
                  <span className="font-bold md:text-xl">Welcome</span>
                  <span className="font-semibold text-sm text-gray-400">Mr. Dread Pirate Roberts</span>
              </div>

     
              <nav className="contents">
                  <ul className="ml-4 xl:w-48 flex items-center justify-end">
                      <li className="ml-2 lg:ml-4 relative inline-block">
                          <Link className="" href="/messages">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-500">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                              </svg>

                          </Link>
                      </li>
                      <li className="ml-2 lg:ml-4 relative inline-block">
                          <Link href="/liked" className="" >
                              <div className="absolute -top-1.3 right-0 z-10 bg-red-400 text-xs font-bold px-1 rounded-full h-[4.8] w-[4.8]">3</div>
                              <svg className="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                          </Link>
                      </li>
                      <li className="ml-2 lg:ml-4 relative inline-block">
                          <a className="" href="">
                              <div className="absolute -top-1.3 right-0 z-10 bg-red-400 text-xs font-bold px-1 rounded-full h-[4.8] w-[4.8]">12</div>
                              <svg className="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg>
                          </a>
                      </li>
                  </ul>
              </nav>

            
              <div className="ml-4 hidden sm:flex flex-col font-bold">
                  <span className="text-xs text-gray-400">Your Cart</span>
                  <span>$2,650,59</span>
              </div>
          </div>
          <div className="mx-auto w-[90%] flex 2xl:max-w-2xl bg-gray-200 rounded-md lg:hidden 2xl:hidden md:hidden items-center">
              <select className="bg-transparent  uppercase font-bold text-sm p-3 mr-4 text-black" name="" id="">
                  <option >all</option>
              </select>
              <input className="border-l border-gray-400 w-full outline-none bg-transparent font-semibold text-sm pl-4 text-black" type="text" placeholder="I'm searching for ..." />
              <svg className="ml-auto h-5 px-4 text-black" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
          </div>
    </div>
  )
}

export default Header