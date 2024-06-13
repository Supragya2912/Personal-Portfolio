import React from 'react'

export const Info = () => {
  return (
    <div className="about__info grid">
      
       <div className="about__box">
       <i class='bx bxs-briefcase'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>
        </div> 

        <div className="about__box">
        <i class='bx bx-support'></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}
