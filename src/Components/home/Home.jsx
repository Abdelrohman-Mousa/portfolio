import React, { useRef } from 'react';
import "./home.scss";
import { motion, useInView } from "framer-motion"; 
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter';

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


const Home = () => {

  const [text] = useTypewriter({
    words: ['Front-end Developer', 'UI & UX Designer', 'Accountant', 'Real estate'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  

  const ref = useRef();
  const isInView = useInView(ref, {margin:"-200px"});
  return (
    <div className='home' ref={ref}>
      <div className='info'>
         <motion.h1
           variants={textVariants}
           animate={isInView ? "animate" : "initial" }
         > Welcome to my profile.
         </motion.h1>
         <motion.div
           className='detail'
           variants={listVariants}
           animate={isInView ? "animate" : "initial" }
         >
         <h2 className='name'> I'm Abdelrhman Marei</h2>
         <h2 className='position'>
          a <span>{text}</span>
           <Cursor 
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor='#58b1ff'
           />
         </h2>
         <h3>Hi, I’m Abdulrahman _ a tech enthusiast who loves turning ideas into smart, user-focused digital solutions. I learn fast, adapt quickly, and enjoy the challenge of continuous growth.</h3>
         </motion.div>
         <motion.div
           variants={listVariants}
           animate={isInView ? "animate" : "initial" }
         className='social'>
           <a href='https://www.facebook.com/abdelrohmanmoussa' target='blank'><img src="./facebook.png" alt="" /></a>
           <a href='https://www.instagram.com/marey__2004/' target='blank'><img src="./instagram.png" alt="" /></a>
           <a href='https://x.com/AbdelrohmanMar1' target='blank'><img src="./twitter.png" alt="" /></a>
           <a href='https://www.linkedin.com/in/abdelrhman-marei-978904255/' target='blank'><img src="./linkedin.png" alt="" /></a>
           <a href='https://wa.me/201126478733?text=مرحبًا، انا عبدالرحمن يمكننا التواصل خاص علي هذا الرقم' target='blank'><img src="./whatsapp.png" alt="" /></a>
           <a href='https://t.me/AbdelrhmanMarei?start=Hello' target='blank'><img src="./telegram.png" alt="" /></a>
           <a href='https://github.com/Abdelrohman-Mousa' target='blank'><img src="./github.png" alt="" /></a>
           <a href="mailto:abdelrohmanmarey@gmail.com?subject=Hello&body=I would like to connect" target="blank"><img src="./email.png" alt="Email" /></a>
         </motion.div>
      </div>
      <div className='personalImg'>
         <img src="./ME1.png" alt="" />
      </div>
      <img className='down' src='./arrow-down.png'/>
      <img className='down down2' src='./arrow-down.png'/>
      <img className='down down3' src='./arrow-down.png'/>
    </div>
  )
}

export default Home
