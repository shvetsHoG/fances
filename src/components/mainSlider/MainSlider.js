import React from 'react';
import classes from "./MainSlider.module.css";
import main from "../../images/main.jpg"

const MainSlider = () => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.mainImg} src={main} alt=""/>
            <div className={classes.main}>
                <p>ИЗГОТОВЛЕНИЕ <br/> И МОНТАЖ ЗАБОРОВ</p>
                <p className={classes.downText} style={{marginTop: "35px",
                    fontSize: "26px",
                    fontWeight: "700"}}>В Липецке и ближайших регионах</p>
            </div>
        </div>
    );
};

export default MainSlider;