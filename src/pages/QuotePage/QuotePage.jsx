import './QuotePage.css';
import Axios from 'axios';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useState } from 'react'
import { useEffect } from 'react';

export default function QuotePage() {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

   const getQuote = () => {
    Axios.get("https://favqs.com/api/qotd").then((response) => {
        setQuote(response.data.quote.body)
        setAuthor(response.data.quote.author)
    })
   };

   useEffect(() => {
    Aos.init({duration:1000})
   }, []);

    return (
    <div id="quote-page-container">
        <div id="content-container">
            <img src="https://www.pcc.edu/climb/wp-content/uploads/sites/4/2020/03/ipnb_web-1-500x250.png"></img>
            <section id="quote-container" data-aos="fade-up">
            <a id="get-quote-btn" onClick={getQuote}>Generate Quote!</a>
                <p>{quote}</p>
                <p>{author}</p>
            </section>
        </div>
    </div>
  );
};