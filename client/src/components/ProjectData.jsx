export default [
   {
      name: "Vidpedia",
      live: "https://vidpedia.vercel.app",
      hasLive: true,
      hasPublicRepo: false,
      repo: "https://vidpedia.vercel.app",
      desc: "A detailed directory of video editing styles and techniques of video editors around the world.\nIt currently has more than 100 visitors from all over the world.",
      details: [
         "The original idea belongs to Aadil Verma.",
         "It currently has more than 100 visitors from all over the world.",
         "I also implemented a table that mimicked the live database for the admin to add, update and delete any data.",
         "Any changes made in the table are reflected in the live database as well as the UI.",
         "Stored thousands of records in the database and made it searchable with the help of Prisma's query language.",
         "Used Firebase to store the actual GIF files and their URLs in the database.",
         "Tech Stack: Next.js, TailwindCSS, Vercel, Postgres, Prisma",
         "Made it responsive across all devices."
      ],
      images: [
         "../vid2.png",
         "../vid1.png",
         "../vid3.png",
      ]
   },
   {
      name: "YT Robin",
      live: "https://www.ytrobin.com",
      hasLive: true,
      hasPublicRepo: true,
      repo: "https://github.com/PrgrmrHarshShukla/yt_robin",
      desc: "Enjoy the YouTube Thumbnail guessing game with the retro Windows UI.\nIt currently has more than 200 users from all over the world.",
      details: [
         "The original idea belongs to Aadil Verma.",
         "I created it end-to-end in 3 days.",
         "Recreating the retro Windows UI was a very interesting part.",
         "I dealt with a lot of state updations, backend calls optimally in the main game page.",
         "Tackled them with proper use of useEffect and useState hooks.",
         "I can say I learnt these concepts mainly by doing.",
         "Made it responsive across all devices."
      ],
      images: [
         "../yt1.png",
         "../yt2.png",
         "../yt3.png",
         "../yt4.png",
      ]
   },
   {
      name: "DM Cards",
      live: "https://dmcards.vercel.app",
      hasLive: true,
      hasPublicRepo: false,
      repo: "https://dmcards.vercel.app",
      desc: "Send a card with objective questions in DMs, make it easy & quick for the receiver to reply.\nIt gained hundreds of visitors and over 25 registered users within a week of launch.",
      details: [
         "It gained hundreds of visitors and over 25 registered users within a week of launch and is growing continuously.",
         "This is a productivity tool to help you get more replies to your DMs.",
         "The idea is to send a card with objective questions in DMs, make it easy & quick for the receiver to reply.",
         "I made it within a week, from idea to deployment.",
         "Controlling the access of the cards was the exciting part, would love to discuss it with you, if you want.",
         "Tech Stack: Next.js, TailwindCSS, Vercel, Postgres, Prisma",
         "Made it responsive across all devices."
      ],
      images: [
         "../dmcards1.png",
         "../dmcards2.png"
      ]
   },
   {
      name: "FiredChat",
      live: "https://fired-chat.netlify.app/",
      hasLive: true,
      hasPublicRepo: true,
      repo: "https://github.com/PrgrmrHarshShukla/Vchat",
      desc: "This is the most private, real-time chat app with offline support. It's UI uses React and TailwindCSS. Backend is a Web Socket server made using Socket.io. It currently has more than 10 active, logged in users.",
      details: [
         'This is a Full Stack project,',
         'Used React and TailwindCSS for front-end,',
         'Used Redux along with redux-toolkit for state management,',
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
      ],
      images: [
         "../fc1.png",
         "../fc2.png",
         "../fc3.png",
      ]
   },
   {
      name: "Scalable DB",
      live: "https://scalables.netlify.app",
      hasLive: true,
      hasPublicRepo: true,
      repo: "https://github.com/PrgrmrHarshShukla/scalableDB",
      desc: "This is my attempt to build a highly scalable database design alongwith a query interface.",
      details: [
         "I chose to store logs with specified schemas alongwith timestamps.",
         "These logs are stored in documents of a NoSQL database (MongoDB Atlas) on cloud",
         "These are segregated into planned collections(based on Dates) to improve query perormance based on timestamps.",
         "In this way, I have tried to balance the trade-offs of efficient writing speed into the database and efficient queries from the frontend.",
         "Then deploying it was another hurdle.",
         "I used Netlify and Render for deploying the Frontend and Backend respectively.",
         "Let me know your thoughts on improving it! 🤔"
      ],
      images: [
         "../sc1.png"
      ]
   },
   {
      name: "Tweet Scraper",
      live: "https://github.com/PrgrmrHarshShukla/scraper",
      hasLive: false,
      hasPublicRepo: true,
      repo: "https://github.com/PrgrmrHarshShukla/scraper",
      desc: "This is a Tweet data scraper for tweets about tech job/freelance opportunities.",
      details: [
         "The original idea belongs to Harsh Agrawal.",
         "I created it end-to-end in 2 days.",
         "It uses headless browser from scraping library Puppeteer to scrap tweet content.",
         "And, OpenAI API to extract data from it and store in a PostgreSQL database.",
         "Tech Stack: Next.js, TypeScript, TailwindCSS and PostgreSQL"
      ]
   },
   // {
   //    name: "Dark.Mode",
   //    live: "https://dark-mode-pdf.netlify.app",
   //    hasLive: true,
   //    hasPublicRepo: true,
   //    repo: "https://dark-mode-pdf.netlify.app",
   //    desc: "Love Dark Mode? This web app will help you get dark_mode reading view of pdf(s).",
   //    details: [
   //       "Reading books or other material on screen always gives a lot of stress to our eyes.",
   //       "My colleagues and I also struggled with this problem since time immemorial! 😄",
   //       "Thus, to help everyone out, I made this simple tool.",
   //       "Just pick a pdf from your local filesystem and get our beloved dark mode in reading view for it."
   //    ]
   // },
   // {
   //    name: "DSA Sheeter",
   //    live: "https://github.com/PrgrmrHarshShukla/DSA_Sheeter",
   //    hasLive: false,
   //    hasPublicRepo: true,
   //    repo: "https://github.com/PrgrmrHarshShukla/DSA_Sheeter",
   //    desc: "I decided to focus more on DSA. So, to keep track of the Leetcode questions I solve, I made this browser extension.",
   //    details: [
   //       'This is a browser extension.',
   //       "I thought of making this to keep track of the DSA questions I solve in the process of learning DSA.",
   //       "It has a very minimal UI.",
   //       "It just has a simple button to add the current question name and its link that helps you to access them whenever you want.",
   //       "You will find a pic of its UI on GitHub README, as it has not yet been published to Chrome Web Store."
   //    ]
   // },
   // {
   //    name: "YT Connect",
   //    live: "https://yt-connect.netlify.app",
   //    hasLive: true,
   //    hasPublicRepo: true,
   //    repo: "https://github.com/PrgrmrHarshShukla/YT_Connect",
   //    desc: "This web app simplifies youtube video upload process by helping you give secure access of your channel to Editors.",
   //    details: [
   //       "Hey"
   //    ]
   // },
   // {
   //    name: "Timer",
   //    live: "https://count-down-timer-web-app.netlify.app/",
   //    hasLive: true,
   //    hasPublicRepo: true,
   //    repo: "https://github.com/PrgrmrHarshShukla/CountDown-Timer",
   //    desc: "This is a count-down timer. It takes an event from the user and runs a count-down to it.",
   //    details: [
   //       'This is one of my early beginner projects,',
   //       'This was made using just HTML, CSS and JavaScript',
   //       'I thought of making something like this to keep track of the time left with me until a target deadline or maybe a last date,',
   //       'This made me feel about the actual impact I can make with my code, this has been a kind of motivation for me to keep learning,',
   //       'You may want to give it a try for counting down to your favourite event using the live link above.',
   //    ]
   // },
]