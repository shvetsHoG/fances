import React, {useState} from 'react';
import classes from "./Form.module.css";
import ButtonAccept from "../UI/ButtonAccept/ButtonAccept";
import Input from "../UI/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setName, setPhone} from "../../store/slices/FormSlice";

const Form = (props) => {

    const phone = useSelector(state => state.form.phone.value);
    const name = useSelector(state => state.form.name.value);
    const dispatch = useDispatch();

    const getData = async (e) => {
        e.preventDefault()
        dispatch(setPhone(""))
        dispatch(setName(""))
        const formData = new FormData()
        formData.append("name", name)
        formData.append("phone", phone)
        const responce = await fetch("http://localhost/sendmail.php", {
            method: "POST",
            body: formData,
        });
    }

    return (
        <div className={classes.wrapper} {...props}>
            <form className={classes.content}>
                <div className={classes.input}>
                    <div className={classes.text}>ФИО</div>
                    <Input
                        value={name}
                        onChange={e => dispatch(setName(e.target.value))}
                        placeholder="Введите ваше имя"
                    ></Input>
                </div>
                <div className={classes.input}>
                    <div className={classes.text}>Телефон</div>
                    <Input
                        value={phone}
                        onChange={e => dispatch(setPhone(e.target.value))}
                        placeholder="Введите ваш телефон"
                    ></Input>
                </div>
                <ButtonAccept onClick={(e) => getData(e)}>Отправить данные</ButtonAccept>
            </form>
        </div>
    );
};

export default Form;