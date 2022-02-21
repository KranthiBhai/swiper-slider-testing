import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import Shell from "./Shell";

export default function CardsEffect() {
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
                    effect={"cards"}
                    grabCursor={true}
                    loop={true}
                    modules={[EffectCards]}
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
