import React, { useContext, useEffect } from "react";
import "./CheckOut.css";
import { CartContext } from "../contexts/CartContext";

export default function CheckOut() {
  const {
    cartItems,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    decrementItemCount,
    totalPayment,
  } = useContext(CartContext);
  if (cartItems.length === 0) setIsCartOpen(false);
  return (
    <>
      <div className="checkOut">
        <ul className="grid grid-col-5">
          <li>product</li>
          <li>description</li>
          <li>price</li>
          <li>quantity</li>
          <li>remove</li>
        </ul>
        <div className="checkOut-items">
          {cartItems.map((item) => {
            const { id, name, imageUrl, price, quantity } = item;
            return (
              <div className="checkOut-item grid grid-col-5" key={id}>
                <img src={imageUrl} alt={name} />
                <p>{name}</p>
                <span className="quantity">{price}$</span>
                <div className="checkOut-item-quantity">
                  <span
                    className="action-hover"
                    onClick={() => decrementItemCount(item)}
                  >
                    &#10094;
                  </span>
                  <span>{quantity}</span>
                  <span
                    className="action-hover"
                    onClick={() => addItemToCart(item)}
                  >
                    &#10095;
                  </span>
                </div>

                <p
                  className="action-hover"
                  onClick={() => removeItemFromCart(item)}
                >
                  &#10005;
                </p>
              </div>
            );
          })}
        </div>
        <hr />
        <span className="checkOut-total">Total: {totalPayment}$</span>
      </div>
    </>
  );
}
