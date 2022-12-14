import './HealthBar.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function HealthBar() {

    const data = [{name: 'Anxiety', Total: 31, pv: 2, amt: 43},
    { name: 'Depression', Total: 10, pv: 2, amt: 43},
    { name: 'Bipolar Disorder', Total: 4.4, pv: 2, amt: 43},
    { name: 'Personality Disorder', Total: 3, pv: 2, amt: 43}];

    useEffect(() => {
        Aos.init({duration:1000})
       }, []);

    return (
        <div id="health-page-container">
            <div id="health-info" data-aos="fade-left">
                <h1>Cases in The United States by %</h1>
                <BarChart width={600} height={300} data={data} data-aos="fade-up">
                    <XAxis dataKey="name" stroke="black" />
                    <YAxis dataKey="amt" stroke="black" />
                    <Tooltip wrapperStyle={{ width: 155, backgroundColor: '#ccc' }} />
                    <Bar dataKey="Total" fill="#5b3f97" barSize={70} />
                </BarChart>
            </div>
        </div>
    )
}