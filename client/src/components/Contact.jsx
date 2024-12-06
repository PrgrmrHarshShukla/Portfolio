import '@fortawesome/fontawesome-free/css/all.css'
import { useState } from 'react';


function Contact(props) {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mail = "Email ID"

  const handle = (e) => {
    e.preventDefault();
    setTimeout(() => {
      if(email !== '' && message !== ''){
        alert("Hello there,\nI have your message in my mailbox.\nI will write back at the earliest.");
      }
      else{
        alert("Please fill in the fields to send a message.");
      }
    }, 1000)
  }


  return (
    <div className={`border-t-2  ${props.isDark ? "border-white " : "border-black "}  w-screen flex flex-col justify-center items-center p-8 text-white pl-[100px] pr-[100px]`} title="Contact Me">


      <form  action = "https://formspree.io/f/xpzeyyae" method = "post" className="flex flex-col gap-4  h-1/2"> 
         <label htmlFor = "mail" className={`flex flex-row items-center ${props.isDark ? "text-white " : "text-black "}`}>
          <input placeholder={mail} type = "email" name = "email-id" id = "mail" className="text-black border-gray-800 border-2 py-1 pl-2 outline-none rounded-[10px] sm:rounded-[5px] w-[70vw] sm:w-[50vw]" value={email} onChange={(e) => setEmail(e.target.value)} />
         </label>

         <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="text-black py-2 h-[20vh] px-2 w-[70vw] sm:w-[50vw] border-gray-800 border-2 outline-none rounded-[10px] sm:rounded-[5px] resize-none" placeholder = {`Your message here.....\n(It really works!)`} name = "message" id = "message"></textarea>

         <div className="flex justify-center items-center">
          <input onClick={handle} type="submit" value = "SEND" name="submit" id="send-button" className={`${props.isDark ? "bg-blue-300 " : " "} bg-sky-200 text-black hover:bg-sky-500 px-4 py-1 text-lg rounded-full border-2 border-gray-800 font-semibold active:p-0`} />
         </div>         
      </form> 

      <div 
        title="Do checkout my OPEN SOURCE CONTRIBUTIONS!" 
        className={`flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-8 mt-20 text-3xl w-full ${props.isDark ? "text-white " : "text-black "}`}
      >
        <a title="" target = "_blank" rel="noreferrer" href = "https://twitter.com/PrgrmrShukla">
          <u className="text-lg hover:text-purple-300">
            Twitter            
          </u>
        </a>
        
        <a title="Do checkout my OPEN SOURCE CONTRIBUTIONS!" target = "_blank" rel="noreferrer" href = "https://github.com/PrgrmrHarshShukla">
          <u className="text-lg hover:text-purple-300">
            GitHub            
          </u>
        </a>
        
        <a title="" target = "_blank" rel="noreferrer" href = "https://www.linkedin.com/in/harsh-s-274277255">
          <u className="text-lg hover:text-purple-300">
            LinkedIn            
          </u>
        </a>

        <a title="" target = "_blank" rel="noreferrer" href = "https://leetcode.com/harshshukla_123">
          <u className="text-lg hover:text-purple-300">
            Leetcode            
          </u>
        </a>
      </div>


    </div>
  )
}

export default Contact