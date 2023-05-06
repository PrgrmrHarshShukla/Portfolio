// import React from 'react'

function Intro() {
  return (
      <div className="flex bg-gradient-to-b from-purple-900 to-white flex-col bg-image bg-center bg-cover w-screen h-screen justify-end items-start pb-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZSUyMDEwODB4MTkyMHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60')" }}>
         <div className="flex flex-col justify-center items-center text-center text-white text-xl pb-4 pl-4 hover:text-sky-300">
            <p>I am a CSE undergraduate,</p>
            <p>with a passsion for</p>
            <p>building things</p>
            <p>that have actual</p>
            <p>real world</p>
            <p>utility.</p>
            <p className="mt-8 text-2xl font-bold text-sky-500 hover:text-white">Do checkout my</p>
            <p className="hover:text-sky-200 font-bold">
               <a href="https://github.com/PrgrmrHarshShukla" target="_blank" rel="noopener" alt="GitHub">
                  Open Source Contributions
               </a>
            </p>
         </div>
      </div>
  )
}

export default Intro