/* eslint-disable react/no-unescaped-entities */
function Card() {
    return (
<div className="card">
            <div className="favorite">
              <img src="img/heart-unliked.svg" alt="unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="\img\sneakers\1.jpg"
              alt="Sneakers"
            />
            <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>129,99 $</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="img/plusButton.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
    )
}


export default Card;
