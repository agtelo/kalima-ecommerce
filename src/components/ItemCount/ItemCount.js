import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./itemCount.css";

export default function ItemCount({
  stock,
  onAdd = () => {},
  quantity,
  productId,
}) {
  const { updateInCart } = useContext(CartContext);
  const defaultValue = quantity ?? 1;

  const [count, setCount] = useState(defaultValue);

  // const increment = () => {
  //   if (count < stock) {
  //     setCount(count + 1);
  //   } else {
  //     setCount(count);
  //   }
  // };
  const increment = () => {
    setCount(count + 1);
    if (productId != undefined) {
      updateInCart(productId, count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      if (productId != undefined) {
        updateInCart(productId, count - 1);
      }
    }
  };
  // const decrement = () => {
  //   if (count > 1) {
  //     setCount(count - 1);
  //   }
  // };

  useEffect(() => {
    onAdd(count);
  }, [count, onAdd]);

  useEffect(() => {
    if (quantity) {
      setCount(quantity);
      // updateInCart(productId, count);
    }
  }, [quantity]);

  return (
    <>
      <div className="container-itemCount">
        <div className="container-buttons">
          <button className="btn-count" onClick={decrement}>
            <i className="bi bi-dash-square"></i>
          </button>
          <div className="quantity">{count}</div>
          <button className="btn-count" onClick={increment}>
            <i className="bi bi-plus-square"></i>
          </button>
        </div>
        <div className="container-buttons"></div>
      </div>
    </>
  );
}
