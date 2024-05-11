/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import Info from "./Info";
import axios from "axios";
import AppContext from "../components/context";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items }) {
  const { cartItems, setCartItems } = useContext(AppContext);

  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://6628e35a54afcabd07375526.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://6628e35a54afcabd07375526.mockapi.io/cart" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Error during creation :(");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between ">
          Cart
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/delete.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} EUR.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/delete.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>214,98$</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>10,74$</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Checkout <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Order is processed!" : "Cart empty"}
            description={
              isOrderComplete
                ? `Your order #${orderId} will soon be handed over to courier delivery.`
                : "Add at least one pair of sneakers to complete the order."
            }
            image={
              isOrderComplete
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
