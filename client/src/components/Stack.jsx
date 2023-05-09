// import React from 'react'

function Stack() {
  return (
    <div className="min-h-[600px] w-screen px-8 border-t-2 border-b-2 border-white rounded-tl-[200px] rounded-br-[200px] mt-8 flex flex-col sm:flex-row pt-[100px] pb-[100px]">

      <div className="min-h-[100px] sm:w-1/3 text-3xl flex flex-row justify-center items-start sm:pt-[80px] text-white font-semibold">
         <p>Skills</p>
      </div>

      <div className="sm:w-2/3 sm:max-w-[500px] text-white flex flex-col justify-around">
        <div>
            JavaScript, React, TailwindCSS, Accessible & Semantic HTML, Prettier, EsLint, Terminal, Version Control
        </div>    
        <div>
          On my soft side, I am a responsible-careful-creative-strong-willed-detail-oriented-optimistic-ever-learning-and-polite, hard-working person. 
        </div>              
      </div>

    </div>
  )
}

export default Stack