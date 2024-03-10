import React from 'react';
import classes from "./PhotoPage.module.css";
import Card from "../../components/UI/Card/Card";
import Preview from "../../components/UI/preview/Preview";
import Header from "../../components/header/Header";
import BackToMain from "../../components/UI/backToMain/BackToMain";
import ScrollToTop from "../../components/UI/scrollToTop/ScrollToTop";

const PhotoPage = () => {

    const photos = []

    for (let i = 1; i < 41; i++) {
        photos.push(`/images/${i}.jpg`)
    }

    return (
        <div className={classes.wrapper}>
            <ScrollToTop/>
            <BackToMain/>
            <div className={classes.content}>
                <Preview>Все фотографии</Preview>
                <div className={classes.box}>
                    {photos.map(kind => <Card url={kind}></Card>)}
                </div>
            </div>
        </div>
    );
};

export default PhotoPage;