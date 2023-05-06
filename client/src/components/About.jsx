// import React from 'react'
// import { useState } from 'react'

import '@fortawesome/fontawesome-free/css/all.css'
// import Background from "./background"

function About() {
   // const [isClicked, setIsClicked] = useState(false);

   // const handleClick = () => {
   //    setIsClicked(true);
   // }


   return (
      <div className="flex flex-col bg-image bg-center bg-cover w-screen h-screen" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp4288364.jpg')" }}>
         {/* {isClicked ?
         (
         <div className="flex text-2xl justify-center items-center text-white pt-4">
            <ul className="flex flex-row justify-center items-center w-full gap-4 border-b-4 border-white text-3xl">
               <li className="hover:bg-sky-300 hover:text-black hover:rounded-full p-1">About</li>
               <li className="hover:bg-sky-300 hover:text-black hover:rounded-full p-1">Projects</li>
               <li className="hover:bg-sky-300 hover:text-black hover:rounded-full p-1">Stack</li>
               <li className="hover:bg-sky-300 hover:text-black hover:rounded-full p-1">Contact</li>
            </ul>
         </div>
         )
         :
         (
         <div className="flex text-2xl justify-end items-center text-white pt-4 pr-16">
            <button onClick={handleClick}>
               <i className="fas fa-bars"></i>
            </button>
         </div>
         )} */}
         <div className="h-1/2 flex flex-col justify-center items-center text-left">
            <div className="flex flex-col gap-4">
               {/* <h1 className="text-white text-5xl font-bold hover:text-6xl transition-all duration-1000">👋🏼</h1> */}
               <h1 className="text-white text-3xl font-bold hover:text-red-900 hover:text-2xl hover:ml-8 transition-all duration-500">Hello,</h1>
               <h1 className="text-white text-5xl font-bold font-serif">
                  <span className="hover:text-green-600 transition-all duration-75">My</span>
                  <span className="hover:text-sky-600 transition-all duration-500"> name</span>
                  <span className="hover:text-green-500  transition-all duration-500"> is </span>
                  <span className="hover:text-green-600 hover:text-6xl transition-all duration-500">H</span>
                  <span className="hover:text-red-600 hover:text-6xl transition-all duration-500">a</span>
                  <span className="hover:text-blue-500 hover:text-6xl transition-all duration-500">r</span>
                  <span className="hover:text-red-600 hover:text-6xl transition-all duration-500">s</span>
                  <span className="hover:text-green-600 hover:text-6xl transition-all duration-500">h</span>
               </h1>
               <h1 className="text-black text-3xl font-bold font-serif hover:ml-8 hover:text-red-600 transition-all duration-500">
                  Web Developer
               </h1>
            </div>
         </div>


         <div className="h-1/2 flex flex-col justify-end items-center text-red-600 opacity-20 text-xl font-bold font-serif hover:text-3xl hover:opacity-100 transition-all">
            <h3>Hopefully I can help you.</h3>
         </div>
      </div>
    )
}

export default About
