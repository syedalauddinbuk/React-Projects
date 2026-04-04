import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ImageSlider from './component/ImageSlider'

function App() {
  

  return (
    <>
<ImageSlider url={'https://picsum.photos/v2/list?'} limit={10} />
    </>
  )
}

export default App
