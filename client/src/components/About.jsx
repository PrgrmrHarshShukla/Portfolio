import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.css'


function About(props) {
   const isDark = props.isDark;

   const handleClick = () => {
      window.open("https://drive.google.com/file/d/16BAN08MS9NOfRulyz3JLC8C9sQ7aIrr9/view", "_blank");
   }

   return (
      <div className={`flex flex-col ${props.isDark ? "border-white " : "border-black "} w-screen h-screen pl-4 border-b-2`}>

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
         
         <div className="h-3/5 flex flex-col justify-center items-start text-left lg:items-center lg:text-center">
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

         
         <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`h-1/3 flex flex-col justify-center sm:mb-0 mb-2 items-start text-left ${props.isDark ?  "text-white " : "text-black "} text-[15px] sm:text-xl lg:items-center lg:text-left 
            }`}
         >
            <p>I am pursuing my CSE undergrad degree,</p>
            <p>with a passion for building things</p>
            <p>that have real world utility.</p>
         </motion.div>


      </div>
    )
}

export default About


About.propTypes = {
   isDark: PropTypes.bool.isRequired,
   toggle: PropTypes.func.isRequired
}
