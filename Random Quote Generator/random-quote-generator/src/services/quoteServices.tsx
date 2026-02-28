import type { Quote } from "../types/quotes";


async function fetchQuotes(): Promise<Quote[]>{

    const response = await fetch("https://api.api-ninjas.com/v2/quotes?categories=success%2Cwisdom", {
        headers:{
            "X-Api-Key": import.meta.env.VITE_API_KEY
        }
    })

    if(!response.ok){
        throw new Error("Failed to fetch quotes")

    }

    return response.json()




}

export default fetchQuotes

