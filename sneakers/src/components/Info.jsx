/* eslint-disable react/prop-types */
import { useContext } from "react";
import AppContext from '../components/context';

const Info = ({ title, image, description }) => {
    const { setCartOpened } = useContext(AppContext);
    return (
        <div className="cartEmpty  d-flex align-center justify-center flex-column flex">
            <img
                className="mb-20"
                width="120px"
                height="120px"
                src={image}
                alt="Empty"
            />
            <h2>{title}</h2>
            <p className="opacity-6 mb-40">
                {description}
            </p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
                <img className="mr-15" src="/img/arrowback.png" alt="Arrowback" />
                Back
            </button>
        </div>
    );
};

export default Info;
