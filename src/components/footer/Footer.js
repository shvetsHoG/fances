import React from 'react';
import classes from "./Footer.module.css";
import {useNavigate} from "react-router-dom";

const Footer = () => {

    const router = useNavigate()

    const routeTo = (url) => {
        router(url)
        window.scroll(0,0)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.downTag}>
                    <div>
                        Заборы "Под ключ"
                    </div>
                    <div className={classes.initials} onClick={() => routeTo("/")}>
                        Акулов Е.Н.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;