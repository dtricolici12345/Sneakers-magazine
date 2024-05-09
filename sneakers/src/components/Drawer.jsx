/* eslint-disable react/prop-types */

import Info from "./Info";



function Drawer({ onClose, onRemove, items }) {
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
  <div key={obj.id} className="cartItem d-flex align-center mb-20">
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
              <button className="greenButton">
                Checkout <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
      <Info
      title=""
      description=""
      image=""/>
        )}
      </div>
    </div>
  );
}

export default Drawer;