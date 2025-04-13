import React, { useRef } from 'react';
import "./project.scss";
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';


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


const Project = () => {

  const ref = useRef();
  const isInView = useInView(ref, {margin:"-200px", triggerOnce: true});

  return (
    <div id='Projects' className='project' ref={ref}>
       <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial" }
        className='title'>
       <h1>Projects</h1>
       </motion.div>
       <motion.div
        variants={listVariants}
        animate={isInView ? "animate" : "initial" }
       className='card'>
         <ProjectCard 
         title="Real-time Chat App"
         des="A real-time chat application that allows users to communicate instantly through a simple and interactive interface. Built with React and Firebase, it ensures seamless message exchange and a smooth user experience. "
         src="./chat.png"
         linkWeb="https://friendly-clafoutis-b25ad2.netlify.app/"
         linkGit="https://github.com/Abdelrohman-Mousa/chatApp"
         />
         <ProjectCard 
         title="Gamini Clone"
         des="The 'Gemini Program Clone' is a large language model trained on vast amounts of text. It is capable of performing various tasks, including answering questions, translating languages, and generating different types of text. I developed it using HTML, CSS, and JavaScript, integrated Google Fonts, and utilized an API to fetch data. "
         src="./gamini.png"
         linkWeb="https://gemiiniclone.netlify.app/"
         linkGit="https://github.com/Abdelrohman-Mousa/Gemini_Clone"
         />
         <ProjectCard 
         title="Muslim Prayer"
         des="The Prayer app is an application for Muslim prayer times built using the React framework. It includes a select dropdown for choosing the desired city and date, along with the current time and the remaining time for the next prayer. Each prayer is displayed within a dedicated section, and each section contains detailed information about that specific prayer. The design is implemented using the Material UI library, while data is fetched using the Axios API.The Moment.js library is used to handle time operations."
         src="prayer.png"
         linkWeb="https://glittering-gecko-4ba62d.netlify.app/"
         linkGit="https://github.com/Abdelrohman-Mousa/Prayer"
         />
         <ProjectCard 
         title="To Do List"
         des="The To-Do List application is designed to save tasks that need to be completed. It was developed using HTML, CSS, and JavaScript for the frontend. The localStorage feature is utilized to store the task data, ensuring the information remains available even after the page is refreshed or the browser is closed. "
         src="./todoList.png"
         linkWeb="https://todoollistt.netlify.app/"
         linkGit="https://github.com/Abdelrohman-Mousa/ToDoList_App"
         />
         <ProjectCard 
         title="E-commerce Website"
         des="A modern e-commerce website for selling clothes, offering a smooth shopping experience with product listings, categories, and a functional cart system. Built with responsive design to ensure compatibility across all devices. "
         src="./commerce.png"
         linkWeb="https://aquamarine-hummingbird-1093cf.netlify.app/"
         linkGit="https://github.com/Abdelrohman-Mousa/An-e-commerce_website_for_selling_clothes"
         />
         <ProjectCard 
         title="CRUDs"
         des="A simple CRUD application built with JavaScript that allows users to manage products efficiently. It supports creating, reading, updating, and deleting items, along with automatic total price calculation. Designed with a clean and intuitive interface for a smooth user experience. "
         src="./cruds.png"
         linkWeb="https://cruds-project-javascript.netlify.app/"
         linkGit="https://github.com/Abdelrohman-Mousa/javascript-project-CRUDS"
         />
       </motion.div>
    </div>
  )
}

export default Project
