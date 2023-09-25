import React, { useEffect } from "react";

const MensajeApp = ({ message }) => {
  //Efecto cuando se monta el componente
  useEffect(() => {
    console.log("Componente montado");
  }, []);

  //Efecto cuando se desmonta el componente
  useEffect(() => {
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  return <h3>{message}</h3>;
};

export default MensajeApp;

//   console.log(props);

//desestructuración de objetos
//   const { message } = props;

//desestructuración de arreglos
//   const dias = ["Lunes", "Martes", "Miércoles"];
//   dias[0]; //Lunes

//   const [posicion1, posicion2, cualquiera] = dias;
//   console.log(posicion1);
//   console.log(posicion2);
//   console.log(cualquiera);

//   const state = ["Hola", () => alert("Hola mundo")];

//   const [stateInicial, setStateInicial] = state;
