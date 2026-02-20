import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/Form'

function App() {
   const [name,setName] = useState<string>("")

    function handleOnchange(e: React.ChangeEvent<HTMLInputElement>){
        setName(e.target.value)
    }

  return (
    <>
    <div>
    <h1>Contact Us</h1>
    <div>
      <Form name={name} handleOnchange={handleOnchange} />
    </div>
      <h1>Value: {name}</h1>
    </div>

    </>
  )
}

export default App
