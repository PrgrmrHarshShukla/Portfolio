
function ProjectTemplate({name, live, repo, desc}) {
  return (
    <div>

        <div className="text-left p-2 flex flex-col justify-between gap-8">            
            <div className="flex flex-row justify-between">
              <strong className="text-[17px] sm:text-2xl">{name}</strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href={live}>Live</a>
                <a className="border-2 border-black bg-sky-200 hover:bg-sky-500 rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" target="_blank" rel="noreferrer" href={repo}>GitHub</a>
              </div>
            </div>
            <p className="text-[15px] sm:text-lg lg:max-w-[500px]">{desc}</p>
        </div>


    </div>
  )
}

export default ProjectTemplate