import React from 'react';
import classes from "./ButtonAccept.module.css";

const ButtonAccept = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btn}>{children}</button>
    );
};

export default ButtonAccept;