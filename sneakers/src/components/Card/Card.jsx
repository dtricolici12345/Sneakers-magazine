/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styles from './Card.module.scss';
console.log(styles);

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="img/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{props.price} EUR.</b>
        </div>
        <button onClick={props.click} className="button">
          <img width={11} height={11} src="img/plusButton.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
