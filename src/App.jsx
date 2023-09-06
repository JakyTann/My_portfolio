import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import About from './component/About'
import Project from './component/Project'
import Skill from './component/Skill'
import Contact from './component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  )
}

export default App
