import React from 'react';
import classes from "./Preview.module.css";

const Preview = ({children}) => {
    return (
        <div className={classes.preview}>
            <div className={classes.text}>
                {children}
            </div>
        </div>
    );
};

export default Preview;