import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import Loading from "./Components/Loading";
import Products from "./Components/Products";
import SpecialPage from "./Components/SpecialPage";
import { useTranslation } from "react-i18next";
import ShoppingCart from "./Components/ShoppingCart";
import Favorites from "./Components/Favorites";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
function App() {
  const { t } = useTranslation();
  const loading = useSelector(state => state.productsReducer.loading);
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/e/:courseID' element={<SpecialPage/>} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={loading ? <Loading /> : <Products />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  )
};

export default App;
