

import './SlideItem.css'
import carouselImg from "../../assets/imgs/carousel-img.png";

function SlideItem() {
  return (
    <div className="principal-wrapper">
      <div className="section-principal">
        <p>Melhores ofertas personalizadas</p>
        <h1>Queima de stoque Nike 🔥</h1>
        <p>
          Consequat culpa exercitation mollit nisi excepteur do do tempor
          laboris eiusmod irure consectetur.
        </p>
        <button>Ver Ofertas</button>
      </div>
      <div className="img-wrapper">
        <img src={carouselImg} alt="" />
      </div>
      <div className="circle-wrapper">
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default SlideItem