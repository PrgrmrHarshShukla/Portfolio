// import React from 'react'

function Experience(props) {
   return (
     <div className="min-h-[300px] sm:h-auto w-screen px-8  flex flex-col sm:flex-row pb-[100px] sm:">
 
       <div className={`min-h-[100px] sm:w-1/3 text-3xl flex flex-row justify-center items-start ${props.isDark ? "text-white " : "text-black "} font-semibold `}>
          <p>Experience</p>
       </div>
 
       <div className={`sm:w-2/3 sm:gap-12 sm:max-w-[500px] ${props.isDark ? "text-white " : "text-black "} flex flex-col justify-around gap-8 sm:gap-2 text-[15px] sm:text-lg`}>
         <p>
           ⭐ Did freelancing remotely for a few months, worked on client projects, and learned a lot of things.
         </p>    
         <p>
           ⭐ Currently, I am working remotely on contract basis for a freelancing firm and learning new things.
         </p>              
         <p>
           ⭐ Making contributions to amazing open source projects.
         </p>              
                   
       </div>
 
     </div>
   )
 }
 
 export default Experience