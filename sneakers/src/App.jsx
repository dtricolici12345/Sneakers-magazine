/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Card from "./components/Card/Card.jsx";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCarttItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://6628e35a54afcabd07375526.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

const onAddToCart = (obj) => {
  setCarttItems([...cartItems, obj]);
};

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} onclose />

      <div className="content p-40">
        <div className="d-flex align-center justify-between  mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Search ..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickPlus={(obj) => onAddToCart(obj)}
              onClickFavorite={() => {
                console.log("Pressed favorite");
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;