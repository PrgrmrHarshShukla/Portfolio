import data from './ProjectData';
import ProjectTemplate from './ProjectTemplate';


function Projects(props) {

  // console.log(data)


  return (
    <div id="projects" className="w-screen px-8 pb-16 flex flex-col pt-[100px] sm:flex-row">

        <div className={`sm:w-1/3 w-5/6 py-[100px] gap-16 text-center flex sm:flex-col flex-row items-center sm:justify-between text-2xl ${props.isDark ? "text-white " : "text-black "}`}>
          <p className="font-semibold">Built in Public</p>
        </div>

        <div className={`sm:w-2/3 w-screen lg:w-1/2 min-h-screen py-[100px] flex flex-col justify-around gap-8 lg:items-start items-center ${props.isDark ?  "text-white " : "text-black "} pr-16`}>

          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <ProjectTemplate
            isDark={props.isDark} 
            name={data[0].name}
            live={data[0].live}
            repo={data[0].repo}
            desc={data[0].desc}
          />


          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <ProjectTemplate
            isDark={props.isDark} 
            name={data[1].name}
            live={data[1].live}
            repo={data[1].repo}
            desc={data[1].desc}
          />

          
          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <ProjectTemplate
            isDark={props.isDark} 
            name={data[2].name}
            live={data[2].live}
            repo={data[2].repo}
            desc={data[2].desc}
          />




          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <ProjectTemplate
            isDark={props.isDark} 
            name={data[3].name}
            live={data[3].live}
            repo={data[3].repo}
            desc={data[3].desc}
          />


          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

          <ProjectTemplate
            isDark={props.isDark} 
            name={data[4].name}
            live={data[4].live}
            repo={data[4].repo}
            desc={data[4].desc}
          />

          <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

              
        </div>
    </div>
  )
}

export default Projects