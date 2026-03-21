import { useState } from "react"
import InputField from"./InputField
import ResultCard from "./ResultCard"

function BmiCalculator(){
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")


    function handleHeightChange(e: React.ChangeEvent<HTMLInputElement>) {
        setHeight(e.target.value)
    }

    function handleWeightChange(e: React.ChangeEvent<HTMLInputElement>) {
        setWeight(e.target.value)
    }

    return <div>
        <div><h1>BMI Calculator</h1></div>
        <form>

            <InputField name="height" value={height} onChange={handleHeightChange} placeholder="Enter height" />
            <InputField name="weight" value={weight} onChange={handleWeightChange} placeholder="Enter weight" />

            
            
            <button type="submit">Calculate</button>
            <button>Reset</button>
        </form>

       <ResultCard />

    </div>
}