import React from 'react';
import classes from "./ContactsPage.module.css";
import Description from "../../components/description/Description";
import BackToMain from "../../components/UI/backToMain/BackToMain";
import ScrollToTop from "../../components/UI/scrollToTop/ScrollToTop";
import {Helmet} from "react-helmet-async";

const ContactsPage = () => {
    return (
        <div className={classes.wrapper}>
            <Helmet>
                <title>Наши контакты</title>
                <meta name="description" content="Наши контакты, заборы в Липецке и ближайших регионах под ключ, недорого, быстро, качественно!"/>
                <link rel="canonical" href="/contacts"/>
            </Helmet>
            <ScrollToTop/>
            <BackToMain/>
            <Description/>
        </div>
    );
};

export default ContactsPage;