import React from 'react';
import classes from "./BackToMain.module.css";
import {useNavigate} from "react-router-dom";

const BackToMain = () => {

    const router = useNavigate();

    const routeTo = (url) => {
        router(url)
        window.scrollTo(0,0)
    }

    return (
        <div className={classes.backToMain} onClick={() => routeTo("/")}>
            <svg className={classes.backToMainSvg} width="22px" height="22px" id="left-arrow-backward-sign" version="1.1" viewBox="0 0 15.699 8.707" ><polygon points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854 "/></svg>
            <div className={classes.backToMainText}>
                Вернуться на главную
            </div>
        </div>
    );
};

export default BackToMain;