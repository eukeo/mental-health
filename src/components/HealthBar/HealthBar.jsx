import './HealthBar.css';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function HealthBar() {

    useEffect(() => {
        Aos.init({duration:1000})
       }, []);

    return (
        <div id="health-bar-container" data-aos="fade-up">
            <h1>Mental Health Cases</h1>

            <div id="case-box">
                <span id="title">Anxiety</span>
                <div id="case-bar"></div>
                    <span id="case-per-anxiety"></span>
                        <span id="tooltip">31%</span>
            </div>
            <div id="case-box">
                <span id="title">Depression</span>
                <div id="case-bar"></div>
                    <span id="case-per-depression"></span>
                        <span id="tooltip">10%</span>
            </div>
            <div id="case-box">
                <span id="title">Bipolar Disorder</span>
                <div id="case-bar"></div>
                    <span id="case-per-bd"></span>
                        <span id="tooltip">4.4%</span>
            </div>
            <div id="case-box">
                <span id="title">Personality Disorder</span>
                <div id="case-bar"></div>
                    <span id="case-per-pd"></span>
                        <span id="tooltip">3%</span>
            </div>

        </div>
    )
}