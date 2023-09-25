import React, { useState } from "react";
import movies from "../data/movies.json";
import CardApp from "./CardApp";
import MensajeApp from "./MensajeApp";

const MoviesPaginationApp = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  //operador ternario
  //elemento a comparar
  //valor verdadero
  //valor falso
  //   show ? console.log("Soy un valor verdadero") : console.log("Falso!!");
  //   show && console.log("Soy un valor verdadero");

  //   if (show) {
  //     return <h1>Soy un valor verdadero</h1>;
  //   } else {
  //     return <h1>Soy un valor falso</h1>;
  //   }

  const showDescription = () => {
    setShow(!show);
  };

  const nextPage = () => {
    if (index < movies.length - 1) {
      setIndex(index + 1);
    }
  };
  const prevPage = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <button onClick={prevPage} disabled={index == 0 && true}>
        Prev
      </button>
      <button onClick={nextPage} disabled={index == movies.length - 1 && true}>
        Next
      </button>
      <CardApp movie={movies[index]} funcion={showDescription} />
      {show ? (
        <MensajeApp message={movies[index].description} />
      ) : (
        <h3>Toca en la imagen para ver más</h3>
      )}
    </div>
  );
};

export default MoviesPaginationApp;
