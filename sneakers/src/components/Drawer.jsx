/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-extra-semi */
/* eslint-disable react/no-unescaped-entities */

function Drawer({ onClose, items, onRemove }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between ">
          Pannier
          <img
            onClick={onClose}
            className="cu-p"
            src="\img\delete.svg"
            alt="ClosePannier"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 ">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} EUR.</b>
                  </div>
                  <img
                   
                  onClick={() => {
                    console.log("Object id:", obj.id); 
                    onRemove(obj.id)}}
                  className="removeBtn"
                  src="img/delete.svg"
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
                Checkout <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img
                className="mb-20"
                width="120px"
                height="120px"
                src="/img/empty-cart.jpg"
                alt="cartempty"
              />
              <h2>Cart is empty</h2>
              <p className="opacity-6">
                Add at least one pair of sneakers to make an order.
              </p>
              <button className="greenButton" onClick={onClose}>
                <img src="/img/arrow.svg" alt="arrow" />
                Go back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;