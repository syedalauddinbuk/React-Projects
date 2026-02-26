import type { Quote } from "../types/quotes";


async function fetchQuotes(): Promise<Quote[]>{

    const response = await fetch(",")

    if(!response.ok){
        throw new Error("Failed to fetch quotes")

    }

    return response.json()




}

