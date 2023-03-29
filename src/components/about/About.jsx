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
                  
                  
                    <p className="about__description">I am a third year grad at SRM Institute of Science and Technology pursuing my B-Tech in the branch of Computer Science and Engineering with Specialization in Cloud Computing.

                        I am a tech enthusiast, always trying to learn new technologies and apply them to build pet projects of my own. During my engineering days, I have learnt building responsive web apps using React and Redux; I have also learnt and used MySQL and PostgreSQL for backend applications and exploratory data analytics.</p>

                    <a download href={CV} target="__blank" className="button button--flex">Download CV</a>
                </div>


            </div>

        </section>
    )
}

export default About