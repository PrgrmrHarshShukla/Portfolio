import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';


function ProjectTemplate(props) {
  const navigate = useNavigate()
  const { name, live, repo, desc, hasLive, hasPublicRepo, index } = props;

  const handleClick = () => {
    navigate(`/projectDescription/${index}`)
  }



  return (
    <motion.div>

        <motion.div 
          className="text-left p-6 flex flex-col justify-between gap-8 shadow-lg rounded-lg "
          whileHover={{ scale: 1.1 }} 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            type: 'spring',            
            stiffness: 260,
            damping: 20,
          }}
        >            
            <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start gap-4 sm:gap-0">
              <strong className="text-2xl">{name}</strong>
              <div className="flex flex-row gap-4 justify-center items-center text-black">
                {hasLive && 
                  <a 
                    className="border-2 border-gray-800 bg-sky-200 active:bg-sky-500 cursor-pointer rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" 
                    target="_blank" 
                    rel="noreferrer" 
                    href={live}
                  >
                      Live
                  </a>
                }
                {hasPublicRepo && 
                  <a 
                    className="border-2 border-gray-800 bg-sky-200 active:bg-sky-500 cursor-pointer rounded-full text-[15px] sm:text-[17px] px-3 sm:px-4" 
                    target="_blank" 
                    rel="noreferrer" 
                    href={repo}
                  >
                      GitHub
                  </a>
                }
              </div>
            </div>
            <p className="text-[15px] sm:text-lg lg:max-w-[500px]">{desc}</p>
            <div onClick={handleClick} className="cursor-pointer active:text-purple-400">
              <span>
              <u>Detailed Description</u>
              </span>
            </div>
        </motion.div>


    </motion.div>
  )
}

export default ProjectTemplate