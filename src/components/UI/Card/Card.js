import React from 'react';
import classes from "./Card.module.css";

const Card = ({children, url, width, heigth}) => {
    return (
        <div className={classes.card}>
            <img style={{width:width, height:heigth}} className={classes.img} src={url} alt=""/>
            <div className={classes.name}>{children}</div>
        </div>
    );
};

export default Card;