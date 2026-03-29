
import { useState, useContext,} from "react"
import { cityContext } from "../context/CityContext";


export default function WeatherSearch(){

    const [input,setInput] = useState('')
   const context = useContext(cityContext);

if (!context) {
  throw new Error("cityContext must be used within a Provider");
}

const { city, setCity } = context;


    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setCity(input);
    }


    return<div>
        <h1>Weather Search</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter city name" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button type = "submit">Search</button>

        </form>
    </div>
}