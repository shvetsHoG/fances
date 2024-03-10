import React from 'react';
import Preview from "../UI/preview/Preview";
import ReviewSlider from "../reviewSlider/ReviewSlider";
import classes from "./SecondSlider.module.css";
import {useNavigate} from "react-router-dom";

const SecondSlider = () => {
    return (
        <div className={classes.wrapper}>
            <Preview>СТРОИТЕЛЬСТВО ЗАБОРОВ ПОД КЛЮЧ</Preview>
            <ReviewSlider style={{marginTop:"25px"}}></ReviewSlider>
        </div>
    );
};

export default SecondSlider;