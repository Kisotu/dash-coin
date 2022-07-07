import React from "react";
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Coin from "./components/coin/Coin";
import Home from "./Home";

const App = () => {
  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/coin" element={<Coin />} />
      </Routes>
    </Router>
  </div>
};

export default App;
