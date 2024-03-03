import React from 'react';
import classes from "./Background.module.css";

const Background = ({first, second}) => {
    return (
        <div className={classes.contentWrapper}>
            <div className={classes.content}>
                <div className={classes.text}>
                    <span >{first} </span>
                    <span style={{color:"#7574ff"}}>{second}</span>
                </div>
            </div>
        </div>
    );
};

export default Background;