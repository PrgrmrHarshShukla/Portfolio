// import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'



function Contact() {
  return (
    <div className="border-2  border-black dark:border-white rounded-tl-[200px] rounded-br-[200px] w-screen flex flex-col justify-center items-center p-8 mt-8 pt-16 text-white pl-[100px] pr-[100px]" title="Contact Me">


      <form  action = "https://formspree.io/f/xpzeyyae" method = "post" className="flex flex-col gap-4 lg:w-1/2 h-1/2"> 
         <label htmlFor = "mail" className="flex flex-row items-center text-black dark:text-white">
          Enter your email-id: <input type = "email" name = "email-id" id = "mail" className="text-black border-black border-2 ml-4 p-1 text-lg rounded-[5px]" />
         </label>

         <textarea className="text-black p-2 border-black border-2 rounded-[5px]" placeholder = "Enter your message here....." name = "message" id = "message"></textarea>

         <div className="flex justify-center items-center">
          <input type="submit" value = "SEND" name="submit" id="send-button" className="dark:bg-white bg-sky-400 text-black hover:bg-sky-600 px-4 text-lg rounded-[5px] active:p-0" />
         </div>         
      </form> 

      <div className="flex flex-row flex-wrap justify-center items-center gap-8 mt-32 text-xl text-black dark:text-white">
         <a target = "_blank" href = "https://twitter.com/PrgrmrShukla">
          <i class = "fab fa-twitter-square"></i>
         </a>
         
         <a target = "_blank" href = "https://github.com/PrgrmrHarshShukla">
          <i class = "fab fa-github-square"></i>
         </a>
         
         <a target = "_blank" href = "https://www.linkedin.com/in/harsh-shukla-274277255">
          <i class = "fab fa-linkedin"></i>
         </a>
      </div>


    </div>
  )
}

export default Contact