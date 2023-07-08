// import React from 'react'

function Stack(props) {
  return (
    <div className="min-h-[500px] w-screen px-8  flex flex-col sm:flex-row pb-[100px]">

      <div className={`min-h-[100px] sm:w-1/3 text-3xl flex flex-row justify-center items-start sm:pt-[70px] ${props.isDark ? "text-white " : "text-black "} font-semibold`}>
         <p>Skills</p>
      </div>

      <div className={`sm:w-2/3 sm:max-w-[500px] ${props.isDark ? "text-white " : "text-black "} flex flex-col justify-around gap-8 sm:gap-0 text-[15px] sm:text-lg`}>
        <p>
          React, JavaScript, Firebase<i> (Backend as a service)</i>, TailwindCSS, Semantic HTML, CSS, Prettier, EsLint, Terminal, Version Control
        </p>    
        <p>
          On my soft side, I am a responsible-careful-creative-strong-willed-detail-oriented-optimistic-ever-learning-and-polite, hard-working person. 
        </p>              
      </div>

    </div>
  )
}

export default Stack