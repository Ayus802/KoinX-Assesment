import React from 'react'

export default function Page2() {
  return (
    <div className='my-20'>
        <h2 className='text-2xl font-semibold'>Sentiment</h2>
        <h3 className='text-lg font-semibold text-gray-600 my-4 '>Key Events</h3>
        <div className='flex flex-wrap gap-4 text-xs '>
            <div className='flex items-start'>
                <img 
                    className='h-12 px-3'
                    src="https://img.icons8.com/parakeet/48/news.png" alt="" />
                <div>
                    <h4 className='font-semibold text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor dolore pariatur nam</h4>
                    <p className='text-gray-600 mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi at commodi obcaecati voluptatum doloribus earum laboriosam numquam et, ex officia saepe itaque facere reprehenderit illo. Possimus animi rem est, reprehenderit perspiciatis inventore debitis architecto
                    </p>
                </div>
            </div>
            <div className='flex items-start'>
                <img 
                    className='h-12 px-3'
                    src="https://img.icons8.com/?size=100&id=13555&format=png&color=000000" alt="" />
                <div>
                    <h4 className='font-semibold text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus beatae voluptatem, cupiditate modi ab.</h4>
                    <p className='text-gray-600 mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet debitis iusto nisi corrupti asperiores quisquam explicabo ratione quo! Modi reiciendis quisquam, natus sint iure praesentium corrupti placeat odit ex? Sed vero iste quis debitis? Quidem ducimus blanditiis earum pariatur eos!
                    </p>
                </div>
            </div>
        </div>
        <h2 className='text-lg font-semibold text-gray-600 my-6'>Analyst Estimates</h2>
        <div className='flex w-3/4'>
                <span className='w-1/5 mr-10 flex items-center justify-center text-3xl text-green-500 font-semibold'>76%</span>
                <div className='w-4/5 text-sm text-gray-500'>
                    <div className='flex items-center mb-2'>
                        <span>Buy</span><div className='h-2 w-4/5 ml-8 bg-green-500 rounded-sm'></div><span className='ml-2  text-xs'>80%</span>
                    </div>
                    <div className='flex items-center mb-2'>
                        <span>Hold</span><div className='h-2 w-1/6 ml-6 bg-gray-300 rounded-sm'></div><span className='ml-2  text-xs'>26%</span>
                    </div>
                    <div className='flex items-center mb-2'>
                        <span>Sell</span><div className='h-2 w-1/5 ml-8 bg-red-500 rounded-sm'></div><span className='ml-2  text-xs'>38%</span>
                    </div>
                </div>
        </div>
    </div>
  )
}
