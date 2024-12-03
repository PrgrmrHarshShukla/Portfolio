import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';


function ProjectTemplate({name, live, repo, desc, index}) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/projectDescription/${index}`)
  }



  return (
    <motion.div>

        <motion.div 
          className="text-left p-6 flex flex-col justify-between gap-8 shadow-lg rounded-lg "
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            type: 'spring',            
            stiffness: 260,
            damping: 20,
          }}
        >            
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
        </motion.div>


    </motion.div>
  )
}

export default ProjectTemplate