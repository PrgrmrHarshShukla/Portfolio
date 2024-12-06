// import React from 'react'

function Stack(props) {
  return (
    <div className="min-h-[500px] sm:min-h-[370px] w-screen px-8 flex flex-col sm:flex-row pb-[100px] mb-4 mt-20">

      <div className={`min-h-[100px] sm:h-auto sm:w-1/3 text-3xl flex flex-row justify-center items-start ${props.isDark ? "text-white " : "text-black "} font-semibold`}>
         <p>Tech Stack</p>
      </div>

      <div className={`sm:w-2/3 sm:max-w-[490px] ${props.isDark ? "text-white " : "text-black "} flex flex-col justify-start gap-8 sm:gap-4 text-[15px] sm:text-lg`}>
        <p>
          Next.js, React.js, TypeScript, JavaScript, TailwindCSS, PostgreSQL, Prisma ORM, Node.js, Express.js, MongoDB & Atlas, Semantic HTML, CSS
        </p>  
        <p>
          Firebase, Version Control <i>(Git)</i>, Vercel, Netlify, Render <i>(Hosting service)</i>, Analytics
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