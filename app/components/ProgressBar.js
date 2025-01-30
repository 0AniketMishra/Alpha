"use client"
import { useTransitionRouter } from 'next-view-transitions'
import React from 'react'

function ProgressBar() {
  useTransitionRouter()
    return (

    <div className='fixed top-0 left-0 right-0 bg-red-500 h-1 z-50'></div>
  )
}

export default ProgressBar