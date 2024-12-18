import { useState } from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.css'

function ExperienceComponent(props) {
  const { companyName, position, startDate, endDate, companyURL, desc, techStack, index, isDark } = props;
  const [showDetails, setShowDetails] = useState(false);

  return (

        <motion.div 
          className="text-left p-6 flex flex-col justify-between gap-8 shadow-lg rounded-lg w-full"
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
            <div className={`flex flex-col justify-start items-start gap-1 ${isDark ? "text-white" : "text-black"}`}>

              {companyURL ? 
              <a href={companyURL} target='_blank' rel='noreferrer'>
                <strong className="text-2xl cursor-pointer flex justify-center items-baseline">
                  <span>{companyName}</span>
                  <i className='fas fa-external-link-alt font-medium ml-2 text-[12px]' />
                </strong>
              </a>
              :
              <strong className="text-2xl">
                <span>{companyName}</span>
              </strong>
              }

              <p className="text-[15px] sm:text-lg">{position}</p>
              {startDate && endDate && 
                <p>{startDate} to {endDate}</p>
              }

              {showDetails &&
                <div className='my-8 text-xl font-light font-serif'>
                  {desc.split("\n").map((line, index) => (
                    <p key={index} className="text-[15px] sm:text-lg lg:max-w-[500px]">{line}</p>
                  ))}
                </div>
              }
              {
                showDetails &&
                <h1 className='underline text-xl font-serif'>Tech Stack:</h1>
              }
              {
                showDetails &&
                <div className='flex flex-row flex-wrap gap-1 text-xl font-light font-serif mb-4'>
                  {techStack.map((tech, index) => (
                    <span key={index} className="text-[15px] sm:text-lg">{tech}{index == techStack.length - 1 ? "" : ','}</span>
                  ))}
                </div>
              }


              <div
                className='w-full justify-center items-center flex flex-row'
              >
                {!showDetails && (
                  <button
                    onClick={() => setShowDetails(true)}
                    className="w-full mt-4 px-4 py-1 border-2 font-semibold border-gray-800 bg-sky-200 active:bg-sky-500 cursor-pointer rounded-full text-[15px] sm:text-[17px] text-black" 
                  >
                    <i className="fas fa-angle-down"></i>
                  </button>
                )}
                {showDetails && (
                  <button
                    onClick={() => setShowDetails(false)}
                    className="w-full mt-4 px-4 py-1 font-semibold border-2 border-gray-800 bg-sky-200 active:bg-sky-500 cursor-pointer rounded-full text-[15px] sm:text-[17px] text-black" 
                  >
                    <i className='fas fa-angle-up'></i>
                  </button>
                )}

              </div>
            </div>

            
            
        </motion.div>
  )
}

export default ExperienceComponent