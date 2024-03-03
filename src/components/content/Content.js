import React from 'react';
import classes from "./Content.module.css";
import ContentSlider from "../UI/contentSlider/ContentSlider";
import Card from "../UI/Card/Card";
import Preview from "../UI/preview/Preview";

const Content = () => {
    return (
        <div className={classes.contentWrapper}>
            <div className={classes.content}>
                <ContentSlider />
                <Preview>ВИДЫ ЗАБОРОВ</Preview>
                <div className={classes.cards}>
                    <Card>ЗАБОРЫ ИЗ ПРОФНАСТИЛА</Card>
                    <Card>ЗАБОРЫ ИЗ ЕВРОШТАКЕТНИКА</Card>
                    <Card>ЗАБОРЫ ИЗ ЖАЛЮЗИ</Card>
                    <Card>ЗАБОРЫ ИЗ 3D СЕТКИ</Card>
                    <Card>ЗАБОРЫ ИЗ СЕТКИ РАБИЦА</Card>
                    <Card>ЗАБОРЫ ИЗ ПОЛИКАРБОНАТА</Card>
                    <Card>ОТКРЫТЫЕ ВОРОТА</Card>
                </div>
                <Preview>НАШИ ПРЕИМУЩЕСТВА</Preview>
                <Preview>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</Preview>
            </div>

        </div>
    );
};

export default Content;