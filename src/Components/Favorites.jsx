import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImSad } from "react-icons/im";
import { useTranslation } from "react-i18next";
import "../styles/ZeroProduct.css";
import { FaTrashAlt } from "react-icons/fa";
import { removeva } from "../Redux/features/navbar/navbarSlice.js";
import { useNavigate } from "react-router-dom";
import "../styles/ShoppingCart.css";
function ShoppingCart() {
  const productsInShoppingCart = useSelector((state) => state.navbarReducer.va);
  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < productsInShoppingCart.length; i++) {
      totalPrice += productsInShoppingCart[i].price * productsInShoppingCart[i].quantity;
    }
    return totalPrice;
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const defaultStyle = {
    color: "#9d174d",
    cursor: "pointer"
  }
  const otherStyle = {
    color: "#dcd9d9",
    cursor: "default"
  }
  return (
    <>      <h1 id="shopping-cart-heading">{t("favs")}</h1>
      {calculateTotalPrice() === 0 ? (
        <div id="zero-product-container">
          <h4>{t("empty")}</h4>
          <ImSad id="sad-icon" />
        </div>
      ) : (
        <>
          <div className="parent-favs">
            {productsInShoppingCart.map((eachProduct, index) => (
              <div id="single-cart-container" key={index}>
                <img src={eachProduct.image} alt={"product image"} onClick={() => navigate(`/details/${eachProduct.id}`)} />
  <div id="details">
                  <span id="brand">{eachProduct.description}</span>
                  <span id="title">{eachProduct.title}</span>
                </div>
  <div id="price">
                  <span id="tooman-span">هزار تومان</span>
                  <span id="price-span">{eachProduct.price}</span>
                  <span
                    id="trash-icon"
                    onClick={() => dispatch(removeva(eachProduct.id))}>
                    <FaTrashAlt />       حذف
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
export default ShoppingCart;
