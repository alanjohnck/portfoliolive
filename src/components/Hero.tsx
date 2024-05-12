import { useScroll, useTransform, motion } from "framer-motion";
import { useFollowPointer } from "./useFollowPointer";
import { useEffect, useRef } from "react";
import { useState } from "react";
import "./hero.css"
import Landing from "./Landing";
import component from "../assets/Component 11.svg"
import About from "./About";
function Hero() {
    const targetRef =useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
   
  
   
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    const { scrollYProgress } = useScroll({
        target:targetRef,
        offset:["start end","end start"]
    });
  const opacity=useTransform(scrollYProgress,[0,0.5],[.3,1])
    const scale=useTransform(scrollYProgress,[0,0.5],[1,.5])
    const color = useTransform(scrollYProgress, (col)=>
        col>=.75?"black":"white"
    )
   
  return (
    <>
    <motion.div
      ref={targetRef}
      style={{opacity}}
       className="hero-container">
        <motion.div
        style={{scale,color}}
        >
            <h1>
                Hello,Welcome to my world!
            </h1>
            <h5>
                Alan John Chacko
            </h5>
            <p>
                I am a developer
            </p>
        </motion.div>
       <motion.div 
         ref={ref}
        
         animate={{ x, y }}
         transition={{
           type: "spring",
           damping: 3,
           stiffness: 50,
           restDelta: 0.001
         }}
       
        className="drag-object">

      </motion.div>
      <div className="svg-block">
        
        
      </div>
      
      </motion.div>
  <motion.div 
    
    ref={sectionRef}
    className="sections">
  
         <About />
    
    </motion.div>
    </>
  )
}

export default Hero