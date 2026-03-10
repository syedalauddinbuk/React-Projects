import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CelsiusInput from './components/CelsiusInput'
import FahrenhOutput from './components/FahrenhOutput'
import WeatherDisplay from './components/WeatherDisplay'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CelsiusInput />
      <WeatherDisplay />
    </>
  )
}

export default App
