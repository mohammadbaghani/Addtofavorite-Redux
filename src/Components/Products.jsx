import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { add } from "../Redux/features/navbar/navbarSlice";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { addtofav } from "../Redux/features/navbar/navbarSlice";
import { useState } from "react";
import "../styles/Products.css";
import HeroImg from "./c.jpg";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import "../styles/Hero.css";
function Products() {
    const { t } = useTranslation();
    const products = useSelector(state => state.productsReducer.value);
    const [dis, setDis] = useState('favorite');

    let ff = [  
    
  
    


    {
        sath: "25ترم",
        age: "  همه سنین", image1: '/Newfolder/spe.jpeg',
        id: 3, image: '/Newfolder/mob (1).webp', book: 'American English',
        price: "750", img: '/Newfolder/sp.jpg', title: t("cellphone"),
    },
    {
        id: 6, image: '/Newfolder/mob (5).webp',
        title: t("mousee"), price: "  650",
        percent: "60"
    },

    {

        id: 2, image: '/Newfolder/mob (4).webp', book: 'How to teach',
        title: t("mouse"),
        price: '900',
        percent: "85"
    },


    {
        id: 7, online: "ندارد", image: '/Newfolder/gg.webp',
        title: t("handsfree"), price: "450",
        percent: "85"
    },
    {
        id: 8, sath: "15ترم", online: "ندارد", image: '/Newfolder/monitor.webp', book: 'Familly and Friends',
        title: t("monitor"), price: "550", percent: "40"
    }, 

    {
        image1: '/Newfolder/spe.jpeg',
        id: 9, online: "ندارد", image: '/Newfolder/JJ.png', book: 'American English',
        title: t("headphone2"), price: "750",
    },
  

    {

        id: 10, sath: "35ترم", image: '/Newfolder/b2.webp',
        title: t("jplus"), price: "950",
        percent: "75"
    },
    {
        id: 12,
        title: t("tcl"),
        image1: '/images/image-courses/tofel.webp',
        image: '/Newfolder/c2.webp', price: "800",
        percent: "90"
    },  
 
    {

        id: 11, image: '/Newfolder/sh.webp', book: 'Interchange',
        title: t("headphone"), price: "  650",
        percent: "60"
    },

    {

        id: 4, image: '/Newfolder/mob (2).webp', book: 'Familly and Friends',
        title: t("tablet"), percent: "40", price: '1,400',
    },

    


 
    {
        id: 5, image: '/Newfolder/d2.webp', book: 'American English',
        title: t("watch"), price: "950",
        percent: "75"
    },

 
    {
        id: 1,
        title: t("laptop"),
        price: "800",
        image: '/Newfolder/ll.webp',
        percent: "90"
    },


    ]
    function godown() {
        window.scroll({ top: 850, behavior: 'smooth' });
    }
    const navigate = useNavigate();
    const [uu, setUu] = useState(true);
    const dispatch = useDispatch();
    function a(eachProduct) {
        dispatch(addtofav(eachProduct))

    }
    function change(event, eachProduct) {
        setDis('hidefav')
        setDist('favorite')

        dispatch(a(eachProduct))
    }
    return (
        <>
            <div id="hero-container">
                <img src={HeroImg} alt="hero image" />
            </div>
            <button className="btn" onClick={godown}>
                {t("see")}
            </button>
            <p className="btn dd">
                {t("center")}

            </p>
            <h1 className="hh">{t("p")}</h1>

            <div id="flex-container">

                {ff.map((eachProduct, index, id) => {
                    return (
                        <div id="flex-item" key={index}>

                            <div id="product-head">
                                <img
                                    src={eachProduct.image}>
                                </img>
                                <h2>{eachProduct.title}</h2>
                            </div>
                            <div id="product-info">
                                <h2>
                                    <span id="dolar-span">000</span>,{eachProduct.price}
                                </h2>

                                <MdFavoriteBorder id="favorite" onClick={() => dispatch(a(eachProduct))} />
                                <FiShoppingCart id="shopping-cart" onClick={() => dispatch(add(eachProduct))} />
                            </div>
                            <Link to={`/e/${eachProduct.id}`} id="link">
                                {t("details")}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    )
};

export default Products;
