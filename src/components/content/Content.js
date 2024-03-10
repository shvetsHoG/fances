import React from 'react';
import classes from "./Content.module.css";
import ContentSlider from "../UI/contentSlider/ContentSlider";
import Card from "../UI/Card/Card";
import Preview from "../UI/preview/Preview";

const Content = () => {

    const variants = [
        "ЗАБОРЫ ИЗ ПРОФНАСТИЛА",
        "ЗАБОРЫ ИЗ ЕВРОШТАКЕТНИКА",
        "ЗАБОРЫ ИЗ ЖАЛЮЗИ",
        "ЗАБОРЫ ИЗ 3D СЕТКИ",
        "ЗАБОРЫ ИЗ СЕТКИ РАБИЦА",
        "ЗАБОРЫ ИЗ ПОЛИКАРБОНАТА",
        "ОТКРЫТЫЕ ВОРОТА",
    ];

    return (
        <div className={classes.contentWrapper}>
            <div className={classes.content}>
                <ContentSlider />
                <Preview>ВИДЫ ЗАБОРОВ</Preview>
                <div className={classes.cards}>
                    {variants.map(variant => <Card>{variant}</Card>)}
                </div>
                <Preview>НАШИ ПРЕИМУЩЕСТВА</Preview>
                <Preview>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</Preview>
            </div>

        </div>
    );
};

export default Content;