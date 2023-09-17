import { useState } from 'react'
import data from './ProjectData';


function ProjectDescription() {
    const [index, setIndex] = useState(JSON.parse(localStorage.getItem('portfolio_project-index')))
    // console.log(typeof index);

    const projectData = data[index]
    const { name, live, repo, desc, details } = projectData

    const detailsList = details.map((item, index) => {
        return(
            <li key={index} className="flex flex-row items-center justify-start gap-[10px]">
                <span className="text-2xl">•</span>
                {item}
            </li>
        )
    })



    
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-400">

        <div className="max-w-[550px] w-[100vw] h-auto min-h-screen bg-sky-100 py-[2vh] sm:px-[1vw] px-[2vw]">
            <span className="text-left font-bold text-4xl sm:text-6xl">{name}</span>
            <hr className="border border-black" />
            <div className="flex flex-row gap-4 justify-start items-center text-black mt-[2vh]">
              <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href={live}>Live</a>
              <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href={repo}>GitHub</a>
            </div>

            <div className="mt-[4vh] text-left text-[18px] max-w-[300px] sm:max-w-[420px]">
                {desc}
            </div>

            <div className="mt-[5vh] max-w-[300px] sm:max-w-[420px]">
                <span className="font-semibold text-[19px]">
                    <u>
                        Things I tackled during the project:
                    </u>
                </span>
                <ul  className="mt-[2vh] text-left text-[18px] max-w-[300px] sm:max-w-[420px]">
                    {detailsList}
                </ul>
            </div>
                    
        </div>
    </div>
  )
}

export default ProjectDescription