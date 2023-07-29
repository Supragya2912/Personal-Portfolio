import React, { useState } from 'react'
import "./Projects.css";
const Projects = () => {

    const [toggleSwitch, setToggleSwitch] = useState(0);

    const toggleValue = (index) => {
        setToggleSwitch(index);
    }
    return (

        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Pet Projects</span>

            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <h3 className="projects__title">FoodieFlix</h3>
                    </div>

                    <span className="projects__button" onClick={() => { toggleValue(1) }}>View <i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggleSwitch === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => { toggleValue(0) }}></i>
                            <h3 className="projects__modal-title">FoodieFlix</h3>
                            <p className="projects__modal-description">This is a MERN stack app which has allows user to order food online. The app uses React as client side handling and server side is handled with Express alongwith MongoDB as database</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">React UI development</p>
                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Handling Server Side using Node JS</p>
                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Authentication using JWT and Bycrpt Js</p>
                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Connecting Mongo DB to server and client</p>
                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <a href='https://github.com/Supragya2912/FoodieFlix' target="_blank">Source Code</a>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <h3 className="projects__title">Cat PokeDex</h3>
                    </div>

                    <span className="projects__button" onClick={() => { toggleValue(2) }}>View <i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggleSwitch === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => { toggleValue(0) }}></i>

                            <h3 className="projects__modal-title">Cat PokeDex</h3>
                            <p className="projects__modal-description"> It is a simple CRUD application where state is maintained on the frontend and one can list all cats,
                                add new cats, edit and delete cats. This uses ReactJS on an actual application when building this out.</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Add Cats Name</p>
                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Delete Cats Name</p>
                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <a href='https://github.com/Supragya2912/Cat-Pokedex' target= "_blank">Source Code</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <h3 className="projects__title">Youtube Clone</h3>
                    </div>

                    <span className="projects__button" onClick={() => { toggleValue(3) }}>View <i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggleSwitch === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => { toggleValue(0) }}></i>

                            <h3 className="projects__modal-title">YouTube Clone</h3>
                            <p className="projects__modal-description">I built a simple YouTube clone app as a part of workshop I attended. This application uses YouTube public list and search APIs to show videos
                                in a grid. A user can see videos by category, search videos and play them. </p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">ReactJS component architecture</p>
                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Modularising and organising code</p>

                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">API Integration</p>

                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Redux for state management</p>

                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <a href='https://github.com/Supragya2912/YouTube-Clone' target="_blank">Source Code</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* <div className="projects__content">
                    <div>
                        <h3 className="projects__title">Shopping App</h3>
                    </div>

                    <span className="projects__button" onClick={() => { toggleValue(4) }}>View <i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggleSwitch === 4 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => { toggleValue(0) }}></i>

                            <h3 className="projects__modal-title">Shopping App</h3>
                            <p className="projects__modal-description">This app is built using React JS and Redux is used for the state management. The app makes an API call and displays the items to shop. </p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">ReactJS component architecture</p>
                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Redux State Management</p>

                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">API Integration</p>

                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <a href='https://github.com/Supragya2912/ShoppingApp' target="_blank">Source Code</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <h3 className="projects__title">Calculator</h3>
                    </div>

                    <span className="projects__button" onClick={() => { toggleValue(5) }}>View <i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggleSwitch === 4 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => { toggleValue(0) }}></i>

                            <h3 className="projects__modal-title">Calculator</h3>
                            <p className="projects__modal-description">This a a basic Arithmatic Calculator built using ReactJS.This calculator takes a user input and displays the result after the arithmatic calculation </p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">ReactJS component architecture</p>
                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Basic logic building over arithematic calculation</p>

                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <a href='https://github.com/Supragya2912/Calculator' target="_blank">Source Code</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                <div className="projects__content">
                    <div>
                        <h3 className="projects__title">Calculator</h3>
                    </div>

                    <span className="projects__button" onClick={() => { toggleValue(4) }}>View<i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggleSwitch === 4 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => { toggleValue(0) }}></i>

                            <h3 className="projects__modal-title">Calculator</h3>
                            <p className="projects__modal-description">This a a basic Arithmatic Calculator built using ReactJS.This calculator takes a user input and displays the result after the arithmatic calculation .</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">ReactJS component architecture</p>
                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Basic logic building over arithematic calculation</p>

                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <a href='https://github.com/Supragya2912/Calculator' target="_blank">Source Code</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="projects__content">
                    <div>
                        <h3 className="projects__title">Parallax-Background</h3>
                    </div>

                    <span className="projects__button" onClick={() => { toggleValue(5) }}>View<i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggleSwitch === 5 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => { toggleValue(0) }}></i>

                            <h3 className="projects__modal-title">Parallax Background</h3>
                            <p className="projects__modal-description">This is a learning codebase for Game Development using JavaScript.</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">This creates the gaming environment using JavaScript</p>
                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">This has screen movement which is popular in gaming environment</p>

                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">This is an ongoing project</p>

                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <a href='https://github.com/Supragya2912/Parallax-Background' target="_blank">Source Code</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="projects__content">
                    <div>
                        <h3 className="projects__title">Online Music Player</h3>
                    </div>

                    <span className="projects__button" onClick={() => { toggleValue(6) }}>View<i className="uil uil-arrow-right projects__button-icon"></i></span>

                    <div className={toggleSwitch === 6 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => { toggleValue(0) }}></i>

                            <h3 className="projects__modal-title">Online Music Player</h3>
                            <p className="projects__modal-description">This is a Music Player created using API integration.</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Designing of the Music Player UI</p>
                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Authentication using Spotify JS</p>

                                </li>
                            </ul>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">API integration to list songs, liked songs and artists</p>

                                </li>
                            </ul>
                        
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <a href='https://github.com/Supragya2912/Spotify-Clone' target="_blank">Source Code</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
