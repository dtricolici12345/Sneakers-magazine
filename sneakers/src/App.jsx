/* eslint-disable react/no-unescaped-entities */
import "./index.scss";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" />
          <div>
            <h3 className="text-uppercase">Sneakers</h3>
            <p className= "opacity-5">Best sneakers store</p>
          </div>
        </div>
        <div>
          <ul className="d-flex">
            <li className="mr-30">
              <img width={18} height={18} src="img/panier.svg" />
              <span>120 EUR.</span>
            </li>
            <li>
              <img width={18} height={18} src="img/User.svg" />
            </li>
          </ul>
        </div>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>


        <div className="d-flex">
        <div className="card">
          <img  width={133} height={112} src="img/sneakers/1.jpg" alt="Sneakers" />
          <h5>Nike Air Max 270 Men's Sneakers</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>120 EUR.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="img/plusButton.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img  width={133} height={112} src="img/sneakers/2.jpg" alt="Sneakers" />
          <h5>Nike Air Max 270 Men's Sneakers</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>120 EUR.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="img/plusButton.svg" alt="Plus" />
            </button>
          </div>
        </div>


        <div className="card">
          <img  width={133} height={112} src="img/sneakers/3.png" alt="Sneakers" />
          <h5>Nike Air Max 270 Men's Sneakers</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>120 EUR.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="img/plusButton.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img  width={133} height={112} src="img/sneakers/4.jpg" alt="Sneakers" />
          <h5>Nike Air Max 270 Men's Sneakers</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>120 EUR.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="img/plusButton.svg" alt="Plus" />
            </button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
