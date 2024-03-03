import React from 'react';
import classes from "../../slider/Slider.module.css";

const Link = ({children}) => {
    return (
        <a className={classes.linkText}>{children}</a>
    );
};

export default Link;