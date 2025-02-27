"use client"
import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    num:"01",
    title:"Web Development",
    description:"I develop websites that are fast, secure, and easy to manage. I specialize in Jamstack, React, and Next.js.",
    href:""
  },
  {
    num:"02",
    title:"UX/UI Design",
    description:"I develop UX/UI Design that are fast, secure, and easy to manage. I specialize in Jamstack, React, and Next.js.",
    href:""
  },
  {
    num:"03",
    title:"Banner Design",
    description:"I develop websites that are fast, secure, and easy to manage. I specialize in Jamstack, React, and Next.js.",
    href:""
  },
  {
    num:"04",
    title:"Logo Design",
    description:"I develop websites that are fast, secure, and easy to manage. I specialize in Jamstack, React, and Next.js.",
    href:""
  },
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-10 xl:my-10'>
      <div className='container mx-auto'>
              <motion.div 
              initial={{opacity:0}} 
              animate={{opacity:1, transition:{duration:0.4, delay:2.4, ease:"easeIn"}}} 
              className='grid grid-cols-1 md:grid-cols-2 gap-[60px] text-center'>
                        {services.map((service , index) => (
                          // top
                    <div 
                    className='flex-1 flex flex-col justify-center items-center gap-6 group'>
                        <div 
                        key={index}
                        className='w-full flex justify-between items-center'>
                            <div 
                            className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                              {service.num}</div>
                            <Link 
                            href={service.href}
                            className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                            >
                            <BsArrowDownRight className='text-primary text-3xl'/>
                            </Link>
                        </div>
                    <h2 
                    className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                      {service.title}
                      </h2>
                    {/* Subtitle */}
                    <p className='text-white/60'>{service.description}</p>
                    {/* border */}
                    <div className='border-b border-white/20 w-full'>

                    </div>
                  </div>
                        ))}

              </motion.div>
      </div>
    </section>
  )
}

export default Services