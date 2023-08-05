// import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'

const mail = "Email ID"

function Contact(props) {
  return (
    <div className={`border-t-2  ${props.isDark ? "border-white " : "border-black "}  w-screen flex flex-col justify-center items-center p-8 text-white pl-[100px] pr-[100px]`} title="Contact Me">


      <form  action = "https://formspree.io/f/xpzeyyae" method = "post" className="flex flex-col gap-4  h-1/2"> 
         <label htmlFor = "mail" className={`flex flex-row items-center ${props.isDark ? "text-white " : "text-black "}`}>
          <input placeholder={mail} type = "email" name = "email-id" id = "mail" className="text-black border-black border-2 p-1 text-lg rounded-[10px] sm:rounded-[5px] w-[70vw] sm:w-[50vw]" />
         </label>

         <textarea className="text-black p-2 w-[70vw] sm:w-[50vw] border-black border-2 rounded-[10px] sm:rounded-[5px]" placeholder = "Your message here....." name = "message" id = "message"></textarea>

         <div className="flex justify-center items-center">
          <input type="submit" value = "SEND" name="submit" id="send-button" className={`${props.isDark ? "bg-white " : " "} bg-sky-200 text-black hover:bg-sky-500 px-4 text-lg rounded-[5px] border-2 border-black font-semibold active:p-0`} />
         </div>         
      </form> 

      <div 
        title="Do checkout my OPEN SOURCE CONTRIBUTIONS!" 
        className={`flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 mt-20 text-3xl ${props.isDark ? "text-white " : "text-black "}`}
      >
        <a title="" target = "_blank" rel="noreferrer" href = "https://twitter.com/PrgrmrShukla">
        <i className = "fab fa-twitter-square"></i>
        </a>
        
        <a title="Do checkout my OPEN SOURCE CONTRIBUTIONS!" target = "_blank" rel="noreferrer" href = "https://github.com/PrgrmrHarshShukla">
        <i className = "fab fa-github-square"></i>
        </a>
        
        <a title="" target = "_blank" rel="noreferrer" href = "https://www.linkedin.com/in/harsh-shukla-274277255">
        <i className = "fab fa-linkedin"></i>
        </a>
      </div>


    </div>
  )
}

export default Contact