import { useState } from 'react';
import data from './ProjectData';
import ProjectTemplate from './ProjectTemplate';


function Projects(props) {
  const [showAll, setShowAll] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    

  }


  const projects = data.slice(0, showAll ? data.length : 3).map((project, index) => {
    return(<>
      <ProjectTemplate 
        key={index}
        index={index}
        onClick={handleClick}
        isDark={props.isDark} 
        name={data[index].name}
        live={data[index].live}
        hasLive={data[index].hasLive}
        hasPublicRepo={data[index].hasPublicRepo}
        repo={data[index].repo}
        desc={data[index].desc}
      />
      <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />
      </>
    )
  })


  return (
    <div id="projects" className="w-screen px-8 pb-16 flex flex-col pt-[100px] sm:flex-row">

        <div className={`sm:w-1/3 w-5/6 py-[100px] gap-16 text-center flex sm:flex-col flex-row items-center sm:justify-between text-2xl ${props.isDark ? "text-white " : "text-black "}`}>
          <p className="font-semibold">My Projects</p>
        </div>

        <div className={`sm:w-2/3 w-screen lg:w-1/2 min-h-screen py-[100px] flex flex-col justify-around gap-8 lg:items-start items-center ${props.isDark ?  "text-white " : "text-black "} pr-16`}>

          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          {projects}          
          
          <div
            className='w-full justify-center items-center flex flex-row'
          >
            {!showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="mt-4 px-4 py-2 border-2 border-gray-800 bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] text-black" 
              >
                Show More
              </button>
            )}
            {showAll && (
              <button
                onClick={() => setShowAll(false)}
                className="mt-4 px-4 py-1 font-semibold border-2 border-gray-800 bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] text-black" 
              >
                Show Less
              </button>
            )}
          </div>
              
        </div>



    </div>
  )
}

export default Projects