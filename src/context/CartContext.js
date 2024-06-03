import React, { useState } from "react";
import { addOrder } from "../firebase/index";
const CartContext = React.createContext();

const CartFunction = ({ children }, user) => {
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [buyer, setBuyer] = useState({});
  const [order, setOrder] = useState({});
  const [total, setTotal] = useState(0);
  const [units, setUnits] = useState(0);
  const [id, setId] = useState("");
  const totalCart2 = cart.map((item) => item.price * item.quantity);
  const totalCart = totalCart2.reduce((acc, red) => acc + red, 0);

  const addItem = (product) => {
    const isInCart = cart.find((item) => item.id === product.id);

    if (!isInCart) {
      setCart([
        ...cart,
        {
          id: product.id,
          type: product.product_type,
          price: product.price,
          brand: product.brand,
          img: product.img_product,
          model: product.model,
          quantity: product.count,
        },
      ]);

      setUnits(units + 1);
      setSubTotal(product.price * product.count);
      setTotal(product.price);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity += product.count;
        }
        return item;
      });
      setCart(newCart);
    }
  };

  const updateInCart = function (productId, newCount) {
    const isInCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newCount };
      }
      return item;
    });
    setCart(isInCart);
  };
  const deleteItem = (id) => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
  };

  const newOrder = () => {
    const nb = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      number: document.getElementById("addressNumber").value,
      phone: document.getElementById("phone").value,
    };
    setBuyer(nb);
    const orderNumber = Math.floor(Math.random() * 1000000);
    const date = new Date().toLocaleString();
    const buyer = nb;
    const orderToCart = addOrder(buyer, cart, totalCart, date, orderNumber);
    orderToCart.then((data) => {
      setId(data.id);
    });
    setOrder(orderToCart);
    cleanCart()
  };

  const cleanCart = () => {
    setCart([]);
    setBuyer([])
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        units,
        total,
        addItem,
        deleteItem,
        id,
        setId,
        cleanCart,
        totalCart,
        subTotal,
        updateInCart,
        newOrder,
        order,
        buyer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartFunction };
