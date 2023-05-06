// import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'



function Contact() {
  return (
    <div className="border-t-2 border-b-8 border-white rounded-[80px] h-screen w-screen flex flex-col gap-28 justify-center items-center bg-gradient-to-b from-yellow-500 to-slate-300 p-8">


      <form  action = "https://formspree.io/f/xpzeyyae" method = "post" className="flex flex-col gap-4 lg:w-1/2"> 
         <label htmlFor = "mail" className="flex flex-row items-center">
          Enter your email-id: <input type = "email" name = "email-id" id = "mail" className="ml-4 p-1 text-lg rounded-[5px]" />
         </label>

         <textarea className="p-2 rounded-[5px]" placeholder = "Please enter your message here....." name = "message" id = "message"></textarea>

         <div className="flex justify-center items-center">
          <input type="submit" value = "SEND" name="submit" id="send-button" className="bg-sky-300 hover:bg-sky-600 p-2 text-lg rounded-full active:p-0" />
         </div>         
      </form> 

      <div className="flex flex-row flex-wrap justify-center items-center gap-8 mt-32 text-2xl">
         <a target = "_blank" href = "https://twitter.com/PrgrmrShukla">
         <i class = "fab fa-twitter-square"> Twitter</i></a>
         
         <a target = "_blank" href = "https://github.com/PrgrmrHarshShukla">
         <i class = "fab fa-github-square"> Github</i></a>
         
         <a target = "_blank" href = "https://www.linkedin.com/in/harsh-shukla-274277255">
         <i class = "fab fa-linkedin"> LinkedIn</i></a>
      </div>


    </div>
  )
}

export default Contact