import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Main from './Main';
import ProjectDescription from './ProjectDescription';




function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/projectDescription" element={<ProjectDescription />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App