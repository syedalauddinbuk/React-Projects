import {useState} from 'react';
import type { Quote } from '../types/quotes';
import fetchQuotes from '../services/quoteServices';

function DisplayQuotes(){

    const [quote, setQuote] = useState<Quote | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');


    const  getQuote= async() => {

        try{
        setLoading(true);
        setError('');
        const data = await fetchQuotes();
        console.log(data);
        setQuote(data[0]);


        }catch(error){
            setError('Failed to fetch quote');
        } finally{
            setLoading(false);
        }
    }





    return (<div>
       {loading && <p>Loading...</p>}
       {error&& <p>{error} </p>}
       {quote&&(
        <>
<h2>{quote.quote}</h2>
<p>{quote.author}</p>
       </>)}
       
<button onClick={getQuote}>Get Quote</button>
       
    </div>)
}




export default DisplayQuotes

