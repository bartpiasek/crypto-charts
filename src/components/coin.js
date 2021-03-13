import React from "react";

const Coin = ({ image, name, symbol, price, volume }) => {
  return (
    <div className="layout__section">
      <div className="layout__wrapper">
        <div className="layout__container">
          <div className="layout__container-cardInfo">
            <img className="layout__img-logo" src={image} alt="crypto"></img>
            <h2>{name}</h2>
            <p>{symbol}</p>
          </div>
          <div>
            <p>{price} $</p>
            <p>{volume} $</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Coin;
