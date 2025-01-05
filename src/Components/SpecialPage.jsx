import React, { useEffect,useState } from "react";
import "../styles/ShoppingCart.css";
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import i18n from "./i18n";

export default function SpecialPage() {
    const { t } = useTranslation();
    let params = useParams()
    const { pathname } = useLocation();
    const [di, setDi] = useState('xx');
   
    useEffect(() => {
     
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        if (i18n.language==='en') {
            setDi('xx english')
        }
        else {
            setDi('xx ')
        }
   
    }, );
    let ff = [{
        id: 12,
        title: t("tcl"),
        image1: '/images/image-courses/tofel.webp',
        image: '/Newfolder/c2.webp', price: "1,800",
        percent: "90"
    }, {
        id: 1,
        title: t("laptop"),
        price: "800",
        image: '/Newfolder/ll.webp',
        percent: "90"
    },
    {        id: 10, sath: "35ترم", image: '/Newfolder/b2.webp',
        title: t("jplus"), price: "950",
        percent: "75"
    }, {

        id: 11, image: '/Newfolder/sh.webp', book: 'Interchange',
        title: t("headphone"), price: "  650",
        percent: "60"
    },
    {
        id: 7, online: "ندارد", image: '/Newfolder/gg.webp',
        title: t("handsfree"), price: "450",
        percent: "85"
    },

    {
        image1: '/Newfolder/spe.jpeg',
        id: 9, online: "ندارد", image: '/Newfolder/JJ.png', book: 'American English',
        title: t("headphone2"), price: "750",
    },
    {

        id: 2, image: '/Newfolder/mob (4).webp', book: 'How to teach',
        title: t("mouse"),
        price: '900',
        percent: "85"
    },
    {

        id: 4, image: '/Newfolder/mob (2).webp', book: 'Familly and Friends',
        title: t("tablet"), percent: "40", price: '1,400',
    },
    {
        sath: "25ترم",
        age: "  همه سنین", image1: '/Newfolder/spe.jpeg',
        id: 3, image: '/Newfolder/mob (1).webp', book: 'American English',
        price: "750", img: '/Newfolder/sp.jpg', title: t("cellphone"),
    },

    {
        id: 8, sath: "15ترم", online: "ندارد", image: '/Newfolder/monitor.webp', book: 'Familly and Friends',
        title: t("monitor"), price: "550", percent: "40"
    },
    {
        id: 5, image: '/Newfolder/d2.webp', book: 'American English',
        title: t("watch"), price: "950",
        percent: "75"
    },

    {
        id: 6, image: '/Newfolder/mob (5).webp',
        title: t("mouse"), price: "  650",
        percent: "60"
    },


    ]

    let xx = ff.find(course => course.id == params.courseID)
    function h() {
        let xx = ff.find(course => course.id == params.courseID)
        if (xx) {
            alert('داره')

        } else {
            alert('نداره')
        }
    }

    return (
        <>
            <h1 className="xx down" > {xx.title}</h1>
            <h1 className={di}>{t("price")} : {xx.price}  {t("thauzand")} {t("curruncy")}</h1>
            <img
                src={xx.image} className="personal-img">
            </img>


        </>
    )
}


