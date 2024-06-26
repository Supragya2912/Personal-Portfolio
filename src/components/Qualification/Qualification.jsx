import React, { useState } from 'react'
import './Qualification.css';

const Qualification = () => {


    const [toggleSwitch, setToggleSwitch] = useState(1);

    const toggleTab = (index) => {
        setToggleSwitch(index);
    }

    return (

        <>
            <section className="qualification section" id="qualification">
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My Journey</span>
            </section>

            <div className="qualification__container container">

                <div className="qualification__tabs">

                    <div className={toggleSwitch === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification icon"></i>Education
                    </div>

                    <div className={toggleSwitch === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification icon"></i>Experience
                    </div>

                </div>

                <div className="qualification__sections">
                    <div className={toggleSwitch === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data" style={{ textAlign: 'right' }}>


                            <div>
                                <h3 className="qualification__title">B.Tech</h3>
                                <span className="qualification__subtitle">
                                    SRM IST Delhi-NCR ,Ghaziabad
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2020- Present</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">12th CBSE</h3>
                                <span className="qualification__subtitle">
                                    Shivjyoti Senior Secondary School ,Kota
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2020</i>
                                </div>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">10th ICSE</h3>
                                <span className="qualification__subtitle">
                                    Mount Assisi School , Bhagalpur
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">2018</i>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className={toggleSwitch === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Phyfarm</h3>
                                <span className="qualification__subtitle">
                                    Full-Stack Developer
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">Oct'23 - Present</i>
                                </div>
                            </div>
                        </div>


                        <div className="qualification__data" style={{ textAlign: 'right' }}>
                            <div>
                                <h3 className="qualification__title">Phyfarm</h3>
                                <span className="qualification__subtitle">
                                    Front-end Developer
                                </span>
                                <span className="qualification__subtitle">
                                    (Internship)
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">Dec'22 - Sept'23 </i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>

    )
}

export default Qualification