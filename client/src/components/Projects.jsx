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
              <strong className="text-[17px] sm:text-2xl">S-Mart</strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href="https://s-mart-e-commerce.netlify.app/">Live</a>
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href="https://github.com/PrgrmrHarshShukla/S-Mart">GitHub</a>
              </div>
            </div>
            <p className="text-[15px] sm:text-lg lg:max-w-[500px]">This web app has full fledged e-commerce functionality. I made it using ReactJS & TailwindCSS, firebase authentication, etc.</p>
          </div>


          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <div className="text-left p-2 flex flex-col justify-between gap-8">            
            <div className="flex flex-row justify-between">
              <strong className="text-[17px] sm:text-2xl">FireChat</strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href="https://github.com/PrgrmrHarshShukla/FireChat">GitHub</a>
              </div>
            </div>
            <p className="text-[15px] sm:text-lg lg:max-w-[500px]">This is a real-time chat app. I made this using ReactJS, TailwindCSS and Socket.io.</p>
          </div>

          
          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <div className="text-left p-2 flex flex-col justify-between gap-8">            
            <div className="flex flex-row justify-between">
              <strong className="text-[17px] sm:text-2xl">Tracker</strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href="https://upcoming-coding-contests.netlify.app/">Live</a>
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href="https://github.com/PrgrmrHarshShukla/Upcoming-Coding-Contests">GitHub</a>
              </div>
            </div>
            <p className="text-[15px] sm:text-lg lg:max-w-[500px]">This website gives a list of the upcoming coding contests, alongwith the date, starting time and organising site url.</p>
          </div>




          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <div className="text-left p-2 flex flex-col justify-between gap-8">            
            <div className="flex flex-row justify-between">
              <strong className="text-[17px] sm:text-2xl">Tic-Tac-Toe</strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href="https://legacy-tic-tac-toe-web-app.netlify.app/">Live</a>
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href="https://github.com/PrgrmrHarshShukla/Tic-Tac-Toe-Game">GitHub</a>
              </div>
            </div>
            <p className="text-[15px] sm:text-lg lg:max-w-[500px]">This is the legacy Tic-Tac-Toe Game. I made it using the basic concepts of ReactJS.</p>
          </div>


          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <div className="text-left p-2 flex flex-col justify-between gap-8">            
            <div className="flex flex-row justify-between">
              <strong className="text-[17px] sm:text-2xl">Timer</strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href="https://count-down-timer-web-app.netlify.app/">Live</a>
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href="https://github.com/PrgrmrHarshShukla/CountDown-Timer">GitHub</a>
              </div>
            </div>
            <p className="text-[15px] sm:text-lg lg:max-w-[500px]">This is a count-down timer, made using HTML, CSS & JS. It takes an event from the user and runs a countdown to it.</p>
          </div>


          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

              
        </div>
    </div>
  )
}

export default Projects