import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({
  img_product,
  product_type,
  brand,
  model,
  price,
  id,
  category,
}) => {
  const formatMoney = (price) => {
    return price?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
  return (
    <>
      <div className="card">
        <div className="product-image ">
          <img src={img_product} alt="" />
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>{product_type}</strong>
              <br />
              <strong>{model}</strong>
            </li>
            <li className="list-group-item-price">
              <p>${formatMoney(price)}</p>
            </li>
          </ul>
          <Link to={`/${category}/${id}`}>
            <button type="button" className="btn-more">
              Ver Detalle
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
