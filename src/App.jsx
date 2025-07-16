import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import { useState } from 'react'
import NavBar from './components/NavBar.jsx'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}

      <div className={` min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-1000" : "opacity-0"} bg-black text-gray-100 `}>
        <NavBar />
      </div>
    </>
  )
}

export default App
