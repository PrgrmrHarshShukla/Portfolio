export default [
   {
      name: "FiredChat",
      live: "https://fired-chat.netlify.app/",
      repo: "https://github.com/PrgrmrHarshShukla/Vchat",
      desc: "This is the most private, real-time chat app. It's front-end is made using React and TailwindCSS. It's backend is a Web Socket server made using Socket.io",
      details: [
         'This is a Full Stack project,',
         'Used Redux along with redux-toolkit for state management,',
         'Used React and TailwindCSS for front-end,',
         'NodeJS, Express and MongoDB Atlas for backend and database.',
         'Set up MongoDB Atlas database and connected it to my hosted backend for the necessary CRUD operations,', 
         'Updating user rooms in the database as well as the front-end data layer, when user joins a new room was a really nice task to practice the cool array methods and personal coding logic & understanding.',
         `After I made the backend, I used Postman for testing all it's API endpoints,`,
         'It was real fun to see my database update on making requests to the respective API end points,',
         'For hosting the backend I used Render, an amazing and free service.',
         'For deploying the front-end, Netlify was my choice.',
         'After deploying the front-end and backend the next step was connecting them together so that they work properly, this part gave me a lot of understanding about how everything actually works.',
         'I also added logic for handling messages that are sent by sender while being offline.',
         'I keep checking if the sender is offline or online. If he/she is online, no worries, broadcast the message to the users connected to the room.',
         `But, if the sender is offline then, store the messages in a message queue (in sender's localStorage itself) and broadcast them as soon as the sender is back online.`,
         'Tackling errors & getting rid of warnings were some of the tasks that made the process of building an enjoyable experience,',
         'I might not have been able to cover all that I tackled during the project, but doing this project completely on my own was definitely a lot of fun and gave me a lot of insights.',
      ]
   },
   // {
   //    name: "S-Mart",
   //    live: "https://s-mart-e-commerce.netlify.app/",
   //    repo: "https://github.com/PrgrmrHarshShukla/S-Mart",
   //    desc: "This web app has full fledged e-commerce functionality. I made it using ReactJS, TailwindCSS and Firebase",
   //    details: [
   //       'This is one my Front-end heavy projects,',
   //       'In this project I used a lot of concepts of ReactJS, that helped me have a solid grasp on the concepts,',
   //       'Utilised the awesome Firebase features: Authentication, Firestore (cloud database) and Storage bucket,',
   //       'Implemented Redux for maintaining the data layer on the front-end,',
   //       'Set up Stripe for payment integration, although you would not get your product delivered even if you pay for it 😄 simply because they do not exist!',
   //    ]
   // },
   {
      name: "Dark.Mode",
      live: "https://dark-mode-pdf.netlify.app",
      repo: "https://dark-mode-pdf.netlify.app",
      desc: "Love Dark Mode? This web app will help you get dark_mode reading view of pdf(s).",
      details: [
         "Reading books or other material on screen always gives a lot of stress to our eyes.",
         "My colleagues and I also struggled with this problem since time immemorial.",
         "Thus, to help everyone out, I made this simple tool.",
         "Just pick a pdf from your local filesystem and get our beloved dark mode in reading view for it."
      ]
   },
   {
      name: "DSA Sheeter",
      live: "https://github.com/PrgrmrHarshShukla/DSA_Sheeter",
      repo: "https://github.com/PrgrmrHarshShukla/DSA_Sheeter",
      desc: "I decided to focus more on DSA. So, to keep track of the Leetcode questions I solve, I made this browser extension.",
      details: [
         'This is a browser extension.',
         "I thought of making this to keep track of the DSA questions I solve in the process of learning DSA.",
         "It has a very minimal UI.",
         "It just has a simple button to add the current question name and its link that helps you to access them whenever you want.",
         "You will find a pic of its UI on GitHub README, as it has not yet been published to Chrome Web Store."
      ]
   },
   // {
   //    name: "YT Connect",
   //    live: "https://yt-connect.netlify.app",
   //    repo: "https://github.com/PrgrmrHarshShukla/YT_Connect",
   //    desc: "This web app simplifies youtube video upload process by helping you give secure access of your channel to Editors.",
   //    details: [
   //       "Hey"
   //    ]
   // },
   // {
   //    name: "Fintrrack",
   //    live: "https://fintrrack.netlify.app/",
   //    repo: "https://github.com/PrgrmrHarshShukla/Fintrack",
   //    desc: "This is a fully responsive design clone of a static landing page that is made by following the design best practices.",
   //    details: [
   //       'This is one my design clones to showcase my Front-end skills,',
   //       "I made this with the popular stack: TailwindCSS and React,",
   //       'Made all the parts of the page as small React components and put them together to get the fully responsive, clean and concise landing page',
   //       // '',
   //    ]
   // },
   {
      name: "Timer",
      live: "https://count-down-timer-web-app.netlify.app/",
      repo: "https://github.com/PrgrmrHarshShukla/CountDown-Timer",
      desc: "This is a count-down timer. It takes an event from the user and runs a count-down to it.",
      details: [
         'This is one of my early beginner projects,',
         'This was made using just HTML, CSS and JavaScript',
         'I thought of making something like this to keep track of the time left with me until a target deadline or maybe a last date,',
         'This made me feel about the actual impact I can make with my code, this has been a kind of motivation for me to keep learning,',
         'You may want to give it a try for counting down to your favourite event using the live link above.',
      ]
   },
]