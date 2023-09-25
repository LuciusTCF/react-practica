import React from "react";
import imagen1 from "../assets/01.jpg";
import imagen2 from "../assets/02.jpg";
import imagen3 from "../assets/03.jpg";
import "../css/carousel.css";

const Carousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner container-carousel">
        <div className="carousel-item active">
          <img src={imagen1} className="d-block w-100" alt="CyberPunk 2077" />
        </div>
        <div className="carousel-item">
          <img
            src={imagen2}
            className="d-block w-100"
            alt="Resident Evil 4 Remake"
          />
        </div>
        <div className="carousel-item">
          <img src={imagen3} className="d-block w-100" alt="Starfield" />
        </div>
        <div className="overlay">
          <div className="h-100 d-flex flex-column align-items-center justify-content-center text-white p-3">
            <h3 className="text-center">Conoce más de la plataforma</h3>
            <a
              className="btn btn-outline-light btn-lg"
              href="https://store.steampowered.com/"
            >
              Conoce más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
