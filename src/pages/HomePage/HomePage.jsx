import "./HomePage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div id="home-page-container">
        <section id="banner" data-aos="zoom-in">
          <img src="https://www.penndelmhc.org/wp-content/uploads/2020/10/mentalhealth.jpg"></img>
        </section>
        <section id="importance">
          <h1 data-aos="fade-left">Mission Statement</h1>
          <p data-aos="fade-left">
            Our mission is to help spread awareness on mental health issues
            growing rapidly across the country.
          </p>
          <hr data-aos="fade-in"></hr>
          <h1 data-aos="fade-left" data-aos-duration="1250">
            Why is Mental Health Important?
          </h1>
          <p data-aos="fade-left" data-aos-duration="1250">
            Mental health includes our emotional, psychological, and social
            well-being. It affects how we think, feel, and act. It also helps
            determine how we handle stress, relate to others, and make healthy
            choices. Mental health is important at every stage of life, from
            childhood and adolescence through adulthood.
          </p>
        </section>
      </div>
    </>
  );
}
