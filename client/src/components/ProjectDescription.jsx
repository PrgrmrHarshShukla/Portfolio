import data from './ProjectData';
import { useParams } from 'react-router-dom';

function ProjectDescription() {
    const { id } = useParams();
    const index = parseInt(id);
    // console.log(typeof index);

    const projectData = data[index]
    const { name, live, hasLive, hasPublicRepo, repo, desc, details, images } = projectData

    const detailsList = details.map((item, index) => {
        return(
            <li key={index} className="flex flex-row items-start justify-start gap-[10px]">
                <div className="flex flex-row justify-start items-start -mt-[3px]">
                    <span className="text-2xl">•</span>
                </div>
                {item}
            </li>
        )
    })



    
  return (
    <div className="w-full h-auto min-h-screen flex flex-col justify-center items-center bg-slate-400">

        <div className="max-w-[550px] w-[100vw] h-auto min-h-screen bg-sky-100 py-[2vh] px-[3vw]">
            <span className="text-left font-bold text-4xl sm:text-6xl">{name}</span>
            <hr className="border border-black" />
            <div className="flex flex-row gap-4 justify-start items-center text-black mt-[2vh]">
              {hasLive && <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href={live}>Live</a>}
              {hasPublicRepo && <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href={repo}>GitHub</a>}
            </div>

            <div className="mt-[4vh] text-left font-medium text-[18px] max-w-[300px] sm:max-w-[420px]">
                {desc}
            </div>

            <div className="mt-[5vh] max-w-[300px] sm:max-w-[420px]">
                {/* <span className="font-semibold text-[19px]">
                    <u>
                        Things I tackled during the project:
                    </u>
                </span> */}
                <ul  className="mt-[2vh] text-left text-[18px] max-w-[300px] sm:max-w-[420px] flex flex-col gap-[1vh] font-serif">
                    {detailsList}
                </ul>
            </div>
            
            <div className='flex flex-row flex-wrap justify-start items-center w-full'>
                {images && 
                    images.map((img, index) => {
                        return(
                            <img key={index} className="mt-[5vh] max-w-[300px] sm:max-w-[420px] rounded-[5px]" src={img} alt={name} />
                        )
                    })
                }
            </div>



                    
        </div>
    </div>
  )
}

export default ProjectDescription