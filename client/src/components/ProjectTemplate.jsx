import { useNavigate } from 'react-router-dom'


function ProjectTemplate({name, live, repo, desc, index}) {
  const navigate = useNavigate()

  const handleClick = () => {
    localStorage.setItem('portfolio_project-index', JSON.stringify(index))
    navigate('/projectDescription')
  }



  return (
    <div>

        <div className="text-left p-2 flex flex-col justify-between gap-8">            
            <div className="flex flex-row justify-between itmes-center">
              <strong className="text-[20px] sm:text-2xl">{name}</strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href={live}>Live</a>
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href={repo}>GitHub</a>
              </div>
            </div>
            <p className="text-[15px] sm:text-lg lg:max-w-[500px]">{desc}</p>
            <div onClick={handleClick} className="cursor-pointer hover:text-purple-400">
              <span>
              <u>Detailed Description</u>
              </span>
            </div>
        </div>


    </div>
  )
}

export default ProjectTemplate