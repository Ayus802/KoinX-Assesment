import React from 'react'

export default function TrendCard({img, name, growth, price, chart}) {
  return (
    <div className='border-2 min-w-fit border-gray-200 p-4 rounded-xl flex flex-col justify-between items-start'>
        <div className='flex gap-1 items-center'>
            <img src={img} alt="" className='rounded-full h-4 sm:h-8'/>
            <h3 className='text-xs sm:text-sm'>{name}</h3>
            <span className={`text-xs sm:text-xs font-sans ${growth<0? 'text-red-700': 'text-green-500'}`}>{growth.toFixed(2)}%</span>
        </div>
        <div className='my-3'>
            {price.toFixed(5)}
        </div>
        <img src={chart} alt="" className='w-28 sm:w-44 '/>
    </div>
  )
}
