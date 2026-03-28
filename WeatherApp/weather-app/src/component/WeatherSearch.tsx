
import { useState } from "react"



function WeatherSearch(){

    const [input,setInput] = useState('')

    return<div>
        <form>
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