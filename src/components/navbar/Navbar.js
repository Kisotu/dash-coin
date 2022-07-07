import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <h3 className="brand">Brand</h3>
        <h3 className="nav-item">Exchange</h3>
        <h3 className="nav-item">Wallet</h3>
      </div>
      <div className="nav-right">
        <input
          type="search"
          name="search"
          className="coin-search"
          id="searchcoin"
          placeholder="Search Coin"
        />
        <button className="icon">
          <FaSearch />
        </button>
      </div>
    </div>
  )
}

export default Navbar