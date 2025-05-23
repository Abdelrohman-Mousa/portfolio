import { useState } from 'react';
import { delay, motion } from "framer-motion";
import Links from './links/Links';
import './sidebar.scss';
import ToggleButtons from './toggleButtons/ToggleButtons';

const variants = {
    open:{
        clipPath: "circle(1200px at 100% 80px)",
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
    closed: {
       clipPath: "circle(25px at 83.4% 48px)",
       transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
       }
    }
}

const Sidebar = () => {
    const [open, setOpen ] = useState(false);



  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
        <motion.div className='bg' variants={variants}>
           <Links />
        </motion.div>
        <ToggleButtons setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
