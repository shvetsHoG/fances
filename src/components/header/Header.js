import React from 'react';
import classes from "./Header.module.css";
import ButtonCall from "../UI/ButtonCall/ButtonCall";
import ButtonAccept from "../UI/ButtonAccept/ButtonAccept";
import {useDispatch} from "react-redux";
import {setModalState} from "../../store/slices/ModalSlice";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();
    const router = useNavigate();

    const routeTo = (url) => {
        router(url)
        window.scrollTo(0,0)
    }

    return (
        <header className={classes.header}>
            <div className={classes.headerUpWrapper}>
                <div className={classes.headerUp}>
                    <div className={classes.contacts}>
                        <div className={classes.contactsItem} onClick={() => routeTo("/catalog")}>Каталог</div>
                        <div className={classes.contactsItem} onClick={() => routeTo("/photos")}>Фотогалерея</div>
                        <div className={classes.contactsItem} onClick={() => routeTo("/reviews")}>Отзывы о нас</div>
                        <div className={classes.contactsItem} onClick={() => routeTo("/contacts")}>Контакты</div>
                    </div>
                    <div className={classes.place}>
                        <div className={classes.contactsItem}>Липецк</div>
                    </div>
                </div>
            </div>
            <div className={classes.headerDownWrapper}>
                <div className={classes.headerDown}>
                    <div className={classes.downTag}>
                        <div>
                            Заборы "Под ключ"
                        </div>
                        <div className={classes.initials} onClick={() => routeTo("/")}>
                            Акулов Е.Н.
                        </div>
                    </div>
                    <div className={classes.downContacts}>
                        <div className={classes.downContactsBtns}>
                            <ButtonAccept onClick={() => dispatch(setModalState(true))}>Заказать звонок</ButtonAccept>
                        </div>
                        <div className={classes.phone}>
                            <svg className={classes.phoneSvg} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="20px" height="20px" viewBox="0 0 477.156 477.156">
                                <g>
                                    <path d="M475.009,380.316l-2.375-7.156c-5.625-16.719-24.062-34.156-41-38.75l-62.688-17.125c-17-4.625-41.25,1.594-53.688,14.031
		l-22.688,22.688c-82.453-22.28-147.109-86.938-169.359-169.375L145.9,161.94c12.438-12.438,18.656-36.656,14.031-53.656
		l-17.094-62.719c-4.625-16.969-22.094-35.406-38.781-40.969L96.9,2.19c-16.719-5.563-40.563,0.063-53,12.5L9.962,48.659
		C3.899,54.69,0.024,71.94,0.024,72.003c-1.187,107.75,41.063,211.562,117.281,287.781
		c76.031,76.031,179.454,118.219,286.891,117.313c0.562,0,18.312-3.813,24.375-9.845l33.938-33.938
		C474.946,420.878,480.571,397.035,475.009,380.316z"/>
                                </g>
                            </svg>
                            <div className={classes.downContactsPhone}>
                                +7 (900) 986-29-57
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;