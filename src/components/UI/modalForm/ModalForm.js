import React from 'react';
import classes from "./ModalForm.module.css";
import ButtonAccept from "../ButtonAccept/ButtonAccept";
import Input from "../input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setAllFalse, setName, setNameFocus, setPhone, setPhoneFocus} from "../../../store/slices/FormSlice";
import {setModalState} from "../../../store/slices/ModalSlice";

const ModalForm = (props) => {

    let nameClassList  = [classes.text]
    let phoneClassList = [classes.text]

    const phone = useSelector(state => state.form.phone.value);
    const name = useSelector(state => state.form.name.value);

    const phoneFocus = useSelector(state => state.form.phone.focus);
    const nameFocus = useSelector(state => state.form.name.focus);

    const dispatch = useDispatch();

    const getData = async (e) => {

        e.preventDefault()
        const formData = new FormData()
        formData.append("name", name)
        formData.append("phone", phone)
        const responce = await fetch("https://zaborylipetsk.ru/public/api/sendmail.php" /*"https://zaborylipetsk.ru/public/api/sendmail.php"*/, {
            method: "POST",
            body: formData,
        });
        exit()
    }


    const changeFocus = (value) => {
        if (value === "name") {
            dispatch(setNameFocus(true));
            if (phone.length === 0) {
                dispatch(setPhoneFocus(false));
            }
        } else if (value === "phone") {
            dispatch(setPhoneFocus(true));
            if (name.length === 0) {
                dispatch(setNameFocus(false));
            }
        } else {
            if (name.length === 0) {
                dispatch(setNameFocus(false));
            }
            if (phone.length === 0) {
                dispatch(setPhoneFocus(false));
            }
        }
    }

    if (phoneFocus === true) {
        phoneClassList.push(classes.active)
    }

    if (nameFocus === true) {
        nameClassList.push(classes.active)
    }

    if (nameFocus === false) {
        nameClassList = [classes.text]
    }

    if (phoneFocus === false) {
        phoneClassList = [classes.text]
    }
    const exit = () => {
        dispatch(setModalState(false))
        dispatch(setAllFalse())
        dispatch(setName(''))
        dispatch(setPhone(''))
        changeFocus()
    }

    return (
        <div className={classes.wrapper} {...props}>
            <div className={classes.svgBtn} onClick={() => exit()}>
                <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"/></svg>
            </div>
            <form className={classes.content} onSubmit={(e) => getData(e)}>
                <label className={classes.mainText} style={{textAlign:"center", marginBottom:"15px"}}>
                    Введите ваши данные и мы скоро с вами свяжемся
                </label>
                <div className={classes.inputWrapper} onClick={() => changeFocus("name")}>
                    <label className={nameClassList.join(" ")}>ФИО</label>
                    <Input
                        name="name"
                        value={name}
                        onChange={e => dispatch(setName(e.target.value))}
                        placeholder="Введите ваше имя"
                    ></Input>
                </div>
                <div className={classes.inputWrapper} onClick={() => changeFocus("phone")}>
                    <label className={phoneClassList.join(" ")}>Телефон</label>
                    <Input
                        name="phone"
                        value={phone}
                        onChange={e => dispatch(setPhone(e.target.value))}
                        placeholder="Введите ваш телефон"
                    ></Input>
                </div>
                <ButtonAccept type="submit" onClick={(e) => getData(e)}>Отправить данные</ButtonAccept>
            </form>
        </div>
    );
};

export default ModalForm;