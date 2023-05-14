// import React from 'react'

function Stack() {
  return (
    <div className="min-h-[500px] w-screen px-8  flex flex-col sm:flex-row pb-[100px]">

      <div className="min-h-[100px] sm:w-1/3 text-3xl flex flex-row justify-center items-start sm:pt-[70px] text-black dark:text-white font-semibold">
         <p>Skills</p>
      </div>

      <div className="sm:w-2/3 sm:max-w-[500px] text-black dark:text-white flex flex-col justify-around gap-8 sm:gap-0 text-lg">
        <p>
            JavaScript, React, TailwindCSS, Semantic HTML, CSS, Prettier, EsLint, Terminal, Version Control
        </p>    
        <p>
          On my soft side, I am a responsible-careful-creative-strong-willed-detail-oriented-optimistic-ever-learning-and-polite, hard-working person. 
        </p>              
      </div>

    </div>
  )
}

export default Stack