import React, {useState} from 'react';
import classes from "./ReviewSlider.module.css";
import first from "../../images/rv1.jpg"
import sec from "../../images/rv2.jpg"
import third from "../../images/rv3.jpg"
import fourth from "../../images/rv4.jpg"
import fifth from "../../images/rv5.jpg"
import sixth from "../../images/rv6.jpg"
import seventh from "../../images/rv7.jpg"
import eight from "../../images/rv8.jpg"
import nine from "../../images/rv9.jpg"
import StyledLink from "../UI/link/StyledLink";
import {useNavigate} from "react-router-dom";

const ReviewSlider = (props) => {

    const router = useNavigate()

    const images = [first, sec, third, fourth, fifth, sixth, seventh, eight, nine]

    const [position, setPosition] = useState(0)

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
        <div className={classes.sliderWrapper} {...props}>
            <div className={classes.slider}>
                <div className={classes.images}>
                    {images.map(url =>
                        <img key={url} style={{translate:`${-300*position}px`}} src={url} alt=""/>)}
                </div>
                <div className={classes.btns}>
                    <button onClick={() => showPrev()} className={classes.btnLeft}>
                        <svg className={classes.svgLeft} width="25px" height="25px" id="left-arrow-backward-sign" version="1.1" viewBox="0 0 15.699 8.707"><polygon points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854 "/></svg>
                    </button>
                    <button onClick={() => showNext()} className={classes.btnRight}>
                        <svg className={classes.svgRight} width="25px" height="25px" id="left-arrow-backward-sign" version="1.1" viewBox="0 0 15.699 8.707"><polygon points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854 "/></svg>
                    </button>
                </div>
                <div className={classes.link}>
                    <StyledLink to="/reviews">Все отзывы</StyledLink>
                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;