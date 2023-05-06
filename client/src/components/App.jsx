// import { BrowserRouter, Router, Route, Link } from 'react-router-dom';

import './App.css'

// import Background from './background'
import About from './About'
import Intro from './Intro'
import Projects from './Projects'
import Stack from './Stack'
import Contact from './Contact'

function App() {

  return (
    <div className="overflow-x-hidden">
      <About />
      <Intro />
      <Projects />
      <Stack />
      <Contact />
    </div>
  )
}

export default App
