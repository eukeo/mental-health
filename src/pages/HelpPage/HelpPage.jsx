import './HelpPage.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function HelpPage() {

    useEffect(() => {
        Aos.init({duration:1000})
       }, []);

    return (
        <div id="help-page-container">
            <section id="health-tips">
                <h1>Tips for Better Mental Health</h1>
                <h5>Provided by BC Mental Health & Substance Use Services</h5>
                <p data-aos="fade-up">1. Make social connection a priority.</p>
                    <p data-aos="fade-up">- Phone calls and social networks have their place, but few things can beat the stress-busting, mood-boosting power of quality face-to-face time with other people, especially those you love and people who energize you.</p>
                <p data-aos="fade-up">2. Stay active.</p>
                    <p data-aos="fade-up">-Staying active is as good for the brain as it is for the body. Regular exercise or activity can have a major impact on your mental and emotional health, relieve stress, improve memory, and help you sleep better.</p>
                <p data-aos="fade-up">3. Talk to someone.</p>
                    <p data-aos="fade-up">-Talk to a friendly face. If you have concerns, stresses or worries, sharing these with someone who cares is one of the most effective ways to calm your nervous system and relieve stress.</p>
                <p data-aos="fade-up">4. Appeal to your senses.</p>
                    <p data-aos="fade-up">
                    Does listening to an uplifting song make you feel calm? Does squeezing a stress ball help you feel centred? What about taking a walk in nature and enjoying the sights and sounds of the trees? Everyone responds to sensory input a little differently, so experiment to find what works best for you.
                    </p>
                <p data-aos="fade-up">5. Take up a relaxation practice.</p>
                    <p data-aos="fade-up">-Yoga, mindfulness, meditation and deep breathing can help reduce overall levels of stress.</p>
                <p data-aos="fade-up">6. Make leisure and contemplation a priority.</p>
                    <p data-aos="fade-up">-We can all be guilty of being "too busy" to take some down time, but leisure time is a necessity for emotional and mental health. Take some time to relax, contemplate, and pay attention to the positive things as you go about your day — even the small things. Write them down if you can, because they can be easy to forget. Then reflect on them later if your mood is in need of a boost. </p>
                <p data-aos="fade-up">7. Eat a brain-healthy diet to support strong mental health.</p>
                    <p data-aos="fade-up">-Foods that can support your mood include fatty fish rich in omega-3s, nuts (walnuts, almonds, cashews and peanuts), avocados, beans, leafy greens (spinach, kale and Brussels sprouts), and fresh fruit such as blueberries.</p>
                <p data-aos="fade-up">8. Don’t skimp on sleep.</p>
                    <p data-aos="fade-up">-It matters more than you think. Sleep is our body and mind's best way to recharge and rejuvenate. One way to get sleep better is to take a break from the stimulation of screens — TV,  phones, tablets or computers — in the hours before bedtime. Consider reading or listening to relaxing music instead.</p>
                <p data-aos="fade-up">9. Find purpose and meaning.</p>
                    <p data-aos="fade-up">This is different for everyone but finding purpose in your day is a big factor to good mental health. You might try one of the following: Engage in work that makes you feel useful, invest in relationships and spend quality time with people who matter to you, volunteer, which can help enrich your life and make you happier,care for others, which can be as rewarding and meaningful as it is challenging, think of one good deed or gesture to do each day.</p>
                <p data-aos="fade-up">10. Get help if you need it.</p>
                <p data-aos="fade-up">If you or a loved one needs support, there are many programs and resources that are available to you.</p>
            </section>
            <div id="seek-help-container" data-aos="fade-up">
                <p>If you or someone you know is struggling or in crisis, help is available. Call or text 988 or chat 988lifeline.org . Text MHA to 741741 to connect with a trained Crisis Counselor from Crisis Text Line . Call 911 or go to the nearest emergency room.</p>
            </div>
        </div>
    )
}