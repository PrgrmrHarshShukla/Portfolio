import '@fortawesome/fontawesome-free/css/all.css'

function Experience(props) {
   return (
     <div className="min-h-[300px] sm:h-auto w-screen px-8  flex flex-col sm:flex-row pb-[100px] sm:">
 
       <div className={`min-h-[100px] sm:w-1/3 text-3xl flex flex-row justify-center items-start ${props.isDark ? "text-white " : "text-black "} font-semibold `}>
          <p>Experience</p>
       </div>
 
       <div className={`sm:w-2/3 gap-24 sm:gap-24 sm:max-w-[500px] ${props.isDark ? "text-white " : "text-black "} flex flex-col justify-around gap-8 sm:gap-12 text-[15px] sm:text-lg`}>
            
                       
         <div className="flex flex-row gap-2">
           <div className="">⭐</div>
           <div>
            <a href="https://github.com/pulls?q=is%3Aopen+is%3Apr+author%3APrgrmrHarshShukla+archived%3Afalse+is%3Aclosed+is%3Amerged" target="_blank">
              <p className='font-bold underline'>OS Contributions</p>
            </a>
            <p>Making regular contributions to amazing Open Source codebases, like, <a href="https://github.com/MetaMask/metamask-extension"><u>Metamask</u></a>, where <u><a href="https://github.com/PrgrmrHarshShukla">40+ PRs</a></u> have been merged till now.</p>
            <br />
            <p className="font-semibold"><u>Things I am learning and doing through these PRs:</u></p>
            <p>→ In the repository I have replaced a lot of old (deprecated) components in the code with new components.</p>
            <p>→ This requires me to update or change the component API(s) as and when required.</p>
            {/* <p>→ I need to update the snapshots for changes in a file.</p> */}
            <p>→ I have to make sure that there are no visual regressions in the UI after the component is replaced completely.</p>
            <p>→ I have to make sure that the code changes pass e2e tests, jest tests, linting and Storybook without any errors.</p>
            {/* <p>→ The repository needs to be run locally in order to take screenshots of the UI to check for any visual regressions.</p> */}
            {/* <p>→ I am learning to interact with highly skilled and senior engineers in the field.</p> */}
            {/* <p>They help me as much as possible and encourage me to figure out most of the things myself.</p> */}
           </div>
         </div>  

         {/* <div className="flex flex-row gap-2">
           <div className="">⭐</div>
           <div>
            <p>Doing freelancing remotely and working on client projects.</p>
            <span>These projects give me regular practice of the concepts I learned long ago and give me the much needed real world experience.</span>
           </div>
         </div>              */}
                   
       </div>
 
     </div>
   )
 }
 
 export default Experience