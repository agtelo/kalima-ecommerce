import React from "react";
import { Link } from "react-router-dom";

const brand = () => {
  return (
    <div className="bran d-flex justify-content-center">
      <Link to="/" exact="true" className="navbar-brand">
        <img
          src="/images/logo.png"
          alt="Kalima"
          width={100}
          height={100}
          className="d-inline-block align-text-center"
        />
      </Link>
    </div>
  );
};

export default brand;
