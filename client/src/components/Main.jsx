// import { BrowserRouter, Router, Route, Link } from 'react-router-dom';

import './App.css'
import { motion } from 'framer-motion'
import About from './About'
import Projects from './Projects'
import Stack from './Stack'
import Contact from './Contact'
import { useEffect, useState } from 'react'
import Experience from './Experience'

function Main() {
  const [isDark, setIsDark] = useState(true)

  const toggle = (e) => {
    e.preventDefault()
    setIsDark(prevState => !prevState)
  }
  // ${props.isDark ?  "text-white " : "text-black "}
  // const [showLandingPage, setShowLandingPage] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLandingPage(true);
  //   }, 1000); // 2 seconds delay

  //   return () => clearTimeout(timer);
  // }, []);

    return (
      <div className="bg-white w-full flex flex-col justify-center items-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #f0f0f0 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #f0f0f0 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, #f0f0f0 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-100 opacity-20"
              style={{
                width: Math.random() * 100 + 20,
                height: Math.random() * 100 + 20,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>
        <div className="relative z-10">
          {/* Add your components here */}
          <About isDark={isDark} toggle={toggle} />
          <Projects isDark={isDark} />
          <Experience isDark={isDark} />
          <Stack isDark={isDark} />
          <Contact isDark={isDark} />
        </div>
      </div>
    )
  }



export default Main
