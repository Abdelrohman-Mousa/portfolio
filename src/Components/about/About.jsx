import { useRef } from 'react';
import './about.scss';
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

const About = () => {
    const ref = useRef();
    const isInView = useInView(ref, {margin:"-200px"});
  return (
    <div id='About' className='about' ref={ref}>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial" }
      className='about-title'>
         <h1>About ME</h1>
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial" }
      className='about-sections'> 
         <div className='about-left'>
            <img src='/ME.JPG' />
         </div>
         <motion.div
           variants={listVariants}
           animate={isInView ? "animate" : "initial" }
         className='about-right'>
           <div className='about-para'>
              <p>I am a front-end developer with experience in HTML, CSS (Tailwind, Bootstrap, SCSS) and JavaScript (React). I have worked with C++ and SQL, and I have experience using Firebase for backend integration and real-time data management. I am dedicated, adaptable, and able to perform well under pressure. I am always eager to enhance my skills and knowledge to achieve the best results. I design visually appealing and user-friendly interfaces using tools like Figma.</p>
              <p className='para'>
              "I am passionate about Front-End Development because it allows me to bring ideas and designs to life through interactive and visually appealing interfaces. I enjoy working with modern technologies like React.js and Next.js to create smooth and efficient user experiences." </p>
           </div>

          <div className="about-skills">
            <div className="about-skill">
             <p>HTML & CSS</p>
              <div className="skill-bar" style={{ width: "50%" }}></div>
           </div>
            <div className="about-skill">
             <p>REACT JS</p>
              <div className="skill-bar" style={{ width: "70%" }}></div>
            </div>
           <div className="about-skill">
             <p>JAVASCRIPT</p>
             <div className="skill-bar" style={{ width: "60%" }}></div>
           </div>
           <div className="about-skill">
             <p>NEXT JS</p>
             <div className="skill-bar" style={{ width: "50%" }}></div>
           </div>
          </div>
         </motion.div>
      </motion.div>
    </div>
  )
}

export default About
