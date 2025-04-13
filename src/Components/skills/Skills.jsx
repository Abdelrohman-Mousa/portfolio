import React, { useRef } from 'react';
import "./skills.scss";
import SkillsCard from './SkillsCard';
import { motion, useInView } from "framer-motion"; 


const textVariants = {
  initial: {
      x: -100,
      y: -100,
      opacity: 0,
  },
  animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
          duration: 1,
      },
  },
};

const listVariants = {
  initial: {
      x: -100,
      opacity: 0,
  },
  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1,
          staggerChildren: 0.5,
      },
  },
};


const Skills = () => {
     const ref = useRef();
     const isInView = useInView(ref, {margin:"-200px"});
  return (
    <div className='skills' id='Skills' ref={ref}>
      <motion.div 
       variants={textVariants}
       animate={isInView ? "animate" : "initial" }
      className='title'>
        <h1>Skills</h1>
      </motion.div>
      <motion.div 
        variants={listVariants}
        animate={isInView ? "animate" : "initial" }
      className='cards'>
         <SkillsCard 
           img="./html.png"
           name="HTML"  
         />

         <SkillsCard 
           img="./css.png"
           name="CSS"  
         />

         <SkillsCard 
           img="./js.png"
           name="JavaScript"  
         />

         <SkillsCard 
           img="./bootStrap.png"
           name="BootStrap"  
         />

         <SkillsCard 
           img="./tailwind.png"
           name="Tailwind"  
         />

         <SkillsCard 
           img="./react.png"
           name="React.js"  
         />

         <SkillsCard 
           img="./reactrouter.png"
           name="React-router"  
         />

         <SkillsCard 
           img="./readux.png"
           name="Readux"  
         />

         <SkillsCard 
           img="./firebase.jpg"
           name="Firebase"  
         />

         <SkillsCard 
           img="./graphQl.png"
           name="GraphQL"  
         />

         <SkillsCard 
           img="./api.png"
           name="Rest-APIs"  
         />

         <SkillsCard 
           img="./material.png"
           name="MaterialUi"  
         />
         <SkillsCard 
           img="./framer.png"
           name="F-Motion "  
         />

         <SkillsCard 
           img="./nextjs.png"
           name="Next.js"  
         />

         <SkillsCard 
           img="./typeScript.png"
           name="TypeScript"  
         />

         <SkillsCard 
           img="./nodejs.png"
           name="NodeJs"  
         />

        <SkillsCard 
           img="./problem-solving.png"
           name="ProblemSolving"  
         />

         <SkillsCard 
           img="./github.png"
           name="Git & GitHub"  
         />

         <SkillsCard 
           img="./figma.png"
           name="Figma"  
         />

         <SkillsCard 
           img="./Canva.jpg"
           name="Canva"  
         />

         <SkillsCard 
           img="excel.png"
           name="Excel"  
         />

         <SkillsCard 
           img="word.png"
           name="Word"  
         />

         <SkillsCard 
           img="powerpoint.png"
           name="PowerPoint"  
         />

      </motion.div>
    </div>
  )
}

export default Skills
