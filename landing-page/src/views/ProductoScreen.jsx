import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { productos } from "../data/productos";
import imagen from "../assets/03.jpg";

const ProductoScreen = ({ darkMode }) => {
  const { id } = useParams();

  const productoEncontrado = productos.find((item) => {
    return item.id == id;
  });

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-8 offset-md-2">
          <div className={`card ${darkMode && "text-bg-dark"} mb-3`}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={imagen} className="img-fluid rounded-start" alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{productoEncontrado.producto}</h5>
                  <p className="card-text">{productoEncontrado.detalle}</p>

                  <div>
                    <Link className="btn btn-success" to="/buy">
                      Comprar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoScreen;
