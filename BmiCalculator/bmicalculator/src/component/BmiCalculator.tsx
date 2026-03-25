import { useEffect, useState } from "react"
import InputField from"./InputField"
import ResultCard from "./ResultCard"

function BmiCalculator(){
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmi, setBmi] = useState<number | null>(null)
    const [categories, setCategories] = useState<string>("")

    function handleHeightChange(e: React.ChangeEvent<HTMLInputElement>) {
        setHeight(e.target.value)
    }

    function handleWeightChange(e: React.ChangeEvent<HTMLInputElement>) {
        setWeight(e.target.value)
    }

    function handleCalculateBmi() {
        const heightInMeters = parseFloat(height) / 100;
        const weightInKg = parseFloat(weight);
        const bmi = weightInKg / (heightInMeters * heightInMeters);
        setBmi(bmi);
    }

    function handleCategories(){
    if (bmi < 18.5) return setCategories("Underweight");
    if (bmi < 25) return setCategories("Normal weight");
    if (bmi < 30) return setCategories("Overweight");
    if (bmi < 35) return setCategories("Obese (Class 1)");
    if (bmi < 40) return setCategories("Obese (Class 2)");
    return setCategories("Obese (Class 3)");
}
useEffect(()=>{
    if (bmi === null) {
      setBmi(0)
    }

    if (bmi !== null) {
        handleCategories();
    }
},[bmi])



    return <div>
        <div><h1>BMI Calculator</h1></div>
        <form onSubmit={(e: React.SubmitEvent<HTMLFormElement>)=>{
            e.preventDefault()
            handleCalculateBmi()
        }}>

            <InputField name="height" value={height} onChange={handleHeightChange} placeholder="Enter height" />
            <InputField name="weight" value={weight} onChange={handleWeightChange} placeholder="Enter weight" />

            
            
            <button className="bg-blue-500 text-white p-2 rounded padding-4" type="submit">Calculate</button>
            <button className="bg-gray-500 text-white p-2 rounded" type="reset">Reset</button>
        </form>

       <ResultCard bmi={bmi} categories={categories} />

    </div>
}

export default BmiCalculator;