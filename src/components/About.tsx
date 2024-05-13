import React from 'react'
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "./about.css"
import stack from "../assets/stack.svg"
import Landing from './Landing';
function About() {
    const targetRef =useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target:targetRef,
        offset:["start end","end start"]
    });
    const scale = useTransform(scrollYProgress,[0,0.5],[.6,1])
    const height = useTransform(scrollYProgress,(pos)=>
        pos>=1?"80vh":"100vh"
    )
    const width= useTransform(scrollYProgress,(pos)=>
        pos>=1?"80vw":"100vw"
    )
   
  return (
<>

   <motion.div 
    ref={targetRef}
    style={{scale,height,width}}
    className='about-container'
    >
    
    <>
     <div className='image-section'>
        <div className='img-container-section'>
            <div className='img-container'>
                    <img src="/alanjohn.jpg" />
            </div>
           
        </div>   
        <div className='contact'>
            <h1>
                <u>Contact</u>
            </h1>
            <p>
                Email:alanjohn.live@gmail.com
             </p>
             <p>
                Phone: +91 974 678 123
             </p>
        </div>
        
    </div>
    <div className='about-section'>
               <div className='education'>
     
                    <h1>
                        <u>Education</u>
                    </h1>
                    <p>
                   
Model Engineering College, Kochi<br></br>
Bachelor of Technology in Computer Science and Engineering
<br />
Graduation: 2026
CGPA: 9.0
                    </p>

               </div>
               <div className='skills'>
                    <h1>
                        <u>Skills</u> 
                    </h1>
                   <p> 
                  
Programming Languages: JavaScript, Python, Java<br />
Frontend Technologies: HTML, CSS, React.js<br />
Backend Technologies: Node.js, Express.js <br />
Databases: MongoDB, MySQL <br />
Other Skills: Git, RESTful APIs <br />
                    
                   </p>

               </div>
               <div className='stack-section'>
                    <img src={stack}>
                    </img>
               </div>
     </div>
    </> 
    <div className='landing-section'>
         <Landing />
   </div>
     
   </motion.div>

 
   
</>
  )
}

export default About