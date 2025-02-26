'use client';

import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from "swiper/modules";

interface SwipeSlideProps {
    children: ReactNode;
}

const SwipeSlide: React.FC<SwipeSlideProps> = ({ children }) => {
    return (
        <div className="w-5/6 max-w-6xl mx-auto overflow-hidden">
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 5 },
                }}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                modules={[Pagination, Navigation]}
                className="pb-10"
            >
                {children}
            </Swiper>
        </div>
    );
};

export default SwipeSlide;
