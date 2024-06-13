import React from 'react';
import { PhotoData } from './PhotoData';
import { Carousel } from 'react-responsive-carousel';
import './Photos.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the CSS for the carousel

const Photos = () => {
    return (
        <section className="photos__container container section" id="photos">
            <h2 className="section__title">Photography</h2>
            <span className="section__subtitle">Some of my mobile clicks</span>

            <Carousel autoPlay showThumbs={false} infiniteLoop showStatus={false}>
                {PhotoData.map(({ id, image, title }) => (
                    <div className="photos__card" key={id}>
                        <img src={image} alt={title} className="photos__img" />
                        <h3 className="photos__title">{title}</h3>
                    </div>
                ))}
            </Carousel>
        </section>
    );
}

export default Photos;
