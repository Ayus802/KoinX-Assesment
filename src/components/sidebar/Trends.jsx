import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Trends() {

    const [bitcoin, setBitcoin] = useState(0)
    const [ethereum, setEthereum] = useState(0)
    const [polygon, setPolygon] = useState(0)

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/simple/price', {
            headers:{
                x_cg_demo_api_key: "CG-4nFd4wxJqMvkLMJPPh3Vc3EX",
                accept: 'application/json'
            },
            params:{
                ids: `bitcoin`,
                vs_currencies: `inr,usd`,
                include_24hr_change: `true`
            }
        }).then((res)=>{
            setBitcoin(res.data.bitcoin.usd_24h_change)
        }
        )

        axios.get('https://api.coingecko.com/api/v3/simple/price', {
            headers:{
                x_cg_demo_api_key: "CG-4nFd4wxJqMvkLMJPPh3Vc3EX",
                accept: 'application/json'
            },
            params:{
                ids: `ethereum`,
                vs_currencies: `inr,usd`,
                include_24hr_change: `true`
            }
        }).then((res)=>{
            setEthereum(res.data.ethereum.usd_24h_change)
        }
        )

        axios.get('https://api.coingecko.com/api/v3/simple/price', {
            headers:{
                x_cg_demo_api_key: "CG-4nFd4wxJqMvkLMJPPh3Vc3EX",
                accept: 'application/json'
            },
            params:{
                ids: `polygon`,
                vs_currencies: `inr,usd`,
                include_24hr_change: `true`
            }
        }).then((res)=>{
            setPolygon(res.data)
        }
        )
    },[])
    
  return (
    <div>
        <h3 className='text-xl mt-6 font-semibold'>Trending Coins (24h)</h3>
        <div className='font-semibold text-gray-700 mt-4'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <img 
                        className='h-5 rounded-full'
                        src="https://svgmix.com/uploads/3287b3-ethereum-eth.svg" alt="" />
                        <div>
                            Etherium
                        </div>  </div>
                <div className={`flex items-center gap-2 font-semibold ${ethereum<0? 'text-red-700': 'text-green-600'}`}>
                    <img 
                    className='h-3'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Increase.svg/1027px-Increase.svg.png" alt="" />
                    <div>{ethereum.toFixed(2)}%</div></div>
            </div>
            <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                    <img 
                        className='h-5 rounded-full'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png" alt="" />
                        <div>
                            Bitcoin
                        </div>  </div>
                <div className={`flex items-center gap-2 font-semibold ${bitcoin<0? 'text-red-700': 'text-green-600'}`}>
                    
                <img 
                    className='h-3'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Increase.svg/1027px-Increase.svg.png" alt="" />
                    <div>{bitcoin.toFixed(2)}%</div></div>
            </div>
            <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                    <img 
                        className='h-5 rounded-full'
                        src="https://cdn-icons-png.freepik.com/512/12114/12114233.png" alt="" />
                        <div>
                            Polygon
                        </div>  </div>
                <div className={`flex gap-2 items-center font-semibold ${polygon<0? 'text-red-700': 'text-green-600'}`}>
                    <img 
                    className='h-3'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Increase.svg/1027px-Increase.svg.png" alt="" />
                    <div>1.24% </div></div>
            </div>
              
        </div>
    </div>
  )
}
