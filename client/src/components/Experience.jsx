import '@fortawesome/fontawesome-free/css/all.css'
import experienceData from './ExperienceData'
import ExperienceComponent from './ExperienceComponent'

function Experience(props) {

  
  const experiencesArray = experienceData.map((exp, index) => {
    return (
      <>
        <ExperienceComponent 
          key={index}
          index={index}
          isDark={props.isDark} 
          companyName={exp.companyName}
          position={exp.position}
          startDate={exp.startDate}
          endDate={exp.endDate}
          companyURL={exp.companyURL}
          desc={exp.desc}
          techStack={exp.techStack}
        />
        <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />
      </>
    )
  })


  return (
    <div className="min-h-[300px] sm:h-auto w-screen px-8  flex flex-col sm:flex-row pb-[100px]">

      <div className={`min-h-[100px] sm:w-1/3 text-3xl flex flex-row justify-center items-start ${props.isDark ? "text-white " : "text-black "} font-semibold `}>
        <p>Experiences</p>
      </div>

      <div className={`sm:w-2/3 w-screen lg:w-1/2 min-h-screen flex flex-col justify-around gap-8 lg:items-start items-center ${props.isDark ?  "text-white " : "text-black "} pr-16`}>

        <hr className={`border-1 opacity-30 ${props.isDark ?  "border-white " : "border-black "} w-full`} />

        {experiencesArray}     
            
      </div>

    </div>
  )
}
 
export default Experience