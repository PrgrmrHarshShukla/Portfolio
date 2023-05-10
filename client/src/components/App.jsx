// import { BrowserRouter, Router, Route, Link } from 'react-router-dom';

import './App.css'

import About from './About'
import Projects from './Projects'
import Stack from './Stack'
import Contact from './Contact'

function App() {


  return (
    <div className="overflow-x-hidden dark:bg-gray-800 bg-emerald-100">
      <About />
      <Projects />
      <Stack />
      <Contact />
      <div className="text-black dark:text-white m-4 flex flex-col items-center justify-center">
        <p>I am available for freelance projects.</p>
        <p>Contact me by any of the above means.</p>
      </div>
    </div>
  )
}

export default App
