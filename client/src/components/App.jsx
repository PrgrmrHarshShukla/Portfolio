// import { BrowserRouter, Router, Route, Link } from 'react-router-dom';

import './App.css'

import About from './About'
import Projects from './Projects'
import Stack from './Stack'
import Contact from './Contact'
import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(true)

  const toggle = (e) => {
    e.preventDefault()
    setIsDark(prevState => !prevState)
  }
  // ${props.isDark ?  "text-white " : "text-black "}

  return (
    <div className={`overflow-x-hidden ${isDark==true ? "bg-gray-800" : "bg-lime-50"}`}>
      <About isDark={isDark} toggle={toggle} />
      <Projects isDark={isDark} />
      <Stack isDark={isDark} />
      <Contact isDark={isDark} />
      <div className={`${isDark ? "text-white " : "text-black "} text-[15px] sm:text-lg m-4 flex flex-col items-center justify-center`}>
        <p>I am available for freelance projects.</p>
        <p>Contact me by any of the above means.</p>
      </div>
    </div>
  )
}

export default App
