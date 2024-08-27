import React from 'react'

function Loading() {
  return (
    < div className = 'flex items-center justify-center h-screen ' >
        <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'>
            <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>asdf</span>
        </div>
          </div >
  )
}

export default Loading