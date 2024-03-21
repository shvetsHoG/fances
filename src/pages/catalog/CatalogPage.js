import React from 'react';
import classes from "./Catalog.module.css";
import Description from "../../components/description/Description";
import Variants from "../../components/variants/Variants";
import BackToMain from "../../components/UI/backToMain/BackToMain";
import ScrollToTop from "../../components/UI/scrollToTop/ScrollToTop";
import {Helmet} from "react-helmet-async";

const CatalogPage = () => {
    return (
        <div className={classes.wrapper}>
            <Helmet>
                <title>Варианты работ</title>
                <meta name="description" content="Варианты работ на заказ, заборы в Липецке и ближайших регионах под ключ, недорого, быстро, качественно!"/>
                <link rel="canonical" href="/catalog"/>
            </Helmet>
            <ScrollToTop/>
            <BackToMain/>
            <Variants/>
            <Description/>
        </div>
    );
};

export default CatalogPage;