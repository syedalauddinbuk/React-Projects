import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorpickerInput from './component/ColorPickerInput'

function App() {
  const [color, setColor] = useState("")


  function handleColorChange(event:React.ChangeEvent<HTMLInputElement>) {
    setColor(event.target.value)
  }

  return (
    <>
      <h1>Color Picker App</h1>
      < ColorpickerInput handleColorChange={handleColorChange} value={color} />
      <div style={{ backgroundColor: color, width: "100px", height: "100px" }}></div>
    </>
  )
}

export default App
