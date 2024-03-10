import React from 'react';
import classes from "../../slider/Slider.module.css";

const Link = ({children, ...props}) => {
    return (
        <a {...props} className={classes.linkText}>{children}</a>
    );
};

export default Link;