import React from 'react';
import MainSlider from "../components/mainSlider/MainSlider";
import OurWorks from "../components/ourWorks/OurWorks";
import Slider from "../components/slider/Slider";
import Variants from "../components/variants/Variants";
import SecondSlider from "../components/secondSlider/SecondSlider";
import Description from "../components/description/Description";
import ScrollToTop from "../components/UI/scrollToTop/ScrollToTop";

const MainPage = () => {
    return (
        <>
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