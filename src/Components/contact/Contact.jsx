import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';


const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};


const Contact = () => {

  const fromRef = useRef();
  const [ error, setError ] = useState(false);
  const [ success, setSuccess ] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uv4b8sq', 'template_d9ni09m', fromRef.current, {
        publicKey: '1wtAkqRzMP0zqrDeN',
      })
      .then((result) => {
          console.log('SUCCESS!');
          setSuccess(true);
        }, (error) => {
          console.log('FAILED...', error.text);
          setError(true);
        },
      );
  };

  return (
    <motion.div className="contact" id="Contact ME"
    variants={variants}
    initial="initial"
    whileInView= "animate"
    >
       <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}>Let's work together</motion.h1>
          <motion.div className="item" variants={variants}>
             <h2>Email</h2>
             <span>abdelrohmanmarey@gmail.com</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
             <h2>Address</h2>
             <span>Mansoura, Egypt</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
             <h2>Phone</h2>
             <span>+20 1126478733</span>
          </motion.div>
       </motion.div>
       <div className="formContainer">
        <form
          ref={fromRef}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Your Name" name="name" />
          <input type="email" required placeholder="Your Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Send Message</button>
          {error && "Error sending the message"}
          {success && "Message sent Successfully"}
        </form>
       </div>
    </motion.div>
  )
}

export default Contact
