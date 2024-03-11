import React from 'react';
import classes from "./Side.module.css";
import SideBar from "../UI/sideBar/SideBar";

const Side = () => {
    return (
        <div className={classes.sideBarWrapper}>
            <div className={classes.sideBar}>
                <div className={classes.sidebarBar}>
                    <SideBar />
                </div>
                <div className={classes.sidebarText}>
                    <div className={classes.sidebarTextHeader}>
                        <span>БЕСПЛАТНЫЙ</span>
                        <span>ВЫЕЗД</span>
                        <span>ЗАМЕРЩИКА</span>
                    </div>
                    <div className={classes.sidebarTextContent}>
                        Измерим участок. Покажем образцы продукции. Поможем с выбором ограждения. Заключим договор на месте. Абсолютно бесплатно.
                    </div>
                </div>
                <div className={classes.sidebarWorks}>
                    <div className={classes.sidebarWorksUp}>
                        <div className="">НАШИ РАБОТЫ</div>
                    </div>
                    <div className={classes.sidebarWorksDown}>
                        <img src="../../../public/images/main.jpg" className={classes.sidebarWorksDownImg} alt="" />
                        <a href="">Все фотографии</a>
                    </div>
                </div>
                <div className={classes.sidebarReviews}>
                    <div className={classes.sidebarReviewsUp}>
                        <div className="">ОТЗЫВЫ КЛИЕНТОВ</div>
                    </div>
                    <div className={classes.sidebarReviewsDown}>
                        <div className={classes.review}>
                            <img src="../../../public/images/main.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Side;