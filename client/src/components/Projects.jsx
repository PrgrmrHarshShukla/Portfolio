// import React from 'react'

function Projects() {
  return (
    <div className="border-t-2 border-b border-white rounded-[80px]  w-screen bg-gradient-to-b from-green-500 via-blue-500 to-yellow-500 px-8 pb-16">

        <div className="min-h-[100px] flex flex-col items-center justify-center text-3xl hover:text-4xl hover:text-purple-900 text-purple-300 ">
          <p className="font-bold"><u>MY PROJECTS</u></p>
        </div>

        <div className="min-h-screen border-b-8 border-t-8 border-black rounded-[40px] py-4 px-4 flex flex-row flex-wrap justify-around gap-8 items-center">

          <div className="border-2 rounded-[5px] border-black text-center min-h-[300px] max-w-[300px] max-h-[300px] p-2 flex flex-col justify-between">
            <strong className="text-2xl"><u>S-Mart</u></strong>
            <p className="text-lg opacity-30 hover:opacity-100">This is a React app with full fledged e-commerce functionality. I made it using ReactJS & TailwindCSS. I also used react-router-dom, stripe payments, firebase authentication, etc.</p>
            <div className="flex flex-row gap-4 justify-center">
              <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-[5px] px-1" target="_blank" rel="noopener" href="https://s-mart-e-commerce.netlify.app/">Live</a>
              <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-[5px] px-1" target="_blank" rel="noopener" href="https://github.com/PrgrmrHarshShukla/S-Mart">GitHub</a>
            </div>
          </div>

          <div className="border-2 rounded-[5px] border-black text-center min-h-[300px] max-w-[300px] max-h-[300px] p-2 flex flex-col justify-between">
            <strong className="text-2xl"><u>To-Do List App</u></strong>
            <p className="text-lg opacity-30 hover:opacity-100">This is the legacy To-Do List App. I made it using ReactJS & TailwindCSS.</p>
            <div className="flex flex-row gap-4 justify-center">
              <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-[5px] px-1" target="_blank" rel="noopener" href="https://legacy-to-do-list-web-app.netlify.app/">Live</a>
              <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-[5px] px-1" target="_blank" rel="noopener">GitHub</a>
            </div>
          </div>

          <div className="border-2 rounded-[5px] border-black text-center min-h-[300px] max-w-[300px] max-h-[300px] p-2 flex flex-col justify-between">
            <strong className="text-2xl"><u>Tic-Tac-Toe</u></strong>
            <p className="text-lg opacity-30 hover:opacity-100">This is the legacy Tic-Tac-Toe Game. I made it using ReactJS.</p>
            <div className="flex flex-row gap-4 justify-center">
              <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-[5px] px-1" target="_blank" rel="noopener" href="https://legacy-tic-tac-toe-web-app.netlify.app/">Live</a>
              <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-[5px] px-1" target="_blank" rel="noopener" href="https://github.com/PrgrmrHarshShukla/Tic-Tac-Toe-Game">GitHub</a>
            </div>
          </div>

          <div className="border-2 rounded-[5px] border-black text-center min-h-[300px] max-w-[300px] max-h-[300px] p-2 flex flex-col justify-between">
            <strong className="text-2xl"><u>CountDown Timer</u></strong>
            <p className="text-lg opacity-30 hover:opacity-100">This is a count-down timer. I made it using basic HTML, CSS & JavaScript.</p>
            <div className="flex flex-row gap-4 justify-center">
              <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-[5px] px-1" target="_blank" rel="noopener" href="https://count-down-timer-web-app.netlify.app/">Live</a>
              <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-[5px] px-1" target="_blank" rel="noopener" href="https://github.com/PrgrmrHarshShukla/CountDown-Timer">GitHub</a>
            </div>
          </div>


              
        </div>
    </div>
  )
}

export default Projects