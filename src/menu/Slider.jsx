import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";
import "../App.css";

function Slider() {
  return (
    <div className="bg-white py-5">
      <div className=" mt-20  containerProduct">
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                style={{
                  width: "1700px",
                  height: "450px",
                  borderRadius: "10px",
                  backgroundSize: "100%, 100%",
                }}
                src="https://example-for-exam.vercel.app/static/media/slider_img_1.b52758991907ca139bed.jpg"
                alt="Image 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{
                  width: "1700px",
                  height: "450px",
                  borderRadius: "10px",
                  backgroundSize: "100%, 100%",
                }}
                src="https://example-for-exam.vercel.app/static/media/slider_img_2.d2b62640a3fd93694d28.jpg"
                alt="Image 1"
              />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}

export default Slider;
