import React from 'react';
import classes from "./ReviewPage.module.css";
import Preview from "../../components/UI/preview/Preview";
import Card from "../../components/UI/Card/Card";
import BackToMain from "../../components/UI/backToMain/BackToMain";
import ScrollToTop from "../../components/UI/scrollToTop/ScrollToTop";

const ReviewPage = () => {

    const photos = []

    for (let i = 1; i < 10; i++) {
        photos.push(`/images/rv${i}.jpg`)
    }

    return (
        <div className={classes.wrapper}>
            <BackToMain/>
            <ScrollToTop/>
            <div className={classes.content}>
                <Preview>Все отзывы</Preview>
                <div className={classes.box}>
                    {photos.map(kind => <Card width="275px" heigth="600px" url={kind}></Card>)}
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;