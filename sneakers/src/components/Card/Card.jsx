/* eslint-disable react/prop-types */

import stylesCard from "./Card.module.scss";
import { useState } from "react";



function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus1 = () => {
    console.log("Title:", title);
    console.log("ImageUrl:", imageUrl);
    console.log("Price:", price);
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  

  const onClickFavorite = () => {
    onFavorite({id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.favorite} onClick={onFavorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? "/img/heart-liked1.svg" : "/img/heart-unliked.svg"}
          alt="unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} EUR.</b>
        </div>
        <img
          className={stylesCard.plus}
          onClick={onClickPlus1}
          src={
            isAdded ? "/img/done.svg" : "/img/plus1.svg"
          }
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;