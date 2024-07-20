import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


import "./Home.css";
import SlideItem from "../../components/SlideItem/SlideItem";
import BuyBox from "../../components/BuyBox/BuyBox";
import shirt from "../../assets/icons/shirt.svg";
import shoes from "../../assets/icons/shoes.svg";
import headphone from "../../assets/icons/headphone.svg";
import pants from "../../assets/icons/pants.svg";
import ProductListing from "../../components/ProductListing/ProductListing";
import arrow from "../../assets/icons/arrow-right.svg";
import yellowShoe from "../../assets/imgs/nike-yellow.png"

import { Cards } from "../../interfaces/cards";




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

  const itensCards: Cards[] = [
    {
      image: "",
      descont: true,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: true,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: true,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: true,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: true,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: true,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: true,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: true,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
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
                <img src={shirt} alt="Icone de Camisa" />
              </div>
              <p>Camisetas</p>
            </li>
            <li>
              <div>
                <img src={pants} alt="Icone de Calça" />
              </div>
              <p>Calças</p>
            </li>
            <li>
              <div>
                <img src={pants} alt="Icone de Calça" />
              </div>
              <p>Bonés</p>
            </li>
            <li>
              <div>
                <img src={headphone} alt="Icone de fone" />
              </div>
              <p>Headphones</p>
            </li>
            <li>
              <div>
                <img src={shoes} alt="Icone de Sapato" />
              </div>
              <p>Tênis</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="product-wrapper">
        <div className="trending">
          <h4>Produtos em Alta</h4>
          <span>
            <a href="">Ver todos</a>
            <img src={arrow} alt="" />
          </span>
        </div>
        <ProductListing cards={itensCards} />
      </div>
      <div className="promotion-wrapper">
        <div className="shoes-wrapper">
          <img src={yellowShoe} alt="" />
        </div>
        <div className="special-wrapper">
          <span>Oferta especial</span>
          <h4>Air Jordan edição de colecionador</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <button>Ver Oferta</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
