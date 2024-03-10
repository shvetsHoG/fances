import React, {useEffect, useState} from 'react';
import classes from "./Slider.module.css";
import first from "../../images/2.jpg"
import sec from "../../images/5.jpg"
import third from "../../images/6.jpg"
import fourth from "../../images/7.jpg"
import fifth from "../../images/8.jpg"
import sixth from "../../images/13.jpg"
import seventh from "../../images/15.jpg"
import eigth from "../../images/20.jpg"
import Link from "../UI/link/Link";
import {useNavigate} from "react-router-dom";

const Slider = () => {

    const images = [first, sec, third, fourth, fifth, sixth, seventh, eigth]

    const [position, setPosition] = useState(0)
    const router = useNavigate();

    const showNext = () => {
        if (position === images.length - 1) {
            setPosition(0)
        } else {
            setPosition(position+1)
        }
    }

    const showPrev = () => {
        if (position === 0) {
            setPosition(images.length - 1)
        } else {
            setPosition(position-1)
        }
    }

    const routeTo = (url) => {
        router(url)
        window.scrollTo(0,0)
    }

    return (
        <div className={classes.sliderWrapper}>
            <div className={classes.slider}>
                <div className={classes.images}>
                    {images.map(url =>
                        <img style={{translate:`${-1000*position}px`}} src={url} alt=""/>)}
                </div>
                <div className={classes.btns}>
                    <button onClick={() => showPrev()} className={classes.btnLeft}>
                        <svg className={classes.svgLeft} width="30px" height="30px" id="left-arrow-backward-sign" version="1.1" viewBox="0 0 15.699 8.707"><polygon points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854 "/></svg>
                    </button>
                    <button onClick={() => showNext()} className={classes.btnRight}>
                        <svg className={classes.svgRight} width="30px" height="30px" id="left-arrow-backward-sign" version="1.1" viewBox="0 0 15.699 8.707"><polygon points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854 "/></svg>
                    </button>
                </div>
                <div className={classes.link}>
                    <Link onClick={() => routeTo("/photos")}>Все работы</Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;