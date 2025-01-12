import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Page2 from "./Page2"
import Page3 from "./Page3"
import Page4 from "./Page4"
import Chart from "./Chart"
import Team from "./Team"
import Page5 from "./Page5"

export default function Main() {
  return (
    <div className='flex flex-wrap gap-2 mt-16 px-3 md:px-10'>
        <div className="w-[90vw] md:w-[45rem]">
            <div className="h-screen overflow-hidden">
              <Chart/>
            </div>
            <Page2/>
            <Page3/>
            <Page4/>
            <Team/>
        </div>
        <Sidebar/>
        {/* <Page5/> */}
    </div>
  )
}
