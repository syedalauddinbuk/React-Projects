import { useState } from "react"
import FahrenhOutput from "./FahrenhOutput";
function CelsiusInput(){

   const [tempInCel, setTempinCel] = useState<number | null>(0)
   const [temInFarh, setTempInFarh] = useState<number | null>(0)


    function handleCeltoFarhCalculation(celsius: number | null): void {
        if (celsius === null) {
            setTempInFarh(null);
            return;
        }
        const fahrenheit = (celsius * 9/5) + 32;
        setTempInFarh(fahrenheit);
    }





    return <div>
        <form onSubmit={(e) => {

            e.preventDefault()
            handleCeltoFarhCalculation(e.target.value)

        }}>

            <label>Celsius:</label>
            <input type="number" step="0.1" value={tempInCel} onChange={(e) => setTempInCel(parseFloat(e.target.value) || null)} />
            <button type="submit">Convert to Fahrenheit</button>
        </form>

        <div>
            <FahrenhOutput temperature={temInFarh}/>
        </div>
    </div>
}
