import React from 'react'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "../components/ProjectCard"
import "./landing.css"
function Landing() {
    const targetRef =useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target:targetRef,
      offset:["start end","end start"]
    });
    const scale = useTransform(scrollYProgress,[0.5,1],[.5,1.6])
    const height = useTransform(scrollYProgress,(pos)=>
      pos>=1?"80vh":"100vh"
    )
    const width= useTransform(scrollYProgress,(pos)=>
      pos>=1?"80vw":"100vw"
    )
    const padding = useTransform(scrollYProgress,(pos)=>{
      pos>=.7 ? "20%":"70%"
    })
  return (
    <motion.div  style={{width,height,scale,padding}} className='landing'>
         <ProjectCard />
    </motion.div>
  )
}

export default Landing