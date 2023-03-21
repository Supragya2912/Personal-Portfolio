import React from 'react'
import { PhotoData } from './PhotoData'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const Photos = () => {
    return (
        <section className="photos container section" id="photos">
            <h2 className="section__title">Photography</h2>
            <span className="section__subtitle">Some of my mobile clicks</span>

            <Swiper className="photos__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}>

                {PhotoData.map(({ id, image, description }) => {
                    return (
                        <SwiperSlide className="phtotos__card" key={id}>
                            <img src={image} alt="" className="photos__img" />

                            {/* <h3 className="phtotos__name">{title}</h3> */}
                            <p className="phtotos__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section >
    )
}

export default Photos