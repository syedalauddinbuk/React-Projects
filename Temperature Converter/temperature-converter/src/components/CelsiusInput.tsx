import { useState } from "react"
import 
function CelsiusInput(){

    [tempInCel, setTempinCel] = useState<number | null>(0)
    [temInFarh, setTempInFarh] = useState<number | null>(0)


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
            <input type="number" step="0.1" value={tempInCel} onChange={(e) => setTempInCel(parseFloat(e.target.value) || null)}></input>
            <button type="submit">Convert to Fahrenheit</button>
        </form>

        <div></div>
    </div>
}
