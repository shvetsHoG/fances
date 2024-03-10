import React from 'react';
import classes from "./ContactsPage.module.css";
import Description from "../../components/description/Description";
import BackToMain from "../../components/UI/backToMain/BackToMain";
import ScrollToTop from "../../components/UI/scrollToTop/ScrollToTop";

const ContactsPage = () => {
    return (
        <div className={classes.wrapper}>
            <ScrollToTop/>
            <BackToMain/>
            <Description/>
        </div>
    );
};

export default ContactsPage;