import React from "react";
import CardApp from "../components/CardApp.jsx";
import Carousel from "../components/CarouselApp.jsx";
import { detalleCard } from "../data/info.js";

const HomeScreen = ({ darkMode }) => {
  return (
    <>
      <Carousel />
      <div className="container">
        <div className="row mt-5 pb-5">
          {detalleCard.map((item, index) => (
            <CardApp key={index} item={item} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
