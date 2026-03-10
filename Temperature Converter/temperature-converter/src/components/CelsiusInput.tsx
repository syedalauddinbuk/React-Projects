import { useState } from "react"
import FahrenhOutput from "./FahrenhOutput";
function CelsiusInput(){

   const [tempInCel, setTempInCel] = useState<number | null>(0)
   const [tempInFarh, setTempInFarh] = useState<number | null>(0)


    function handleCeltoFarhCalculation(celsius: number | null): void {
        if (celsius === null) {
            setTempInFarh(null);
            return;
        }
        const fahrenheit = (celsius * 9/5) + 32;
        setTempInFarh(fahrenheit);
    }





    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleCeltoFarhCalculation(tempInCel);
                }}
            >
                <label htmlFor="celsius">Celsius:</label>
                <input
                    id="celsius"
                    name="celsius"
                    type="number"
                    step="0.1"
                    value={tempInCel === null ? '' : tempInCel}
                    onChange={(e) => setTempInCel(e.target.value === '' ? null : parseFloat(e.target.value))}
                />
                <button type="submit">Convert to Fahrenheit</button>
            </form>
            <div>
                <FahrenhOutput temperature={tempInFarh} />
            </div>
        </div>
    );
}

export default CelsiusInput;
