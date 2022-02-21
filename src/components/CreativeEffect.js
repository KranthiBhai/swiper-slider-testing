import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./styles.css";

// import required modules
import { EffectCreative } from "swiper";
import Shell from "./Shell";

export default function CreativeEffect() {
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
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: [0, 0, -400],
                        },
                        next: {
                          translate: ["100%", 0, 0],
                        },
                      }}
                    grabCursor={true}
                    loop={true}
                    modules={[EffectCreative]}
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
