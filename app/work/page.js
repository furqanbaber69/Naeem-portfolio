"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import WorkSlideBtn from "@/components/WorkSlideBtn";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: 1,
    category: "React",
    title: "Project 1",
    description: "This is a project description",
    stack: [{ name: "Html5" }, { name: "React" }, { name: "Tailwind" }, { name: "Javascript" }, { name: "Swiper" }],
    image: "/assets/work/thumb1.png",
    link: "https://github.com",
    live: "",
    github: "",
  },
  {
    num: 2,
    category: "React",
    title: "Project 2",
    description: "This is a project description",
    stack: [{ name: "Html5" }, { name: "React" }, { name: "Tailwind" }, { name: "Javascript" }, { name: "Swiper" }],
    image: "/assets/work/thumb2.png",
    link: "https://github.com",
    live: "",
    github: "",
  },
  {
    num: 3,
    category: "React",
    title: "Project 3",
    description: "This is a project description",
    stack: [{ name: "Html5" }, { name: "React" }, { name: "Tailwind" }, { name: "Javascript" }, { name: "Swiper" }],
    image: "/assets/work/thumb3.png",
    link: "https://github.com",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]); // ✅ Corrected

  const handleSlideChange = (swiper) => {
    //get current slide Index
    const currentIndex = swiper.activeIndex
    //update selected project state based on current index
    setSelectedProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%]">
            {/* Text Details */}
            <div className=" flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {selectedProject.num} {/* ✅ Corrected */}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {selectedProject.category} {/* ✅ Corrected */}
              </h2>
              {/* Project description */}
              <p className="text-white/60">{selectedProject.description} {/* ✅ Corrected */}</p>
              {/* stacks */}
              <ul className="flex gap-4 flex-wrap">
                {selectedProject.stack.map((stack, index) => ( // ✅ Corrected
                  <li key={index} className="text-xl text-accent text-wrap">
                    {stack.name}
                    {/* remove the last comma */}
                    {index !== selectedProject.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20 "></div> 
              {/* button */}
              <div className="flex items-center gap-4">
                {/* Github Link */}
                <Link href={selectedProject.github} passHref>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Live Project Link */}
                <Link href={selectedProject.live} passHref>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* Project Slider */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none my-4">
              <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] xl:w-[600px] w-[100%] h-[100%]   "
              >
              {projects.map((project , index) => (
                <SwiperSlide 
                key={index}
                  className="w-full"
                >
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 overflow-hidden">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 bg-black/20 z-10  inset-0 transition duration-300"></div>

                    {/* Image Fix */}
                    <div className="xl:relative w-full h-full">
                      <Image 
                        src={project.image} 
                        fill
                        alt={project.title} 
                        className="xl:object-cover "
                        quality={100}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slide button */}
              <WorkSlideBtn containerStyle={"flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"}
              btnStyle={"bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"}
              />
            </Swiper>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

