/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "./ProductViewPage.css";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import shoes from "../../assets/imgs/carousel-img.png";
import stars from "../../assets/icons/star-icon.svg";
import { useState } from "react";
import ProductListing from "../../components/ProductListing/ProductListing";
import { Cards } from "../../interfaces/Cards";
import arrow from "../../assets/icons/arrow-right.svg"

function ProductViewPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  const [corSelecionada, setCorSelecionada] = useState("azure");
  const [size, setSize] = useState("39");

  const slideItems = [
    {
      color: "#E2E3FF",
    },
    {
      color: "#FFE8BC",
    },
    {
      color: "#FFC0BC",
    },
    {
      color: "#DEC699",
    },
    {
      color: "#E8DFCF",
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
       descont: false,
       descontValue: 30,
       name: "K-Swiss V8 - Masculino",
       type: "Tênis",
       oldValue: 200,
       newValue: 100,
     },
     {
       image: "",
       descont: false,
       descontValue: 30,
       name: "K-Swiss V8 - Masculino",
       type: "Tênis",
       oldValue: 200,
       newValue: 100,
     },
   ];

  const selectColor = (event: any) => {
    setCorSelecionada(event.target.id);
  };

  const selectSize = (event: any) => {
    setSize(event.target.id);
  };

  const totalStars = 4;
  return (
    <div className="product">
      <div className="infos-wrapper ">
        <p>Home /</p>
        <p>Produtos / </p>
        <p>Tênis / </p>
        <p>Nike / </p>
        <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
      </div>
      <div className="principal-infos">
        <div className="slider-wrapper">
          <Swiper
            className="swiper"
            navigation={true}
            slidesPerView={1}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            loop={true}
            modules={[Pagination, Navigation, Thumbs]}
          >
            {slideItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="swiper-item"
                  style={{ backgroundColor: `${item.color}` }}
                >
                  <img src={shoes} alt="Imagem do tênis" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            className="list-swipper"
            onSwiper={setThumbsSwiper}
            spaceBetween={28}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {slideItems.map((item, index) => (
              <SwiperSlide
                key={index}
                style={{ backgroundColor: `${item.color}` }}
              >
                <div className="img-slider">
                  <img src={shoes} alt="Imagem do tênis" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="info-tenis">
          <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
          <span>Casual | Nike | REF:38416711</span>
          <div className="rank-wrapper">
            <div className="star-wrapper">
              {[...Array(totalStars)].map((item, index) => (
                <svg
                  width="14.5"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  key={index}
                >
                  <path
                    key={index}
                    d="M8.15102 1.2306L10.0003 5.65038L14.7346 6.06108C15.063 6.08972 15.1966 6.50343 14.9473 6.72122L11.3563 9.86292L12.4324 14.5367C12.507 14.8614 12.1585 15.1169 11.8764 14.9443L7.80774 12.4666L3.73906 14.9443C3.45622 15.1162 3.10846 14.8607 3.18309 14.5367L4.25921 9.86292L0.667401 6.72047C0.418146 6.50268 0.550983 6.08896 0.880089 6.06033L5.61444 5.64962L7.46371 1.2306C7.59206 0.923134 8.02266 0.923134 8.15102 1.2306Z"
                    stroke="#F6AA1C"
                    fill="#F6AA1C"
                  />
                </svg>
              ))}
              {[...Array(5 - totalStars)].map((item, index) => (
                <svg
                  width="14.5"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  key={index}
                >
                  <path
                    d="M8.15102 1.2306L10.0003 5.65038L14.7346 6.06108C15.063 6.08972 15.1966 6.50343 14.9473 6.72122L11.3563 9.86292L12.4324 14.5367C12.507 14.8614 12.1585 15.1169 11.8764 14.9443L7.80774 12.4666L3.73906 14.9443C3.45622 15.1162 3.10846 14.8607 3.18309 14.5367L4.25921 9.86292L0.667401 6.72047C0.418146 6.50268 0.550983 6.08896 0.880089 6.06033L5.61444 5.64962L7.46371 1.2306C7.59206 0.923134 8.02266 0.923134 8.15102 1.2306Z"
                    stroke="#F6AA1C"
                  />
                </svg>
              ))}
            </div>
            <div className="rank">
              <p>4.7</p>
              <img src={stars} alt="" />
            </div>
            <p>(90 avaliações )</p>
          </div>
          <div className="value">
            <span>
              R$ <p>219,00</p>
            </span>
            <span>219,00</span>
          </div>
          <div className="description-wrapper">
            <h5>Descrição do produto</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="size-wrapper">
            <h5>Tamanho</h5>
            <ul>
              <li
                id="39"
                onClick={selectSize}
                className={`${size === "39" ? "active" : ""}`}
              >
                39
              </li>
              <li
                id="40"
                onClick={selectSize}
                className={`${size === "40" ? "active" : ""}`}
              >
                40
              </li>
              <li
                id="41"
                onClick={selectSize}
                className={`${size === "41" ? "active" : ""}`}
              >
                41
              </li>
              <li
                id="42"
                onClick={selectSize}
                className={`${size === "42" ? "active" : ""}`}
              >
                42
              </li>
              <li
                id="43"
                onClick={selectSize}
                className={`${size === "43" ? "active" : ""}`}
              >
                43
              </li>
            </ul>
          </div>
          <div className="color-wrapper">
            <h5>Cor</h5>
            <ul>
              <li className={`${corSelecionada === "azure" ? "active" : ""}`}>
                <div
                  id="azure"
                  onClick={selectColor}
                  style={{ backgroundColor: "#6FEEFF" }}
                ></div>
              </li>
              <li className={`${corSelecionada === "red" ? "active" : ""}`}>
                <div
                  id="red"
                  onClick={selectColor}
                  style={{ backgroundColor: "#FF6969" }}
                ></div>
              </li>
              <li className={`${corSelecionada === "black" ? "active" : ""}`}>
                <div
                  id="black"
                  onClick={selectColor}
                  style={{ backgroundColor: "#5E5E5E" }}
                ></div>
              </li>
              <li className={`${corSelecionada === "blue" ? "active" : ""}`}>
                <div
                  id="blue"
                  onClick={selectColor}
                  style={{ backgroundColor: "#6D70B7" }}
                ></div>
              </li>
            </ul>
          </div>
          <button>Comprar</button>
        </div>
      </div>
      <div className="related-products">
        <div className="all">
          <h4>Produtos em Alta</h4>
          <span>
            <a href="">Ver todos</a>
            <img src={arrow} alt="" />
          </span>
        </div>
        <ProductListing cards={itensCards} />
      </div>
    </div>
  );
}

export default ProductViewPage;
