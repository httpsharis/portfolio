import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import MobileManu from './components/MobileManu.jsx'
import Home from './components/sections/home.jsx'
import About from './components/sections/about.jsx'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [manuOpen, setManuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}

      <div className={` min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-1000" : "opacity-0"} bg-black text-gray-100 `}>
        <NavBar manuOpen={manuOpen} setManuOpen={setManuOpen} />
        <MobileManu manuOpen={manuOpen} setManuOpen={setManuOpen} />
        
        <Home />
        <About />
      </div>
    </>
  )
}

export default App
