import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css'


function About(props) {

  const [show, setShow] = useState(false);
//   console.log(props.isDark);

  useEffect(() => {
    setShow(true);
  }, []);



   return (
      <div className={`flex flex-col ${props.isDark ? "border-white " : "border-black "} w-screen h-screen pl-4 border-b-2`}>

         <div className="h-1/6 flex flex-row justify-between items-center text-white pr-12">
            <button className={`border-2 ${props.isDark ? "" : "border-black px-2.5 "} px-2 py-1 rounded-full`} onClick={props.toggle}>
               <i
                  className={`fas fa-${props.isDark == true ? "sun text-white" : "moon text-black"} text-lg`} 
               ></i>
            </button>
            
            
            <p className="bg-yellow-300 hover:bg-gradient-to-tr from-white to-yellow-500 rounded-full p-1 px-4 text-black">
               Building in Public
            </p>
         </div>
         <div className="h-3/5 flex flex-col justify-center items-start text-left lg:items-center lg:text-center">
            <div className={`flex flex-col gap-4 ${
            show ? "transform translate-x-0 transition ease-in duration-1000" : "transform translate-x-full"
            }`}>
               <h1 className={`${props.isDark ?  "text-white " : "text-black "} text-xl sm:text-3xl hover:text-red-400  transition-all duration-1000 ease-in-out`}>Hello,</h1>
               <h1 className={`${props.isDark ?  "text-white " : "text-black "} text-2xl sm:text-5xl font-serif`}>
                  <span className="hover:text-sky-500 dark:hover:text-sky-200 transition-all duration-75">My</span>
                  <span className="hover:text-sky-500 dark:hover:text-sky-200 transition-all duration-500"> name</span>
                  <span className="hover:text-sky-500 dark:hover:text-sky-200 transition-all duration-500"> is </span>
                  <span className="hover:text-sky-700 dark:hover:text-sky-300 transition-all duration-500 font-semibold">Harsh Shukla</span>
               </h1>
               <h1 className={`${props.isDark ?  "text-white " : "text-black "} text-xl sm:text-3xl font-semibold font-serif hover:ml-8 hover:text-red-600 transition-all duration-500`}>
                  Front-End Developer
               </h1>
            </div>
         </div>

         
         <div className={`h-1/3 flex flex-col justify-center sm:mb-0 mb-2 items-start text-left ${props.isDark ?  "text-white " : "text-black "} text-[15px] sm:text-xl lg:items-center lg:text-left ${
         show ? "transform translate-x-0 transition ease-in duration-1000" : "transform translate-x-full"
         }`}>
            <p>I am a CSE undergraduate, with a passion</p>
            <p>for building things that have </p>
            <p>real world utility.</p>
            {/* <p className="mt-4 text-lg sm:text-2xl mb-2">Do checkout my</p>
            <p className={`hover:cursor-pointer font-semibold lg:border-2 lg:rounded-full lg:px-8 ${props.isDark ?  "border-white " : "border-black "} hover:bg-blue-100 hover:text-black`}>
               <a href="https://github.com/PrgrmrHarshShukla" target="_blank" rel="noreferrer">
                  Open Source Contributions
               </a>
            </p>             */}
         </div>


      </div>
    )
}

export default About
