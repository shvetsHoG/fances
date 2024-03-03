import React from 'react';
import classes from "./Card.module.css";

const Card = ({children, url}) => {
    return (
        <div className={classes.card}>
            <img className={classes.img} src={url} alt=""/>
            <div className={classes.name}>{children}</div>
        </div>
    );
};

export default Card;