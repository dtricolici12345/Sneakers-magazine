
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Drawer from "./components/Drawer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
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
        setCartItems(res.data);
      });
    axios
      .get("https://6628e35a54afcabd07375526.mockapi.io/favorite")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const addToCart = (obj) => {
    axios
      .post("https://6628e35a54afcabd07375526.mockapi.io/cart", obj)
      .then((res) => setCartItems((prev) => [...prev, res.data]));
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://662b9d6cde35f91de158e41b.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://6628e35a54afcabd07375526.mockapi.io/favorite/${obj.id}`);
      } else {
        const { data } = await axios.post('https://6628e35a54afcabd07375526.mockapi.io/favorite', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add to favorites.');
    }
  };


  const onChangeSearchInput = (event) => {
  
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={addToCart}
            />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />}
        />
      </Routes>
    </div>
  );
}

export default App;
