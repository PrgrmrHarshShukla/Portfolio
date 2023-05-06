import React from 'react'

function Stack() {
  return (
    <div className="border-t border-b border-white rounded-[80px] min-h-screen  w-screen px-8 pb-8 bg-gradient-to-b from-yellow-500 via-red-400 to-yellow-500">

      <div className="min-h-[100px] text-3xl hover:text-5xl font-bold flex flex-row justify-center items-center opacity-30 hover:opacity-100 hover:text-purple-800">
         <p><u>My Tech Stack</u></p>
      </div>

      <div className="flex flex-row gap-20 min-h-[560px] text-4xl flex-wrap justify-center items-center border-t-8 border-b-8 border-black rounded-[80px] p-8 lg:pt-20 lg:gap-40">
        <p className="min-h-[50px] text-blue-500 hover:text-green-500 font-bold">HTML</p>                
        <p className="min-h-[50px] text-blue-500 hover:text-green-500 font-bold">CSS</p>                
        <p className="min-h-[50px] text-blue-500 hover:text-green-500 font-bold">TailwindCSS</p>                
        <p className="min-h-[50px] text-blue-500 hover:text-green-500 font-bold">JavaScript</p>                
        <p className="min-h-[50px] text-blue-500 hover:text-green-500 font-bold">ReactJS</p>                
        <p className="min-h-[50px] text-blue-500 hover:text-green-500 font-bold">Firebase</p>                
        <p className="min-h-[50px] text-blue-500 hover:text-green-500 font-bold">Stripe</p>                
        <p className="min-h-[50px] text-blue-500 hover:text-green-500 font-bold">Figma</p>                
        <p className="min-h-[50px] text-blue-500 hover:text-green-500 font-bold">Formspree</p>                       
      </div>

    </div>
  )
}

export default Stack