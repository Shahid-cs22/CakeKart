import React from "react";
import "./AddToCart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem
} from "../../Reduxx/CartSlice";

const AddToCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartItems);

  // total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="addcart-section">
        <h2 className="pt-5">Add To Cart Page</h2>

        {cart.length === 0 && (
          <p className="empty-cart">Your cart is empty</p>
        )}

        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-img"
            />

            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>₹ {item.price}</p>

              <div className="quantity-controls">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <div className="cart-total">
            <h3>Total: ₹ {totalPrice}</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AddToCart;
