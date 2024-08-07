// import { BrowserRouter, Router, Route, Link } from 'react-router-dom';

import './App.css'
import About from './About'
import Projects from './Projects'
import Stack from './Stack'
import Contact from './Contact'
import { useState } from 'react'
import Experience from './Experience'

function Main() {
  const [isDark, setIsDark] = useState(true)

  const toggle = (e) => {
    e.preventDefault()
    setIsDark(prevState => !prevState)
  }
  
  return (
    <div className={`overflow-x-hidden ${isDark==true ? "bg-gray-800" : "bg-lime-50"}`}>
      <About isDark={isDark} toggle={toggle} />
      <Projects isDark={isDark} />
      <Experience isDark={isDark} />
      <Stack isDark={isDark} />
      <Contact isDark={isDark} />
    </div>
  )
  }



export default Main
