"use client"
import { Description } from '@radix-ui/react-dialog'
import React from 'react'
import { FaHtml5 , FaCss3 , FaJs , FaReact , FaFigma ,FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss , SiNextdotjs} from 'react-icons/si'


const about =  {
  title:"About Me",
  Description:"I m a Frontend Developer Working wwith latest Technologies Like Nextjs React js.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Adil Ashraf",
    },
    {
      fieldName:"Phone",
      fieldValue:"(+92) 3052537941",
    },
    {
      fieldName:"Experience",
      fieldValue:"6+ Years",
    },
    {
      fieldName:"Gmail",
      fieldValue:"furqanbaber69@gmail.com",
    },
    {
      fieldName:"Github",
      fieldValue:"furqanbaber69",
    },
    {
      fieldName:"Nationality",
      fieldValue:"Pakistani",
    },
    {
      fieldName:"Freelance",
      fieldValue:"Available",
    },
    {
      fieldName:"Language",
      fieldValue:"Urdu , English",
    },
  ]
}

//Expereince data
const Expereince = {
  icon:"/assest/resume/badge.svg",
  title:"My expereince",
  Description:`Lorem ipsum dolor sit amet, consectetuer
   Maecenas nec odio et ante tincidunt temlibero venenatis faucibus. Nullam quis ante.`,
  items:[
    {
      company:"Tech Solution Inc",
      position:"Junior Developer",
      duration:"2023 - 2024"
    },
    {
      company:"CodeBand",
      position:"Junior Developer",
      duration:"2023 - 2024"
    },
    {
      company:"Khokharfarms.pk",
      position:"Project Manager",
      duration:"2024 - Present"
    },
    {
      company:"crownmotorsports.pk",
      position:"Wordpress Developer & Seo",
      duration:"2020 - 2021"
    },
    {
      company:"ElectoBike.pk",
      position:"Project Manager Developer & Seo",
      duration:"2024 - Present"
    },

  ]
}
const education = {
  icon:"/assest/resume/badge.svg",
  title:"My Education",
  Description:`Lorem ipsum dolor sit amet, consectetuer
   Maecenas nec odio et ante tincidunt temlibero venenatis faucibus. Nullam quis ante.`,
  items:[
    {
      College:"Goverment Boys Degree Nataional College",
      duration:" 2018 - 2021",
      degree:"Consider to High School",
    },
    {
      College:"MAshal Secondry School",
      duration:" 2015 - 2017",
      degree:"Matriculation",
    },
    {
      College:"Mashal Secondry School",
      duration:" 2015 - 2017",
      degree:"Matriculation",
    },

  ]
}
// skills data 
const skill =  {
      title:  "My Skills",
      Description: "Lorem50 ",
      skillList:[
        {
          icon: <FaHtml5 className='xl:w-20 xl:h-20 w-10 h-10 text-[#f06529] transition-all duration-500 delay-100'/>,
          title: "HTML",
          level: "90%"
        }
        ,
        {
          icon: <FaCss3 className='xl:w-20 xl:h-20 w-10 h-10 text-[#2965f1]'/>,
          title: "CSS",
          level: "90%"
        },
        {
          icon: <FaJs className='xl:w-20 xl:h-20 w-10 h-10 text-[#F0DB4F] '/>,
          title: "Javascript",
          level: "90%"
        },
        {
          icon: <FaReact className='xl:w-20 xl:h-20 w-10 h-10 text-[#61DBFB] '/>,
          title: "React",
          level: "90%"
        },
        {
          icon: <SiTailwindcss className='xl:w-20 xl:h-20 w-10 h-10 text-[#3490dc] '/>,
          title: "Tailwind",
          level: "90%"
        },
        {
          icon: <SiNextdotjs className='xl:w-20 xl:h-20 w-10 h-10 text-[#5e7693] '/>,
          title: "Nextjs",
          level: "90%"
        },
        {
          icon: <FaFigma className='xl:w-20 xl:h-20 w-10 h-10 hover:text-accent '/>,
          title: "Figma",
          level: "90%"
        },
        {
          icon: <FaNodeJs className=' text-[#3c873a] '/>,
          title: "Nodejs",
          level: "90%"
        }
      ]
  }
import { Tabs , TabsContent , TabsList , TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import {motion} from 'framer-motion'


const Resume = () => {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1 ,
    transition: { delay:2.4 , duration:0.4 , ease:"easeIn"}}} 
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:my-10'>
      <div className='container mx-auto '>
        <Tabs defaultValue='expereince' className='flex flex-col xl:flex-row gap-[60px] '>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='expereince' className=''>Expereince</TabsTrigger>
            <TabsTrigger value='education' className=''>Education</TabsTrigger>
            <TabsTrigger value='skills' className=''>Skills</TabsTrigger>
            <TabsTrigger value='about me' className=''>About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className='min-h-[70vh w- full '>
            {/* expereince */}
            <TabsContent value='expereince' className='w-full'>
              <div className='flex flex-col fap-[30px] text-center xl:text-left '>
                {/* Expererince Title */}
                <h3 className='text-4xl font-bold '>{Expereince.title}</h3>
                {/* Expereince Description */}
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{Expereince.Description}</p>
                {/* ScrollArea */}
                <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>

                  {Expereince.items.map((item , index) => (
                    <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 my-3'>
                      {/* duration */}
                      <span className='text-accent'>{item.duration}</span>
                      {/* position */}
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                      <div className='flex -items-center gap-3'>
                        {/* dot */}
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col fap-[30px] text-center xl:text-left '>
                {/* Expererince Title */}
                <h3 className='text-4xl font-bold '>{education.title}</h3>
                {/* Expereince Description */}
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.Description}</p>
                {/* ScrollArea */}
                <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>

                  {education.items.map((item , index) => (
                    <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 my-3'>
                      {/* duration */}
                      <span className='text-accent'>{item.duration}</span>
                      {/* position */}
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.College}</h3>
                      <div className='flex items-center gap-3'>
                        {/* dot */}
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.degree}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}

            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold '>{skill.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skill.description}</p>
                  </div>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  xl:gap-[30px]'>
                    {skill.skillList.map((skill , index) => (
                        <li key={index} className='text-center xl:w-[8rem]'>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl transition-all duration-300 '>
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className='capitalize'>
                                {skill.title}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                    ))}
                  </ul>
              </div>
            </TabsContent>
            {/* about me */}

            <TabsContent value='about me' className='w-full text-center xl:text-left '>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((info , index) => (
                    <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60 '>{info.fieldName}:</span>
                        <span className='text-xl '>{info.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume