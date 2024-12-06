// import React from 'react'

function Stack(props) {
  return (
    <div className="min-h-[500px] sm:min-h-[370px] w-screen px-8 flex flex-col sm:flex-row pb-[100px] mb-4 mt-20">

      <div className={`min-h-[100px] sm:h-auto sm:w-1/3 text-3xl flex flex-row justify-center items-start ${props.isDark ? "text-white " : "text-black "} font-semibold`}>
         <p>Tech Stack</p>
      </div>

      <div className={`sm:w-2/3 sm:max-w-[490px] ${props.isDark ? "text-white " : "text-black "} flex flex-col justify-start gap-8 sm:gap-4 text-[15px] sm:text-lg`}>
        <p>
          <strong className="underline">Tech Stack (Web)</strong>:  Next.js, React.js, Node.js, Express.js, Django
        </p>
        <p>
          <strong className="underline">Tech Stack (Android)</strong>:  React Native and Expo
        </p>
        <p>
          <strong className="underline">Styling</strong>:  TailwindCSS, ShadCN, ChakraUI
        </p>
        <p>
          <strong className="underline">Languages</strong>:  JavaScript, TypeScript, C/C++, Python
        </p>
        <p>
          <strong className="underline">Databases</strong>:  PostgreSQL, MongoDB
        </p>
        <p>
          <strong className="underline">Miscellaneous</strong>:  Prisma, Vercel, Netlify, Leetcode, Codeforces, Firebase, Render, Git, GitHub, AWS, Docker, RESTful APIs, GraphQL, WebSockets, OAuth, JWT
        </p>
                     
      </div>

    </div>
  )
}

export default Stack