import './App.css';
import Axios from 'axios'
import { useState } from 'react'

export default function App() {

    const [quote, setQuote] = useState("");

   const getQuote = () => {
    Axios.get("https://type.fit/api/quotes").then((response) => {
        setQuote(response.data.author + response.data.text)
        console.log(response)
    })
   }
    
    return (
    <div>
        <button onClick={getQuote}>Get Quote</button>
        {quote}
    </div>
  );
}
