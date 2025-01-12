import React from 'react'

export default function TeamCard({img,name,designation,about}) {
  return (
    <div className='flex flex-wrap gap-5 justify-center items-center my-11'>
        <div className='flex flex-col justify-center items-center'>
            <img src={img} alt="" className='h-24 min-w-24 rounded-md'/>
            <span className='text-sm mt-3 font-semibold'>{name}</span>
            <span className='text-xs text-gray-700' >{designation}</span>
        </div>
        <p className='text-gray-700 text-[.9rem] max-w-[35rem]'>{about}</p>
    </div>
  )
}
