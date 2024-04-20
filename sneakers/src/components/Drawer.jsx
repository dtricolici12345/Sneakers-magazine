/* eslint-disable no-extra-semi */
/* eslint-disable react/no-unescaped-entities */
function Drawer() {
    return(
        <div style={{ display: 'none'}} className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="mb-30 d-flex justify-between ">
            Pannier
            <img
              className="cu-p"
              src="\img\delete.svg"
              alt="Remove"
            />
          </h2>

          <div className="items flex">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Nike Air Max 270 Men's Sneakers</p>
                <b>120,9 EUR.</b>
              </div>
              <img
                className="removeBtn"
                src="img/delete.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Nike Air Max 270 Men's Sneakers</p>
                <b>129,9$</b>
              </div>
              <img
                className="removeBtn"
                src="img/delete.svg"
                alt="Remove"
              />
            </div>
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
      </div>
    )
};

export default Drawer;