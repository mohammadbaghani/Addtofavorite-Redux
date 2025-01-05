import React from "react";
import { BsHandbag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TbBrandHexo } from 'react-icons/tb';
import { MdFavoriteBorder } from "react-icons/md";
import "../styles/Navbar.css";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
function Navbar() {

    const products = useSelector(state => state.navbarReducer.value);

    const { t } = useTranslation();
    const favs = useSelector(state => state.navbarReducer.va);
    function numberOfProducts() {
        let number = 0;
        for (let i = 0; i < products.length; i++) {
            number += products[i].quantity;
        }
        return number;
    }
    function favo() {
        let f = 0;
        for (let i = 0; i < favs.length; i++) {
            f += favs[i].quantity;
        }
        return f;
    }
    const navigate = useNavigate();
    function firstpage() {
        navigate("/");
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    function handleClickHandBag() {
        navigate("/shoppingCart");
        window.scroll({ top: 0, behavior: 'smooth' });
    }
    function gofav() {
        navigate("/favorites");
        window.scroll({ top: 0, behavior: 'smooth' });
    }
    return (
        <div id="navbar-container">
            <div className="switch">
                <input
                    id="language-toggle"
                    className="check-toggle check-toggle-round-flat"
                    type="checkbox"
                    onChange={(event) => {
                        if (event.target.checked) {
                            i18n.changeLanguage("en");
                        } else {
                            i18n.changeLanguage("fa");
                        }
                    }}
                />
                <label htmlFor="language-toggle"></label>
                <span className="on">فارسی</span>
                <span className="off">ENG</span>
            </div>
            <div id="icon" onClick={firstpage}>{t("y")}</div>
            <img src="carty.png" id="hand-bag" onClick={handleClickHandBag} >
            </img>

            <MdFavoriteBorder id="gofav" onClick={gofav} />
            <div id="number-of-favs">{favo()}</div>
            <div id="number-of-products">{numberOfProducts()}</div>
        </div>
    )
};

export default Navbar;
