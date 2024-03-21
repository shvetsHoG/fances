import React from 'react';
import classes from "../../slider/Slider.module.css";
import {Link} from "react-router-dom";

const StyledLink = ({children, ...props}) => {
    return (
        <Link {...props} className={classes.linkText}>{children}</Link>
    );
};

export default StyledLink;