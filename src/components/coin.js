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
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crypto"></img>
            <h2>{name}</h2>
            <h5 className="coin-symbol">{symbol}</h5>
          </div>
          <div className="coin-data">
            <p className="coin-price">{price} $</p>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)} %</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)} %</p>
            )}
            <p>{marketcap.toLocaleString()} $</p>

            <p>{volume.toLocaleString()} $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
