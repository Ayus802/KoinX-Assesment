import React from 'react'
import Trends from './Trends'

export default function Sidebar() {
  return (
    <div className=' min-w-[22rem] max-w-[22rem] '>
        <div className='bg-blue-700 w-full text-white flex flex-col items-center text-center p-7 rounded-lg'>
            <h2 className='text-2xl font-bold'>Get Started with KoinX for FREE</h2>
            <p className='text-xs mt-3'>
                With our range of features of that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
            </p>
            <img
                className='h-56' 
                src="https://i.pinimg.com/originals/3d/d5/54/3dd5541aca6d2762d0f35f14df1f48fb.png" alt="" />
            <a href="" className='py-1 px-4 flex items-center bg-white text-black rounded-md text-sm font-semibold'>Get Started for FREE<span className='text-2xl font-bold ml-2'>→</span></a>
        </div>
        <Trends/>
    </div>
  )
}
