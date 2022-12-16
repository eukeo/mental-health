import './InformationPage.css'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function InformationPage() {

    const data = [
        {rank: 1, state: "New Jersey"},
        {rank: 2, state: "Florida"},
        {rank: 3, state: "Georgia"},
        {rank: 4, state: "Texas"},
        {rank: 5, state: "New York"},
        {rank: 6, state: "Pennsylvania"},
        {rank: 7, state: "Mississippi"},
        {rank: 8, state: "Hawaii"},
        {rank: 9, state: "Connecticut"},
        {rank: 10, state: "South Carolina"},
        {rank: 11, state: "Maryland"},
        {rank: 12, state: "Alabama"},
        {rank: 13, state: "Tennessee"},
        {rank: 14, state: "Louisiana"},
        {rank: 15, state: "Virginia"},
        {rank: 16, state: "Illinois"},
        {rank: 17, state: "North Carolina"},
        {rank: 18, state: "South Dakota"},
        {rank: 19, state: "Kentucky"},
        {rank: 20, state: "California"},
        {rank: 21, state: "Michigan"},
        {rank: 22, state: "Nebraska"},
        {rank: 23, state: "Rhode Island"},
        {rank: 24, state: "Kansas"},
        {rank: 25, state: "Arkansas"},
        {rank: 26, state: "Massachusetts"},
        {rank: 27, state: "Minnesota"},
        {rank: 28, state: "Missouri"},
        {rank: 29, state: "Wisconsin"},
        {rank: 30, state: "District of Columbia"},
        {rank: 31, state: "New Hampshire"},
        {rank: 32, state: "Arizona"},
        {rank: 33, state: "North Dakota"},
        {rank: 34, state: "Ohio"},
        {rank: 35, state: "Delaware"},
        {rank: 36, state: "Iowa"},
        {rank: 37, state: "Oklahoma"},
        {rank: 38, state: "Montana"},
        {rank: 39, state: "West Virginia"},
        {rank: 40, state: "Maine"},
        {rank: 41, state: "Idaho"},
        {rank: 42, state: "Indiana"},
        {rank: 43, state: "New Mexico"},
        {rank: 44, state: "Washington"},
        {rank: 45, state: "Colorado"},
        {rank: 46, state: "Nevada"},
        {rank: 47, state: "Utah"},
        {rank: 48, state: "Wyoming"},
        {rank: 49, state: "Alaska"},
        {rank: 50, state: "Vermont"},
        {rank: 51, state: "Oregon"},
    ];
    
    useEffect(() => {
        Aos.init({duration:1000})
       }, []);

    return (
        <div id="information-page-container">
            <h1>Cases in the United States</h1>
            <div id="box-container" data-aos="fade-in">
                <div id="health-info-box" data-aos="fade-up">
                    <h1>41%</h1>
                    <h5>Anxiety</h5>
                </div>
                <div id="health-info-box" data-aos="fade-up">
                    <h1>30%</h1>
                    <h5>Depression</h5>
                </div>
                <div id="health-info-box" data-aos="fade-up">
                    <h1>28%</h1>
                    <h5>Loneliness/Social Isolation</h5>
                </div>
                <div id="health-info-box" data-aos="fade-up">
                    <h1>26%</h1>
                    <h5>Mood Swings</h5>
                </div>
                <div id="health-info-box" data-aos="fade-up">
                    <h1>23%</h1>
                    <h5>Phases of Sadness</h5>
                </div>
                <div id="health-info-box" data-aos="fade-up">
                    <h1>20%</h1>
                    <h5>Panic Attacks</h5>
                </div>
                <div id="health-info-box" data-aos="fade-up">
                    <h1>20%</h1>
                    <h5>Struggles with Self-Esteem</h5>
                </div>
                <div id="health-info-box" data-aos="fade-up">
                    <h1>14%</h1>
                    <h5>Phases of Lethargy</h5>
                </div>
                <div id="health-info-box" data-aos="fade-up">
                    <h1>8%</h1>
                    <h5>Phobias</h5>
                </div>
            </div>
            <div id="workdays-photo" data-aos="fade-right">
                <img src="https://www.newscenter1.tv/content/uploads/2022/07/l/j/screenshot-2022-07-13-130302.png"></img>
            </div>
            <div id="table-container">
                <h1>Mental Health by State</h1>
                <table data-aos="fade-left">
                    <tr>
                        <th>Rank</th>
                        <th>State</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.rank}</td>
                                <td>{val.state}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}