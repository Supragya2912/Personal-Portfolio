
import "./Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {



    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1tjh9ww', 'template_tqnt2de', form.current, '4eETJA9xcGin4Vetu')
       e.target.reset()
    };

    return (

        <section className="contact section" id="contact">
            <h2 className="section__title" >Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>


                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>


                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">anandsupragya@gmail.com</span>

                            <a href="mailto:anandsupragya@gmail.com" className="contact__button">Write to me<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>


                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">What's App</h3>
                            <span className="contact__card-data">+91 7970466650</span>

                            <a href="https://wa.me/7970466650" className="contact__button">Write to me<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                    </div>

                </div>

                <div className="contact__content">
                    <h3 className="contact__title"> Write your project </h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insert your name"></input>
                        </div>


                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Insert your email"></input>
                        </div>


                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Write your message"></textarea>
                        </div>

                        <button className="button button--flex"> Send Message</button>


                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact