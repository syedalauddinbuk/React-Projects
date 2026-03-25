import { useState } from 'react'
import './App.css'
import BmiCalculator from './component/BmiCalculator'


function App() {
  

  return (
    <main className="app-container">
      {/* <header>
        <h1>BMI Calculator</h1>
      </header> */}
      <BmiCalculator />
      {/* Optionally add a footer here */}
    </main>
  );
}

export default App
