import { BookOpen, Folder, Home, Mail, MessageCircle, User } from "lucide-react";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCube, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; // Import React components
import './App.css';
import About from "./component/about";
import Contact from "./component/contact";
import EducationPage from "./component/education";
import HomePage from "./component/home";
import Project from "./component/project";

function App() {
  const swiperRef = useRef(null)

  const handleTransition = (index, event) => {

    event.preventDefault();
    if (swiperRef.current) {
      swiperRef.current.slideTo(index)
    } else {
      console.log('Swiper instance is not available!');
    }
  };

  return (
    <>
      <div className="App">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          effect="cube"
          speed={1500} // Controls cube rotation speed
          grabCursor={false}
          slidesPerView={1}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 30,
            shadowScale: 0,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[EffectCube, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="slide"><div><HomePage /></div></SwiperSlide>
          <SwiperSlide className="slide"><div><EducationPage /></div></SwiperSlide>
          <SwiperSlide className="slide"><div><Project /></div></SwiperSlide>
          <SwiperSlide className="slide"><div><About /></div></SwiperSlide>
          <SwiperSlide className="slide"><div><Contact /></div></SwiperSlide>
        </Swiper>
      </div>

      <div className="sidebar">
        <a href="#" className="first-anchor" onClick={(e) => handleTransition(0, e)}>
          <Home size={20} className="icon" /> Home
        </a>
        <a href="#" onClick={(e) => handleTransition(1, e)}>
          <BookOpen size={20} className="icon" /> Education
        </a>
        <a href="#" onClick={(e) => handleTransition(2, e)}>
          <Folder size={20} className="icon" /> My Projects
        </a>
        <a href="#" onClick={(e) => handleTransition(3, e)}>
          <User size={20} className="icon" /> About
        </a>
        <a href="#" onClick={(e) => handleTransition(4, e)}>
          <Mail size={20} className="icon" /> Contact Me
        </a>
        <a href="#">
          <MessageCircle size={20} className="icon" /> Ask AI
        </a>
      </div>
    </>
  )
}

export default App
