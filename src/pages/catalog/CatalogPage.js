import React from 'react';
import classes from "./Catalog.module.css";
import Description from "../../components/description/Description";
import Variants from "../../components/variants/Variants";
import BackToMain from "../../components/UI/backToMain/BackToMain";
import ScrollToTop from "../../components/UI/scrollToTop/ScrollToTop";

const CatalogPage = () => {
    return (
        <div className={classes.wrapper}>
            <ScrollToTop/>
            <BackToMain/>
            <Variants/>
            <Description/>
        </div>
    );
};

export default CatalogPage;