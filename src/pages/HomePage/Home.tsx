import React from "react";

import "./Home.css";
import SlideItem from "../../components/SlideItem/SlideItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BuyBox from "../../components/BuyBox/BuyBox";
import shirt from "../../assets/icons/shirt.svg";
import shoes from "../../assets/icons/shoes.svg";
import headphone from "../../assets/icons/headphone.svg";
import pants from "../../assets/icons/pants.svg";

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

  const imageLinks = [
    {
      image: "/src/assets/imgs/collection-1.png",
    },
    {
      image: "/src/assets/imgs/collection-2.png",
    },
    {
      image: "/src/assets/imgs/collection-3.png",
    },
  ];

  return (
    <div className="home-wrapper">
      <div className="carousel">
        <Swiper
          className="itens"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {slideItems.map((item) => (
            <SwiperSlide key={item.index}>
              <item.component />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="collection-wrappper">
        <div className="card-wrapper">
          <h2>Coleções em destaque</h2>
          <div className="cards">
            {imageLinks.map((item, index) => (
              <BuyBox key={index} imageLink={item.image} />
            ))}
          </div>
        </div>
      </div>
      <div className="highlights-wrapper">
        <h2>Coleções em destaque</h2>
        <div className="itens-wrapper">
          <ul>
            <li>
              <div>
                <img src={shirt} alt="" />
              </div>
              <p>Camisetas</p>
            </li>
            <li>
              <div>
                <img src={pants} alt="" />
              </div>
              <p>Calças</p>
            </li>
            <li>
              <div>
                <img src={pants} alt="" />
              </div>
              <p>Bonés</p>
            </li>
            <li>
              <div>
                <img src={headphone} alt="" />
              </div>
              <p>Headphones</p>
            </li>
            <li>
              <div>
                <img src={shoes} alt="" />
              </div>
              <p>Tênis</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
