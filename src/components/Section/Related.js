import React from "react";
import { Link } from "react-router-dom";
export default function Related() {
  return (
    <>
      <div className="d-flex">
        <div className="col-6">
          <div className="position-relative m-2">
            <Link to="/billeteras">
              <img
                src="/images/backgraund/wallet.jpg"
                alt=""
                className="w-100"
                height={450}
              />
            </Link>
            <div className="position-absolute top-0 start-0">
              <h1 className="text-uppercase text-light ms-4 mt-3 fw-light">
                Billeteras
              </h1>
            </div>
          </div>
        </div>
        <div className="col-6 mb-5">
          <div className="position-relative m-2">
            <Link to="/billeteras">
              <img
                src="/images/backgraund/card-slider.jpg"
                alt=""
                className="w-100"
                height={450}
              />
            </Link>
            <div className="position-absolute top-0 start-0">
              <h1 className="text-uppercase text-light ms-4 mt-3 fw-light">
                Card Sliders
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
