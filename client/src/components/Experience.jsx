// import React from 'react'

function Experience(props) {
   return (
     <div className="min-h-[300px] sm:h-auto w-screen px-8  flex flex-col sm:flex-row pb-[100px] sm:">
 
       <div className={`min-h-[100px] sm:w-1/3 text-3xl flex flex-row justify-center items-start ${props.isDark ? "text-white " : "text-black "} font-semibold `}>
          <p>Experience</p>
       </div>
 
       <div className={`sm:w-2/3 sm:gap-12 sm:max-w-[500px] ${props.isDark ? "text-white " : "text-black "} flex flex-col justify-around gap-8 sm:gap-12 text-[15px] sm:text-lg`}>
         <div className="flex flex-row gap-2">
           <div className="">⭐</div>
           <div>Doing freelancing remotely, working on client projects, and learning a lot of cool things.</div>
         </div>    
         <div className="flex flex-row gap-2">
           <div className="">⭐</div>
           <div>Worked remotely on contract basis for a freelancing firm and learned a lot of new things.</div>
         </div>              
         <div className="flex flex-row gap-2">
           <div className="">⭐</div>
           <div>Making contributions to amazing Open Source codebases.</div>
         </div>              
                   
       </div>
 
     </div>
   )
 }
 
 export default Experience