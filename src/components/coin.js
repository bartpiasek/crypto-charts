import React from "react";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="layout__section">
      <div className="layout__wrapper">
        <div className="layout__container">
          <div className="layout__container-cardInfo">
            <img className="layout__img-logo" src={image} alt="crypto"></img>
            <h2>{name}</h2>
            <h5>{symbol}</h5>
          </div>
          <div>
            <p>{price} $</p>
            {priceChange < 0 ? (
              <p className="coin-percent-red">{priceChange.toFixed(2)} %</p>
            ) : (
              <p className="coin-percent-green">{priceChange.toFixed(2)} %</p>
            )}
            <p> Market_cap {marketcap.toLocaleString()} $</p>

            <p>Volume {volume.toLocaleString()} $</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Coin;
