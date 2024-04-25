/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Card from "./components/Card/Card.jsx";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCarttItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://6628e35a54afcabd07375526.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://6628e35a54afcabd07375526.mockapi.io/cart")
      .then((res) => {
        setCarttItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios
      .post("https://6628e35a54afcabd07375526.mockapi.io/cart", obj);
        setCarttItems((prev) => [...prev, obj]);
      
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };


  const onRemoveItem = (id) => {
    axios
    .delete(`https://6628e35a54afcabd07375526.mockapi.io/cart/${id}`);
      setCarttItems((prev) => prev.filter((item)=> item.id !== id));
  }

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} onclose />

      <div className="content p-40">
        <div className="d-flex align-center justify-between  mb-40">
          <h1>{searchValue ? `Search by: ${searchValue}` : "All sneakers"}</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="\img\delete.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Search ..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
        {items 
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
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
