import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Main from './Main';
import ProjectDescription from './ProjectDescription';
import { useState } from 'react';




function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => {
    setIsDark((p) => !p);
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/projectDescription/:id" element={<ProjectDescription />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App