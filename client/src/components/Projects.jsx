// import React from 'react'

function Projects(props) {
  return (
    <div id="projects" className="w-screen px-8 pb-16 flex flex-col pt-[100px] sm:flex-row">

        <div className={`sm:w-1/3 w-5/6 py-[100px] gap-16 text-center flex sm:flex-col flex-row items-center sm:justify-between text-2xl ${props.isDark ? "text-white " : "text-black "}`}>
          <p className="font-semibold">Built in Public</p>
          {/* <div className="flex flex-col gap-4 justify-center items-center text-center text-xl">
            <i className="fas fa-book"></i>
            <p>Right now, I am learning TypeScript</p>
          </div> */}
        </div>

        <div className={`sm:w-2/3 w-screen lg:w-1/2 min-h-screen py-[100px] flex flex-col justify-around gap-8 lg:items-start items-center ${props.isDark ?  "text-white " : "text-black "} pr-16`}>

          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <div className="text-left p-2 flex flex-col justify-between gap-8">            
            <div className="flex flex-row justify-between">
              <strong className="text-2xl"><u>S-Mart</u></strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full px-4" target="_blank" rel="noopener" href="https://s-mart-e-commerce.netlify.app/">Live</a>
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full px-4" target="_blank" rel="noopener" href="https://github.com/PrgrmrHarshShukla/S-Mart">GitHub</a>
              </div>
            </div>
            <p className="text-lg lg:max-w-[500px]">This web app has full fledged e-commerce functionality. I made it using ReactJS & TailwindCSS, firebase authentication, etc.</p>
          </div>


          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <div className="text-left p-2 flex flex-col justify-between gap-8">            
            <div className="flex flex-row justify-between">
              <strong className="text-2xl"><u>FireChat</u></strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full px-4" target="_blank" rel="noopener" href="https://github.com/PrgrmrHarshShukla/FireChat">GitHub</a>
              </div>
            </div>
            <p className="text-lg lg:max-w-[500px]">This is a real-time chat app. I made this using ReactJS, TailwindCSS and Socket.io.</p>
          </div>

          
          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <div className="text-left p-2 flex flex-col justify-between gap-8">            
            <div className="flex flex-row justify-between">
              <strong className="text-2xl"><u>Contest Tracker</u></strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full px-4" target="_blank" rel="noopener" href="https://upcoming-coding-contests.netlify.app/">Live</a>
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full px-4" target="_blank" rel="noopener" href="https://github.com/PrgrmrHarshShukla/Upcoming-Coding-Contests">GitHub</a>
              </div>
            </div>
            <p className="text-lg lg:max-w-[500px]">This website gives a list of the upcoming coding contests, alongwith the date, starting time and organising site url.</p>
          </div>



          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <div className="text-left p-2 flex flex-col justify-between gap-8">            
            <div className="flex flex-row justify-between">
              <strong className="text-2xl"><u>To-Do List App</u></strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full px-4" target="_blank" rel="noopener" href="https://legacy-to-do-list-web-app.netlify.app/">Live</a>
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full px-4" target="_blank" rel="noopener" href="">GitHub</a>
              </div>
            </div>
            <p className="text-lg lg:max-w-[500px]">This is the legacy To-Do List App. I made it using ReactJS & TailwindCSS.</p>
          </div>


          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <div className="text-left p-2 flex flex-col justify-between gap-8">            
            <div className="flex flex-row justify-between">
              <strong className="text-2xl"><u>Tic-Tac-Toe</u></strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full px-4" target="_blank" rel="noopener" href="https://legacy-tic-tac-toe-web-app.netlify.app/">Live</a>
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full px-4" target="_blank" rel="noopener" href="https://github.com/PrgrmrHarshShukla/Tic-Tac-Toe-Game">GitHub</a>
              </div>
            </div>
            <p className="text-lg lg:max-w-[500px]">This is the legacy Tic-Tac-Toe Game. I made it using the basic concepts of ReactJS.</p>
          </div>


          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <div className="text-left p-2 flex flex-col justify-between gap-8">            
            <div className="flex flex-row justify-between">
              <strong className="text-2xl"><u>CountDown Timer</u></strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full px-4" target="_blank" rel="noopener" href="https://count-down-timer-web-app.netlify.app/">Live</a>
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full px-4" target="_blank" rel="noopener" href="https://github.com/PrgrmrHarshShukla/CountDown-Timer">GitHub</a>
              </div>
            </div>
            <p className="text-lg lg:max-w-[500px]">This is a count-down timer, made using HTML, CSS & JS. It takes an event and runs a countdown to it.</p>
          </div>


          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

              
        </div>
    </div>
  )
}

export default Projects