
import { useContext } from "react"
import { cityContext } from "../context/CityContext"

export default function WeatherDisplay(){


     const context = useContext(cityContext);

  if (!context) {
    throw new Error("cityContext must be used within a Provider");
  }

  const { city } = context;

    return<div><h1>Weather Display</h1>
    <p>City: {city}</p>     
    </div>
}