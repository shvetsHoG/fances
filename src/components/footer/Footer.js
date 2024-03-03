import React from 'react';
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.downTag}>
                    <div>
                        Заборы "Под ключ"
                    </div>
                    <div className={classes.initials}>
                        Акулов Е.Н.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;