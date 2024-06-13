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


                    <p className="about__description">Passionate FullStack Developer with 1 year of experience in building dynamic web applications using React, NodeJS, and GoLang. Skilled
                        in creating interactive frontends, responsive designs, and utilizing MySQL, PostgreSQL, and MongoDB for backend development.
                        Committed to solving complex challenges and continuously learning new technologies.</p>

                    <a download href={CV} target="__blank" className="button button--flex">Download CV</a>
                </div>


            </div>

        </section>
    )
}

export default About