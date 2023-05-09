import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css'


function About() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);


   return (
      <div className="flex flex-col bg-image bg-center bg-cover w-screen h-screen pl-4 rounded-br-[200px] border-b-2 pb-8">

         <div className="h-1/6 flex flex-row justify-end items-center text-white pr-20">
            <p className="bg-yellow-500 hover:bg-gradient-to-tr from-sky-500 to-yellow-500 rounded-full p-1 text-black">
               Building in Public
            </p>
         </div>
         <div className="h-3/5 flex flex-col justify-center items-start text-left lg:items-center lg:text-center">
            <div className={`flex flex-col gap-4 ${
            show ? "transform translate-x-0 transition ease-in duration-1000" : "transform translate-x-full"
            }`}>
               <h1 className="text-white text-3xl hover:text-red-400  transition-all duration-1000 ease-in-out">Hello,</h1>
               <h1 className="text-white text-5xl font-serif">
                  <span className="hover:text-sky-200 transition-all duration-75">My</span>
                  <span className="hover:text-sky-200 transition-all duration-500"> name</span>
                  <span className="hover:text-sky-200 transition-all duration-500"> is </span>
                  <span className="hover:text-sky-300 transition-all duration-500 font-semibold">Harsh Shukla</span>
               </h1>
               <h1 className="text-white text-3xl font-semibold font-serif hover:ml-8 hover:text-red-600 transition-all duration-500">
                  Front-End Developer
               </h1>
            </div>
         </div>

         
         <div className={`h-1/4 flex flex-col justify-center items-start text-left text-white text-xl lg:items-center lg:text-left ${
         show ? "transform translate-x-0 transition ease-in duration-1000" : "transform translate-x-full"
         }`}>
            <p>I am a CSE undergraduate, with a passion</p>
            <p>for building things that have </p>
            <p>actual real world utility.</p>
            <p className="mt-4 text-2xl font-bold text-white">Do checkout my</p>
            <p className="hover:text-sky-200 font-bold">
               <a href="https://github.com/PrgrmrHarshShukla" target="_blank" rel="noopener" alt="GitHub">
                  Open Source Contributions
               </a>
            </p>            
         </div>


         <div className={`h-1/4 flex flex-col justify-end items-start text-red-500 hover:text-red-700 font-bold font-serif text-3xl  transition-all lg:items-center lg:text-center ${
         show ? "transform translate-x-0 ease-in-out transition duration-1000" : "transform translate-y-full"
         }`}>
            <h3>Hopefully I can help you.</h3>
         </div>
      </div>
    )
}

export default About
