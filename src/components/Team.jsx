import React from 'react'
import TeamCard from './cards/TeamCard'
import {teamData} from '../assets/teamData'

export default function Team() {
  return (
    <div>
        <h2 className='mt-16 mb-3 text-xl font-semibold'>Team</h2>
        <p className='text-gray-700 text-[.9rem] mt-3 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsum rerum modi rem, magni sint id voluptas suscipit beatae maiores ipsam labore velit molestias mollitia nobis quo libero accusantium qui!</p>
        {teamData.map((member,index)=>{
          return <TeamCard 
                    key={index}
                    img={member.img} 
                    name={member.name} 
                    designation={member.designation} 
                    about={member.about} />
        })}
    </div>
  )
}
