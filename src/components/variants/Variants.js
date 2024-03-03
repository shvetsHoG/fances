import React from 'react';
import classes from "./Variants.module.css";
import Card from "../UI/Card/Card";
import url1 from "../../images/var1.jpg"
import url2 from "../../images/var2.jpg"
import url3 from "../../images/20.jpg"
import url4 from "../../images/var4.jpg"
import url5 from "../../images/var6.jpg"
import url6 from "../../images/var5.jpg"
import Preview from "../UI/preview/Preview";

const Variants = () => {

    const kinds = [
        ["ЗАБОРЫ ИЗ ЕВРОШТАКЕТНИКА", url1],
        ["ЗАБОРЫ ИЗ ПРОФНАСТИЛА", url2],
        ["ОТКАТНЫЕ ВОРОТА", url3],
        ["ЗАБОРЫ ЖАЛЮЗИ", url4],
        ["ЗАБОРЫ ИЗ СЕТКИ РАБИЦА", url5],
        ["ЗАБОРЫ ИЗ 3D СЕТКИ", url6],
    ]

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <Preview>Виды заборов</Preview>
                <div className={classes.box}>
                    {kinds.map(kind => <Card url={kind[1]}>{kind[0]}</Card>)}
                </div>
            </div>
        </div>
    );
};

export default Variants;