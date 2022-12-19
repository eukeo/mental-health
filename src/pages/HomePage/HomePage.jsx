import './HomePage.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function HomePage() {

  useEffect(() => {
    Aos.init({duration:1000})
   }, []);

    return (
      <div id="home-page-container">
        <section id="banner" data-aos="zoom-in">
          <img src="https://marvel-b1-cdn.bc0a.com/f00000000209887/www.projecthope.org/wp-content/uploads/2020/10/mental-health-is-health-Hero.png"></img>
        </section>
        <section id="importance">
          <h1>Why is Mental Health Important?</h1>
          <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make healthy choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.</p>
        </section>
      </div> 
  );
}