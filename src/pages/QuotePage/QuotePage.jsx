import './QuotePage.css'
import Axios from 'axios'
import { useState } from 'react'

export default function QuotePage() {

    const [quote, setQuote] = useState("");

   const getQuote = () => {
    Axios.get("https://type.fit/api/quotes").then((response) => {
        setQuote(response.data.author)
        console.log(response)
    })
   };
    return (
    <div>
        <h1>Get a quote!</h1>
        <button onClick={getQuote}>Get Quote</button>
        {quote}
    </div>
  );
};