import React, {useState} from 'react';
import classes from "./Form.module.css";
import ButtonAccept from "../UI/ButtonAccept/ButtonAccept";
import Input from "../UI/input/Input";

const Form = () => {

    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const getData = (e) => {
        e.preventDefault()
        setPhone("")
        setName("")
        console.log(phone, name)
    }

    return (
        <div className={classes.wrapper}>
            <form className={classes.content}>
                <div className={classes.input}>
                    <div className={classes.text}>ФИО</div>
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Введите ваше имя"
                    ></Input>
                </div>
                <div className={classes.input}>
                    <div className={classes.text}>Телефон</div>
                    <Input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Введите ваш телефон"
                    ></Input>
                </div>
                <ButtonAccept onClick={(e) => getData(e)}>Отправить данные</ButtonAccept>
            </form>
        </div>
    );
};

export default Form;