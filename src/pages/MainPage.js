import React from 'react';
import MainSlider from "../components/mainSlider/MainSlider";
import OurWorks from "../components/ourWorks/OurWorks";
import Slider from "../components/slider/Slider";
import Variants from "../components/variants/Variants";
import SecondSlider from "../components/secondSlider/SecondSlider";
import Description from "../components/description/Description";
import ScrollToTop from "../components/UI/scrollToTop/ScrollToTop";
import {Helmet} from "react-helmet-async";

const MainPage = () => {
    return (
        <>
            <Helmet>
                <title>Заборы в Липецке</title>
                <meta name="description" content="Заборы в Липецке и ближайших регионах под ключ, недорого, быстро, качественно!"/>
                <link rel="canonical" href="/main"/>
            </Helmet>
            <ScrollToTop/>
            <MainSlider/>
            <OurWorks/>
            <Slider/>
            <Variants/>
            <SecondSlider/>
            <Description/>
        </>
    );
};

export default MainPage;