import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import TrendCard from './cards/TrendCard'

export default function Page5() {
    const [trending, setTrending] = useState([]);
    const likeRef = useRef(null)
    const trendRef = useRef(null)

    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/search/trending",{
            header:{
                x_cg_demo_api_key: "CG-4nFd4wxJqMvkLMJPPh3Vc3EX"
            }
        }).then((res) => setTrending(res.data.coins)
        ).catch((err)=>console.log(err))
    },[])
    function rightScroll1() {
        if (likeRef.current){
            likeRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }
    function leftScroll1(){
        if (likeRef.current){
            likeRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }
    function leftScroll2(){
        if (trendRef.current){
            trendRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }
    function rightScroll2() {
        if (trendRef.current){
            trendRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }

  return (
    <div className='mt-36 '>
        <h2 className='mb-5 text-xl font-semibold'>You May Also Like</h2>
        <div className='flex items-center gap-3 mb-5 w-[85vw]'>
            <div 
                onClick={leftScroll1}
                className='text-3xl h-10 min-w-10 text-center rounded-full shadow-xl absolute bg-white left-4 sm:left-16 cursor-pointer'> {'<'} </div>
            <div className='flex gap-6 overflow-scroll no-scrollbar' ref={likeRef} >
                {trending.map((response,index) => 
                    <TrendCard 
                        key={index}
                        img={response.item.small} 
                        name={response.item.name} 
                        growth={response.item.data.price_change_percentage_24h.usd} 
                        price={response.item.data.price} 
                        chart={response.item.data.sparkline}
                    />)}
            </div>
            <div
                onClick={rightScroll1} 
                className='text-3xl h-10 min-w-10 text-center rounded-full shadow-xl absolute right-4 sm:right-16 bg-white cursor-pointer'> {'>'} </div>
            
        </div>
        <h2 className='my-5 text-xl font-semibold'>Trending Coins</h2>
        <div className='flex items-center gap-3 mb-5 w-[85vw]'>
            <div 
                onClick={leftScroll2}
                className='text-3xl h-10 min-w-10 text-center rounded-full shadow-xl absolute left-4 sm:left-16 bg-white cursor-pointer'> {'<'} </div>
            <div className='flex gap-6 overflow-scroll no-scrollbar' ref={trendRef} >
                {trending.map((response,index) => 
                    <TrendCard 
                        key={index}
                        img={response.item.small} 
                        name={response.item.name} 
                        growth={response.item.data.price_change_percentage_24h.usd} 
                        price={response.item.data.price} 
                        chart={response.item.data.sparkline}
                    />)}
            </div>
            <div
                onClick={rightScroll2} 
                className='text-3xl h-10 min-w-10 text-center rounded-full shadow-xl absolute bg-white right-4 sm:right-16 cursor-pointer'> {'>'} </div>
            
        </div>
    </div>
  )
}
