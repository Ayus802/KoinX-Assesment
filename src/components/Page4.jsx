import React from 'react'
import './page4.css'

export default function Page4() {
  return (
    <div className='hidden md:block'>
        <p className='mt-6 text-gray-700 text-[.9rem] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eos soluta et culpa quidem ullam, quia assumenda quod odio excepturi cum iure voluptate! Saepe, doloremque expedita unde placeat enim animi accusantium? Libero eos voluptatem magnam fugit, eius unde nihil animi?</p>
        <h2 className='mt-16 mb-3 text-xl font-semibold'>Tokenomics</h2>
        <h3 className='font-bold text-[1rem] text-gray-800'>Initial Distribution</h3>
        <div className='mt-4 flex items-center gap-8'>
            <div className='h-36 w-36 pie flex items-center justify-center rounded-full' >
                <div className='h-24 w-24 bg-white rounded-full'></div>
            </div>
            <div>
                <div className='flex items-center gap-3'><div className='h-3 w-3 rounded-full bg-blue-600'></div> Crowdsale Investors: 80%</div>
                <div className='flex items-center gap-3'><div className='h-3 w-3 rounded-full bg-yellow-300'></div> Foundation: 20%</div>
            </div>
        </div>
        <p className='text-gray-700 text-[.9rem] mt-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, distinctio temporibus dicta quaerat ad nulla quo, sint odit non quasi ipsam nam maiores! Eaque ut ipsum voluptatibus iure enim quod. Reiciendis sit, eveniet impedit ipsa dolor cupiditate excepturi commodi illo dolorem hic praesentium tempora non, repellendus unde quae dignissimos maxime.
        </p>
    </div>
  )
}
