import React from "react";

const Coin = ({ image, name, symbol, price, volume }) => {
  return (
    <div>
      <div>
        <div>
          <img src={image} alt="crypto"></img>
          <h1>{name}</h1>
          <p>{symbol}</p>
        </div>
        <div>
          <p>{price} $</p>
          <p>{volume} $</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
