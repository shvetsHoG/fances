import React from 'react';
import Background from "../UI/background/Background";
import Sider from "../UI/sider/Sider";
import classes from "./OurWorks.module.css";

const OurWorks = () => {
    return (
        <div className={classes.works}>
            <Sider></Sider>
            <Background first={"ЭТО"} second={"НАШИ РАБОТЫ"}></Background>
        </div>
    );
};

export default OurWorks;