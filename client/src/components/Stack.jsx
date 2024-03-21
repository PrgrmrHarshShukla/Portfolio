// import React from 'react'

function Stack(props) {
  return (
    <div className="min-h-[500px] sm:min-h-[370px] w-screen px-8 flex flex-col sm:flex-row pb-[100px] mt-8">

      <div className={`min-h-[100px] sm:h-auto sm:w-1/3 text-3xl flex flex-row justify-center items-start ${props.isDark ? "text-white " : "text-black "} font-semibold`}>
         <p>Skill set</p>
      </div>

      <div className={`sm:w-2/3 sm:max-w-[500px] ${props.isDark ? "text-white " : "text-black "} flex flex-col justify-start gap-8 sm:gap-4 text-[15px] sm:text-lg`}>
        <p>
          NextJS, ReactJS, TypeScript, JavaScript, TailwindCSS, Semantic HTML, CSS, MongoDB & Atlas, PostgreSQL, Prisma
        </p>  
        <p>
          Firebase<i> (Backend as a service)</i>, Prettier, EsLint, Terminal, Version Control <i>(Git)</i>, Vercel, Netlify, Render <i>(Hosting service)</i>, Analytics
        </p>  
        <p>
          Python, C/C++
        </p>
        {/* <p>
          On my soft side, I am a responsible-careful-creative-strong-willed-detail-oriented-optimistic-ever-learning-polite and hard-working person. 
        </p>  */}
                     
      </div>

    </div>
  )
}

export default Stack