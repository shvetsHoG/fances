import React from 'react';
import classes from "./MainSlider.module.css";
import img from "../../images/Скриншот-18-06-2023-230600-1024x697.jpg"

const MainSlider = () => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.mainImg} src={img} alt=""/>
            <div className={classes.main}>
                <p>ИЗГОТОВЛЕНИЕ <br/> И МОНТАЖ ЗАБОРОВ</p>
                <p style={{marginTop: "35px",
                    fontSize: "26px",
                    fontWeight: "700"}}>В Липецке и Липецкой области</p>
            </div>
        </div>
    );
};

export default MainSlider;