import './HealthBar.css';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function HealthBar() {

    const data = [{name: 'Anxiety', Total: 41, pv: 2, amt: 43},
    { name: 'Stress', Total: 39, pv: 2, amt: 43},
    { name: 'Depression', Total: 30, pv: 2, amt: 43},
    { name: 'Loneliness/Social Isolation', Total: 28, pv: 2, amt: 43},
    { name: 'Mood Swings', Total: 26, pv: 2, amt: 43},
    { name: 'Phases of Sadness', Total: 23, pv: 2, amt: 43},
    { name: 'Panic Attacks', Total: 20, pv: 2, amt: 43},
    { name: 'Struggles with Self-Esteem', Total: 20, pv: 2, amt: 43},
    { name: 'Phases of Lethargy', Total: 14, pv: 2, amt: 43},
    { name: 'Phobias', Total: 8, pv: 2, amt: 43},

];

    useEffect(() => {
        Aos.init({duration:1000})
       }, []);

    return (
        <div id="health-page-container">
            <h1>Cases in the United States</h1>
            <div id="health-info-box" data-aos="fade-left">
                <h1>41%</h1>
                <h5>Anxiety</h5>
            </div>
            <div id="health-info-box" data-aos="fade-left">
                <h1>30%</h1>
                <h5>Depression</h5>
            </div>
            <div id="health-info-box" data-aos="fade-left">
                <h1>28%</h1>
                <h5>Loneliness/Social Isolation</h5>
            </div>
            <div id="health-info-box" data-aos="fade-left">
                <h1>26%</h1>
                <h5>Mood Swings</h5>
            </div>
            <div id="health-info-box" data-aos="fade-left">
                <h1>23%</h1>
                <h5>Phases of Sadness</h5>
            </div>
            <div id="health-info-box" data-aos="fade-left">
                <h1>20%</h1>
                <h5>Panic Attacks</h5>
            </div>
            <div id="health-info-box" data-aos="fade-left">
                <h1>20%</h1>
                <h5>Struggles with Self-Esteem</h5>
            </div>
            <div id="health-info-box" data-aos="fade-left">
                <h1>14%</h1>
                <h5>Phases of Lethargy</h5>
            </div>
            <div id="health-info-box" data-aos="fade-left">
                <h1>8%</h1>
                <h5>Phobias</h5>
            </div>
        </div>
    )
}