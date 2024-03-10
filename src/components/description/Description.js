import React from 'react';
import classes from "./Description.module.css";
import Form from "../form/Form";

const Description = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.contentWrapper}>
                    <div className={classes.formWrapper}>
                        <div className={classes.phone}>
                            <div className={classes.phoneWrapper}>
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
                                <span>Наш телефон</span>
                            </div>
                            <div className={classes.hoverer} style={{fontSize:"24px", cursor:"pointer"}}>
                                +7(900)986-29-57
                            </div>
                        </div>
                        <div className={classes.email}>
                            <div className={classes.emailWrapper}>
                                <svg className={classes.mailSvg} width="25px" height="25px" version="1.1" viewBox="0 0 64 64"><g id="Glyph_copy_2"><path d="M63.125,9.977c-0.902-1.321-2.419-2.194-4.131-2.194H5.006c-1.676,0-3.158,0.842-4.067,2.117l31.16,25.982L63.125,9.977z"/><path d="M0.006,14.328v36.889c0,2.75,2.25,5,5,5h53.988c2.75,0,5-2.25,5-5V14.461L32.099,41.09L0.006,14.328z"/></g></svg>
                                <span>Наша почта</span>
                            </div>
                            <div className={classes.hoverer} style={{fontSize:"18px", cursor:"pointer"}}>
                                enikolaevich5577@gmail.com
                            </div>
                        </div>
                        <Form/>
                    </div>
                    <div className={classes.textWrapper}>
                        <div className={classes.text}>
                            Установим забор в рассрочку <span style={{backgroundColor:"#7574ff", fontStyle:"italic"}}>за 2 дня</span>
                            , и дадим гарантию <br/> 3 года <span style={{backgroundColor:"#7574ff", fontStyle:"italic"}}>с нашим материалом</span> на обслуживание вашего забора. <br/>
                            <hr style={{marginTop:'5px'}}/>
                            Позвоните или напишите мне, чтобы узнать стоимость вашего забора.
                            С нами безопасно: <br/>
                            <div className={classes.check}>
                                <div className={classes.liWrapper}>
                                    <svg width="25px" height="25px" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                                    <li className={classes.li}>Фиксируем гарантию в договоре.</li>
                                </div>
                                <div className={classes.liWrapper}>
                                    <svg width="25px" height="25px" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                                    <li className={classes.li}>Мы сами работаем - у нас нет посредников и скрытых платежей</li>
                                </div>
                                <div className={classes.liWrapper}>
                                    <svg width="25px" height="25px" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                                    <li className={classes.li}>Фиксированная цена - стоимость работ не изменится</li>
                                </div>
                                <div className={classes.liWrapper}>
                                    <svg width="25px" height="25px" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                                    <li className={classes.li}>Предоставляем услугу официально: заключаем договор,<br/> выдаем чек и гарантию.</li>
                                </div>
                            </div>
                            <div style={{fontSize:"30px", fontWeight:"900", color:"#7574ff", textAlign:"center", marginTop:"15px"}}>Звоните ! Мы работаем с 8:00 до 20:00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;