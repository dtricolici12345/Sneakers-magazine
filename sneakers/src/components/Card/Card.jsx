/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import  { useState } from 'react';
import styles from './Card.module.scss';

function Card(props) {
const [ isAdded, setIsAdded ] =useState(false);

const handleClickPlus = () => {
  setIsAdded(!isAdded)
};


  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onClickFavorite}>
        <img src="img/heart-unliked.svg" alt="unliked"  />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{props.price} EUR.</b>
        </div>
        <img
          className={styles.plus}
          onClick={handleClickPlus}
          src={isAdded ? '/img/done.svg' : '/img/plus1.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
