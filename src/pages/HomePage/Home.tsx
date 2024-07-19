import React from "react";

import "./Home.css";
import SlideItem from "../../components/SlideItem/SlideItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function Home() {
  const slideItems = [
    {
      index: 0,
      component: SlideItem,
    },
    {
      index: 1,
      component: SlideItem,
    },
    {
      index: 2,
      component: SlideItem,
    },
    {
      index: 3,
      component: SlideItem,
    },
  ];

  return (
    <div className="home-wrapper">
      <div className="carousel">
        <Swiper
          className="itens"
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {slideItems.map((item) => (
            <SwiperSlide key={item.index}>
              <item.component />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
