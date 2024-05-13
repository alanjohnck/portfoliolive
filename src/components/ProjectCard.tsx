import "./project.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function ProjectCard() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const projects = [
    {
      name:"E-commerce",
      description:"I developed a fully functional e-commerce website from scratch. The website is designed to provide a seamless shopping experience for users, with a user-friendly interface and robust features.",
      tools:["Frontend:React","Backend:Node.js,Express","Database:PostgreSQL"],
      github:"https://github.com/alanjohnck/E-commerce",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOo8r5pbRc9hY4HAT8P93-tmbJ9FPxbXz3WEx3sm5KMQ&s"
    },
    {
      name:"flutter",
      description:" It uses AI-powered text extraction to large texts to summary, offering an immersive learning experience through text-to-speech technology. ",
      tools:["flutter","tts package for text to speech","API for text extraction","  Animation kits"," firebase"],
      github:"https://github.com/alanjohnck/AI_hub_Application",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8El9ay-ffxJvETGylQQ1hG9NfRk_PwR2C9sjzmNm4Dw&s"
    },
  ];

  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref}>
        {projects.map((project, index) => (
          <li key={index}>
           <div className="project-container">
            <div className="image-project">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-desc">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <h3>Tools used:</h3>
              
                {project.tools.map((tool, index) => (
                  <p key={index}>{tool}</p>
                ))}
              
            </div>
            <div className="github">
              <a href={project.github}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8El9ay-ffxJvETGylQQ1hG9NfRk_PwR2C9sjzmNm4Dw&s" alt="Github" />
              </a>
            </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
