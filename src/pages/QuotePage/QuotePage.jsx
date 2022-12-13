import './QuotePage.css'
import Axios from 'axios'
import { useState } from 'react'

export default function QuotePage() {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

   const getQuote = () => {
    Axios.get("https://favqs.com/api/qotd").then((response) => {
        setQuote(response.data.quote.body)
        setAuthor(response.data.quote.author)
    })
   };

    return (
    <div id="quote-page-container">
        <h1>Get a quote!</h1>
        <button onClick={getQuote}>Get Quote</button>
        <p>{quote}</p>
        <p>{author}</p>
    </div>
  );
};