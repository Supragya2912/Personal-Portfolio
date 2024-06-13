import React from 'react';
import "./Certifications.css";
import { Data } from "./Data";

const Certifications = () => {
  return (
    <section className="certificate container section" id="certifications">
      <h2 className="section__title">Certification</h2>
      <span className="section__subtitle">My Certificates</span>

      <div className="certificate__container">
        {Data.map(({ id, image, title, description }) => {
          return (
            <div className="certificate__content" key={id}>
              <div className="certificate__card">
                <div className="certificate__image-container">
                  <img src={image} alt={title} className="certificate__image" />
                </div>
                <h3 className="certificate__title">{title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Certifications;
