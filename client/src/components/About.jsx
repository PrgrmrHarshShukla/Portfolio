import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.css'
import { useState } from 'react';


function About(props) {
   const isDark = props.isDark;
   const [running, setRunning] = useState(true);
   const [pop, setPop] = useState(false);

   const handleClick = () => {
      window.open("https://drive.google.com/file/d/16BAN08MS9NOfRulyz3JLC8C9sQ7aIrr9/view", "_blank");
   }

   return (
      <div className={`flex flex-col ${props.isDark ? "border-white " : "border-black "} justify-between w-screen h-screen pl-4 border-b-2`}>

         <div className="h-1/6 flex flex-row justify-between items-center text-white px-4 md:px-8 w-full">
            <button className={`flex justify-center items-center border-2 ${props.isDark ? "" : "border-black "} p-4 rounded-full h-8 w-8`} onClick={props.toggle}>
               <i
                  className={`fas fa-${props.isDark == true ? "sun text-white" : "moon text-black"} `} 
               ></i>
            </button>          
            <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.9 }}
               transition={{ duration: 0.3, ease: "easeInOut" }}
               onClick={handleClick}
               title="Resume Link" 
               className="bg-yellow-300 hover:bg-gradient-to-tr from-white to-yellow-500 rounded-full p-1 px-4 text-black flex justify-center items-center"
            >
               <button>
                  Resume Link
               </button>
            </motion.button>
         </div>
         
         <div className="h-3/5 flex flex-col justify-center items-start text-left lg:items-center lg:text-center -mt-4">
         <motion.div
            whileHover={{ scale: 1.15 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`flex flex-col gap-4 ${isDark ? "text-white " : "text-black "
            }`}
         >
            <h1
            className={`${
               isDark ? "text-white " : "text-black "
            } text-xl sm:text-3xl hover:text-yellow-600  transition-all duration-1000 ease-in-out`}
            >
            Hello there,
            </h1>
            <h1
            className={`${
               isDark ? "text-white " : "text-black "
            } text-2xl sm:text-5xl font-serif`}
            >
            <span className="hover:text-sky-500 dark:hover:text-sky-200 transition-all duration-500">
               This
            </span>
            <span className="hover:text-sky-500 dark:hover:text-sky-200 transition-all duration-500">
               {" "}
               is{" "}
            </span>
            <span className="hover:text-sky-700 dark:hover:text-sky-300 transition-all duration-500 font-semibold">
               Harsh Shukla
            </span>
            </h1>
            <motion.div
               // whileHover={{ scale: 1.05 }}
               // whileTap={{ scale: 0.9 }}
               // transition={{ duration: 0.3, ease: "easeInOut" }}
               className={`${
                  isDark ? "text-white" : "text-black"
               } text-xl sm:text-2xl font-semibold font-serif`}
            >
               Full Stack Web & Mobile App Developer
            </motion.div>
         </motion.div>
         </div>

         
         <div className="relative w-full h-16 overflow-hidden">
            <motion.div
               animate={{ 
                     x: ["-100%", "90vw"] 
               }}
               transition={{
                     repeat: Infinity,
                     repeatType: "reverse",
                     duration: 4,
                     ease: "linear",
               }}
               className="absolute w-20 h-20"
            >
               {running ?
                  <div
                     onClick={() => {
                        setRunning(false);
                        setPop(true);
                        setTimeout(() => {
                           setPop(false);
                        }, 1000);
                     }}
                  >
                     <img
                        src="/gifs/ball.png"
                        alt="Cartoon Character"
                        className="w-full h-full object-contain"
                     />
                  </div>
                  : 
                  null
               }
               {pop ?
                  <div>
                     <img
                        src="/gifs/burst.png"
                        alt="Cartoon Character"
                        className="w-10 h-10 object-contain"
                     />
                  </div>
               : null
               }
            </motion.div>
         </div>


      </div>
    )
}

export default About


About.propTypes = {
   isDark: PropTypes.bool.isRequired,
   toggle: PropTypes.func.isRequired
}
