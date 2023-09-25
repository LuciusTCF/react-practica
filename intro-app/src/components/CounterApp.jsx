import React, { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  //   let counter = 0;
  const aumentar = () => {
    setCounter(counter + 1);
    // counter = counter + 1;
    console.log(counter);
  };

  return (
    <div className="container">
      <h1>Contador {counter}</h1>
      <button onClick={aumentar}>+1</button>
    </div>
  );
};

export default CounterApp;
