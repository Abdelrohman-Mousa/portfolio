import { useRef } from "react";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import Counter from "./Counter";
import "./services.scss";
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

const services = [
    {
        id: 1,
        img: "/creative.png",
        title: "Front End Developer",
        counter: 35,
    },
    {
        id: 2,
        img: "/accounting.png",
        title: "Accountant",
        counter: 15,
    },
    {
        id: 1,
        img: "/seo.png",
        title: "Digital Markting",
        counter: 12,
    },
];


const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, {margin:"-200px"});
  return (
    <div id="Services" className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1 
          variants={textVariants}
          animate={isInView ? "animate" : "initial" }
        className="sTitle" 
        >
        My Services
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial" }
        className="serviceList">
            {services.map((service) => (
                <motion.div 
                  variants={listVariants}
                  className="service" key={service.id}>
                    <div className="serviceIcon">
                       <img src={service.img} />
                    </div>
                    <div className="serviceInfo">
                       <h2>{service.title}</h2>
                       <h3>{service.counter} Projects</h3>
                    </div>
                </motion.div>
            ))}
        </motion.div>
        <div className="counterList">
           <Counter from={0} to={104} text="Projects Completed"/>
           <Counter from={0} to={22} text="Happy Clients"/>
        </div>
      </div>
      <div className="sSection right">
        <ComputerModelContainer />
      </div>
    </div>
  )
}

export default Services
