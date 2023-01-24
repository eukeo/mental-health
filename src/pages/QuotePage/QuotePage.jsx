import "./QuotePage.css";
import Axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { useEffect } from "react";

export default function QuotePage() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    Axios.get("https://api.quotable.io/random").then((response) => {
      setQuote(response.data.content);
      setAuthor(response.data.author);
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="quote-page-container">
      <div id="content-container" data-aos="fade-in">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <section id="quote-container" data-aos="fade-up">
          <a id="get-quote-btn" onClick={getQuote}>
            Generate Quote!
          </a>
          <p>{quote}</p>
          <p>{author}</p>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <section id="quote-gallery">
        <img
          src="https://positive.b-cdn.net/wp-content/uploads/2022/01/John-Campo-2017_1-1.jpg"
          data-aos="fade-up"
        ></img>
        <img
          src="https://positive.b-cdn.net/wp-content/uploads/2022/01/Elliott-Goldner-2016-1.jpg"
          data-aos="fade-up"
        ></img>
        <img
          src="https://positive.b-cdn.net/wp-content/uploads/2022/01/Russ-Harris-2008-1.jpg"
          data-aos="fade-up"
        ></img>
        <img
          src="https://positive.b-cdn.net/wp-content/uploads/2022/01/Suzanne-Collins-2010-1.jpg"
          data-aos="fade-up"
        ></img>
        <img
          src="https://positive.b-cdn.net/wp-content/uploads/2022/01/Nicole-Spector-2020-1.jpg"
          data-aos="fade-up"
        ></img>
        <img
          src="https://positive.b-cdn.net/wp-content/uploads/2022/01/Lauren-Fogel-Mersy-nd-1.jpg"
          data-aos="fade-up"
        ></img>
        <img
          src="https://positive.b-cdn.net/wp-content/uploads/2022/01/Paulo-Coelho-2014-1.jpg"
          data-aos="fade-up"
        ></img>
        <img
          src="https://positive.b-cdn.net/wp-content/uploads/2022/01/John-Campo-2017-1.jpg"
          data-aos="fade-up"
        ></img>
      </section>
    </div>
  );
}
