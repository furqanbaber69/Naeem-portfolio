import React from 'react'

// component import socials
import Socials from '@/components/socials'
import Photo from '@/components/photo'
import Stats from '@/components/Stats'
import Download from '@/components/download'

const Home = () => {
  

  return (
    <section className=' h-full '>
      <div className='container mx-auto h-full '>
        <div className='flex flex-col justify-center items-center h-full xl:flex-row xl:pt-8 xl:pb-24 xl:justify-between'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none my-10'>
            <span className='text-xl '>Web Developer</span>
            <h1 className='h1 mb-6'> Hello I'm <br /><span className='text-accent'>Naeem Ahmed</span></h1>
            <p className='text-lg max-w-[500px] mb-9 text-white/88'>I'm a Web Developer based in Pakistan, specializing in building dynamic and responsive websites. From front-end design & functionality, I craft seamless digital experiences that engage users and drive results.</p>
            {/* button and socials */}
            <div className='flex flex-col xl:flex-row items-center text-center'>
             <Download />
              <div className='my-8 xl:mx-2'>
                <Socials  containerStyles='flex gap-6 items-center justify-center' 
                iconStyle={'w-9 h-9 p-[10px] border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'}/>
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className='flex justify-center items-center order-1 xl:order-none xl:mb-0 xl:p-5'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home