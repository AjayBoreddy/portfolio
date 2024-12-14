import React from 'react';
import '../index.css';
import Eco from '../assets/application.png';
import Blog from '../assets/blog.png';
import Social from '../assets/social.png';
import Spotify from '../assets/spotify.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
    const data = [
        {
            src: Eco,
            url: "#!"
        },
        {
            src: Blog,
            url: "#!"
        },
        {
            src: Social,
            url: "#!"
        },
        {
            src: Spotify,
            url: "#!"
        },
    ];

    return (
        <section id="projects">
            <div className="projects-heading">
                <h3>Recent Projects</h3>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}  // Enable looping
                autoplay={{
                    delay: 2500,  // Autoplay interval in ms
                    disableOnInteraction: false,  // Keep autoplay even after interaction
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                    type: "bullets",
                    dynamicBullets: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                {data.map(project => (
                    <SwiperSlide key={project.src}>
                        <div className="project-box">
                            <a href={project.url}>
                                <img src={project.src} alt="project" />
                                <div className="p-overlay">
                                    <strong>OutServed Projects</strong>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="github-btn">
                <a href="https://github.com/AjayBoreddy" className="btn-link">
                    My Github <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </section>
    );
}

export default Projects;
