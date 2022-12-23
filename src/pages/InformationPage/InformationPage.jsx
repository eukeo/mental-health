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
            <h1 data-aos="fade-in">Cases in the United States</h1>
            <div id="box-container" data-aos="fade-in">
                <a href="https://www.healthline.com/health/effective-ways-to-fight-anxiety-without-drugs" target="_blank" id="health-info-box" data-aos="fade-down" data-aos-duration="1000">
                    <h1>41%</h1>
                    <h5>Anxiety</h5>
                </a>
                <a href="https://www.healthline.com/health/depression/how-to-fight-depression" target="_blank" id="health-info-box" data-aos="fade-down" data-aos-duration="1250">
                    <h1>30%</h1>
                    <h5>Depression</h5>
                </a>
                <a href="https://www.webmd.com/mental-health/features/beat-loneliness" target="_blank" id="health-info-box" data-aos="fade-down" data-aos-duration="1500">
                    <h1>28%</h1>
                    <h5>Loneliness/Social Isolation</h5>
                </a>
                <a href="https://centerstone.org/our-resources/health-wellness/what-are-mood-swings-and-how-to-manage-them/" target="_blank" id="health-info-box" data-aos="fade-down" data-aos-duration="1750">
                    <h1>26%</h1>
                    <h5>Mood Swings</h5>
                </a>
                <a href="https://www.helpguide.org/articles/grief/coping-with-grief-and-loss.htm" target="_blank" id="health-info-box" data-aos="fade-down" data-aos-duration="2000">
                    <h1>23%</h1>
                    <h5>Phases of Sadness</h5>
                </a>
                <a href="https://www.healthline.com/health/how-to-stop-a-panic-attack" target="_blank" id="health-info-box" data-aos="fade-down" data-aos-duration="2250">
                    <h1>20%</h1>
                    <h5>Panic Attacks</h5>
                </a>
                <a href="https://www.skillsyouneed.com/ps/self-esteem.html" target="_blank" id="health-info-box" data-aos="fade-down" data-aos-duration="2500">
                    <h1>20%</h1>
                    <h5>Struggles with Self-Esteem</h5>
                </a>
                <a href="https://www.medicalnewstoday.com/articles/lethargy#causes" target="_blank" id="health-info-box" data-aos="fade-down" data-aos-duration="2750">
                    <h1>14%</h1>
                    <h5>Phases of Lethargy</h5>
                </a>
                <a href="https://www.nhsinform.scot/healthy-living/mental-wellbeing/fears-and-phobias/ten-ways-to-fight-your-fears" target="_blank" id="health-info-box" data-aos="fade-down" data-aos-duration="3000">
                    <h1>8%</h1>
                    <h5>Phobias</h5>
                </a>
            </div>
            <div>
                <img src="https://www.verywellmind.com/thmb/u_YyxyiUz6qeT5AtcsF41O42ngY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/definition-of-mental-illness-4587855-v1-cd7f9f37c61c49099ac8ede282db1e73.png" id="what-is-it" data-aos="fade-up"></img>
            </div>
            <div id="definitions">
                <h1 data-aos="fade-in">Signs and Symptoms</h1>
                <h4 data-aos="fade-up">What is Anxiety?</h4>
                    <p data-aos="fade-up">Intense, excessive, and persistent worry and fear about everyday situations. Fast heart rate, rapid breathing, sweating, and feeling tired may occur.</p>
                <h4 data-aos="fade-up">What is depression?</h4>
                    <p data-aos="fade-up">A group of conditions associated with the elevation or lowering of a person's mood, such as depression or bipolar disorder.</p>
                    <h4 data-aos="fade-up">What is Loneliness/Social Isolation?</h4>
                        <p data-aos="fade-up">Loneliness is the feeling of being alone, regardless of the amount of social contact. Social isolation is a lack of social connections. Social isolation can lead to loneliness in some people, while others can feel lonely without being socially isolated.</p>
                    <h4 data-aos="fade-up">What are Mood Swings?</h4>
                        <p data-aos="fade-up">An abrupt change in mood or emotional state.</p>
                    <h4 data-aos="fade-up">What are Phases of Sadness?</h4>
                        <p data-aos="fade-up">Phases of Sadness can be compared to the Five Stages of Grief: Denial, Anger, Bargaining, Depression and Acceptance.</p>
                    <h4 data-aos="fade-up">What are Panic Attacks?</h4>
                        <p data-aos="fade-up">Sudden episode of intense fear or anxiety and physical symptoms, based on a perceived threat rather than imminent danger.</p>
                    <h4 data-aos="fade-up">What are Struggles with Self-Esteem?</h4>
                        <p data-aos="fade-up">Low self-esteem is when someone lacks confidence about who they are and what they can do. They often feel incompetent, unloved, or inadequate. People who struggle with low self-esteem are consistently afraid about making mistakes or letting other people down.</p>
                    <h4 data-aos="fade-up">What are Phases of Lethargy?</h4>
                        <p data-aos="fade-up">Lethargy can refer to feelings of fatigue as well as a lack of mental or physical motivation.</p>
                    <h4 data-aos="fade-up">What are Phobias?</h4>
                        <p data-aos="fade-up">A phobia is an anxiety disorder defined by a persistent and excessive fear of an object or situation. Phobias typically result in a rapid onset of fear and are usually present for more than six months.</p>
            </div>
            <div id="table-container">
                <h1 data-aos="fade-in">Most Affected States</h1>
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
};