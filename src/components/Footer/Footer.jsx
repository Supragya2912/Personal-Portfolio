import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">
                Supragya
            </h1>
            <ul className="footer__list">
                <li>
                    <a href="#" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#" className="footer__link">Photography</a>
                </li>
            </ul>
            
            <div className="footer__social">
            <a href="https://www.instagram.com/_.supragya._/" className="footer__social-icon" target="_blank">
                <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/supragya-anand-052972234/" className="footer__social-icon" target="_blank">
                <i class="bx bxl-linkedin"></i>
            </a>

            <a href="https://github.com/Supragya2912" className="footer__social-icon" target="_blank">
                <i class="bx bxl-github"></i>
            </a>
            </div>

            <span className="footer__copy">&#169; Supragya Anand. All rights reserved</span>

        </div>
    </footer>
  )
  
}

export default Footer