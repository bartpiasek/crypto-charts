import React, { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./coin";
import Header from "./header";

const FetchData = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="layout__main">
      <div className="layout__header">
        <h1>HODL</h1>
        <h3>Search currency</h3>
        <form>
          <input type="text" placeholder="Search" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            className="layout__rows"
            key={coin.id}
            name={coin.name}
            image={coin.image}
            price={coin.current_price}
            marketcap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
};

export default FetchData;
