import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; //Componente

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import CounterApp from "./components/CounterApp.jsx";
// import MoviesPaginationApp from "./components/MoviesPaginationApp.jsx";
// import "./index.css";

// ReactDOM.createRoot(donde, que)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <CounterApp /> */}
    {/* <MoviesPaginationApp /> */}
  </React.StrictMode>
);

//SPA
//SINGLE PAGE APP
