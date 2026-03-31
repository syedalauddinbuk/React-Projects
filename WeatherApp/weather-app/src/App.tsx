import { useState } from 'react'
import './App.css'
import { cityContext } from './context/CityContext'
import WeatherDisplay from './component/WeatherDisplay'
import WeatherSearch from './component/WeatherSearch'

function App() {
  const [city, setCity] = useState('')

  return (
<cityContext.Provider value={{ city, setCity }}>
      <header><h1>Weather App</h1></header>

<div className='main'>
      <WeatherDisplay />
      <WeatherSearch />
</div>
      <footer>@2026 Weather App. All rights reserved.</footer>
    </cityContext.Provider>
  )
}

export default App
