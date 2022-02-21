import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import Shell from "./Shell";

export default function CoverflowEffect() {
    const profileData = [
        {
            img: "/profile/1.png",
        },
        {
            img: "/profile/2.png",
        },
        {
            img: "/profile/3.png",
        },
        {
            img: "/profile/4.png",
        },
        {
            img: "/profile/5.png",
        },
        {
            img: "/profile/6.png",
        },
        {
            img: "/profile/7.png",
        },
        {
            img: "/profile/8.png",
        },
        {
            img: "/profile/9.png",
        },
        {
            img: "/profile/10.png",
        },
    ];
    return (
        <>
            <Shell>
                <Swiper
                    spaceBetween={30}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    loop={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Navigation, Pagination]}
                    className="mySwiper"
                >
                    {profileData.map((data, index) => {
                        return (
                            <SwiperSlide>
                                <img src={data.img} alt="img" />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

            </Shell>

        </>
    );
}
