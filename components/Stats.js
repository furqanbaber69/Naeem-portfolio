"use client"
import React from 'react'
import CountUp from 'react-countup'

const statsData = [
    {
        num:12,
        text:"Years of Experience"
    },
    {
        num: 6,
        text:"Completed Projects"
    },
    {
        num: 6,
        text:"Technologies Mastered"
    },
    {
        num: 20,
        text:"Code Commits"
    },
]

const Stats = () => {
  return (
    <section className='pt-4 pb-10 xl:pt-0 xl:pb-0 xl:relative xl:bottom-10'>
        <div className='container mx-auto '>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto  '>
        {statsData.map((stat, index) => (
            <div 
            key={index} 
            className='flex-1 flex gap-4 justify-center items-center xl:justify-start'>
                <CountUp 
                start={0}
                end={stat.num} 
                duration={5} 
                delay={2} className="text-4xl xl:text-6xl font-extrabold " />
                <p 
                className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                    {stat.text}
                </p>
            </div>

        ))}
        </div>
        </div>
    </section>
  )
}

export default Stats