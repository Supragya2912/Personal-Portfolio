import React from 'react'
import "./Certifications.css";
import { Data } from "./Data";

const Certifications = () => {
  return (
    <section className="certificate container section" id="certifications">
      <h2 className="section__title">Certification</h2>
      <span className="section__subtitle">My Certificates</span>

      <div className="certificate__container">
       {
        Data.map(({id , image ,title , description}) => {
          return (
            <div className="certificate__content" key={id}>

              <img src={image} alt="" className="certificate__image" />
              <h3 className="certificate__title">{title}</h3>
              <p className="certificate__description">{description}</p>

              </div>
          )
        })
       }
      </div>
    </section>
  )
}

export default Certifications