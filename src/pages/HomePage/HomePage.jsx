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
        <section id="left-section" data-aos="fade-up">
          <img src="https://wilsonswarrnambool.com.au/wp-content/uploads/2020/08/mental-health-brain-wellness-employer-engagement.jpg" id="brain-image"></img>
          <p id="p-title">Mental Health Awareness</p>
        </section>
      </div> 
  );
}