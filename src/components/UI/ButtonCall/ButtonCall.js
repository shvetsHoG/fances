import React from 'react';
import classes from "./ButtonCall.module.css";

const ButtonCall = ({children}) => {
    return (
        <button className={classes.btn}>{children}</button>
    );
};

export default ButtonCall;