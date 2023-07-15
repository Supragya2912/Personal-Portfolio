import React from 'react'
import "./About.css";
import { Info } from './Info';
import CV from '../../assets/Supragya_Anand.pdf';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">

                <div className="about__data">

                    <Info />


                    <p className="about__description">I am a final year student at SRM Institute of Science and Technology, specializing in Cloud Computing. As a tech enthusiast, I have
                        experience as a Frontend Engineer, utilizing React and Redux for an AgriTech startup. Proficient in Node.js, Express.js, PostgreSQL,
                        and MongoDB, I have built pet projects. Additionally, I actively practice algorithms and data structures on HackerRank and
                        LeetCode, solving over 100 problems on HackerRank and 30+ on LeetCode.</p>

                    <a download href={CV} target="__blank" className="button button--flex">Download CV</a>
                </div>


            </div>

        </section>
    )
}

export default About