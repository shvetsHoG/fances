import React from 'react';
import classes from "./Main.module.css";
import Side from "../side/Side";
import Content from "../content/Content";

const Main = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.main}>
                <Side />
                <Content />
            </div>
        </div>
    );
};

export default Main;