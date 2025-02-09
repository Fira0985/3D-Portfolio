import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import About from "./about";
import Contact from "./contact";
import EducationPage from "./education";
import Home from "./home";
import Project from "./project";

function CubeSlider() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted ? (
        <Swiper
            effect="cube"
            speed={1500} // Controls cube rotation speed
            autoplay={{
                delay: 3000, // Keeps slide visible for 3 seconds
                disableOnInteraction: false, // Prevents autoplay from stopping on user click
            }}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 30,
                shadowScale: 0,
            }}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[EffectCube, Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide className="slide"><div><Home /></div></SwiperSlide>
            <SwiperSlide className="slide"><div><EducationPage /></div></SwiperSlide>
            <SwiperSlide className="slide"><div><Project /></div></SwiperSlide>
            <SwiperSlide className="slide"><div><About /></div></SwiperSlide>
            <SwiperSlide className="slide"><div><Contact /></div></SwiperSlide>
        </Swiper>
    ) : null;
}

export default CubeSlider;
