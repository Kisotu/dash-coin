import React, { useEffect, useState } from "react";
import Axios from "axios";
// import { Link } from "react-router-dom";

import "./CryptoChart.css";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CryptoTable = () => {
  //store it in a state
  const [data, setData] = useState([]);
  // fetch data through coingeckp api
  useEffect(() => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true"
    )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  });
  //map the data through the table
  //conditional rendering of the sparkline depending on trend
  return (
    <div className="wrapper">
      <div className="widget">
        <div className="card">
          <div>
            <h4 className="title">Top Gainer</h4>
            <h4>BTC +1.2%</h4>
          </div>
          <div>Sparkline</div>
        </div>
        <div>
          <div className="card">
            <h4>Total Mkt Cap</h4>
            <h4>$ 456,245,854,357</h4>
            <div>+ 34%</div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div id="starred" className="px-2 pt-1 mt-2">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {/* <th>#</th> */}
                  <th>Asset</th>
                  <th>Market Cap</th>
                  <th>Price</th>
                  <th>Volume(24H)</th>
                  <th>% Change</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                {data.map((crypto) => (
                  <tr>
                    {/* <td>
                    <div className="d-flex mt-2 border-right">
                      <div className="box p-2 rounded">
                        <span className="fas fa-star text-primary px-1"></span>
                      </div>
                    </div>
                  </td> */}
                    <td>
                      <div className="d-flex flex-column">
                        {/* <div className="text-muted">Name</div> */}
                        <div className="d-flex align-items-center">
                          <div>
                            <img
                              // insert object rerence for asset symbol
                              src={crypto.image}
                              alt=""
                              className="icons"
                            />
                          </div>
                          <b className="pl-2 asset">{crypto.name}</b>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column">
                        {/* volume here */}
                        {/* <div className="text-muted">Market cap</div> */}
                        <div>
                          <b>${crypto.market_cap}</b>
                        </div>
                      </div>
                    </td>
                    {crypto.price_change_24h > 0 ? (
                      <td>
                        <div className="d-flex flex-column" style={{
                          color:'green'
                        }}>
                          {/* <div className="text-muted">Price</div> */}
                          <div>
                            {/* price here */}
                            <b>${crypto.current_price}</b>
                          </div>
                        </div>
                      </td>
                    ) : (
                      <td>
                        <div className="d-flex flex-column" style={{
                          color:'red'
                        }}>
                          {/* <div className="text-muted">Price</div> */}
                          <div>
                            {/* price here */}
                            <b>${crypto.current_price}</b>
                          </div>
                        </div>
                      </td>
                    )}

                    <td>
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center labels">
                          {/* <div className="text-muted">Volume</div> */}
                        </div>
                        <div>
                          {/* volume goes here */}
                          <b>${crypto.total_volume}</b>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center labels">
                          {/* percentage change */}
                          {/* <div className="text-muted">Change</div> */}
                        </div>
                        {crypto.price_change_percentage_24h > 0 ? (
                          <div>
                            <b
                              style={{
                                color: "green",
                              }}
                              className="red"
                            >
                              {crypto.price_change_percentage_24h}
                            </b>
                          </div>
                        ) : (
                          <div>
                            <b
                              style={{
                                color: "red",
                              }}
                              className="red"
                            >
                              {crypto.price_change_percentage_24h}
                            </b>
                          </div>
                        )}
                      </div>
                    </td>
                    {crypto.price_change_percentage_24h > 0 ? (
                      <td>
                        <div className="graph">
                          <Sparklines
                            data={crypto.sparkline_in_7d.price}
                            limit={100}
                            height={25}
                            width={150}
                          >
                            <SparklinesLine color="green" />
                          </Sparklines>
                        </div>
                      </td>
                    ) : (
                      <td>
                        <div className="graph">
                          <Sparklines
                            data={crypto.sparkline_in_7d.price}
                            limit={100}
                            height={25}
                            width={150}
                          >
                            <SparklinesLine color="red" />
                          </Sparklines>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTable;
