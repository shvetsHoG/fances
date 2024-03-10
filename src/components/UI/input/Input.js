import React from 'react';
import classes from "./Input.module.css";

const Input = ({placeholder, ...props}) => {
    return (
        <input {...props} className={classes.input} type="text"/>
    );
};

export default Input;