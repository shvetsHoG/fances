import React, {useState} from 'react';
import Form from "../form/Form";
import classes from "./Modal.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setModalState} from "../../store/slices/ModalSlice";
import ModalForm from "../UI/modalForm/ModalForm";
import {setAllFalse, setName, setPhone} from "../../store/slices/FormSlice";

const Modal = () => {

    const modalVisible = useSelector(state => state.modal.value);
    const dispatch = useDispatch();

    const classList = [classes.wrapper];

    if (modalVisible) {
        classList.push(classes.active);
    }

    const exit = () => {
        dispatch(setModalState(false))
        dispatch(setAllFalse())
        dispatch(setName(''))
        dispatch(setPhone(''))
    }

    const reset = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={classList.join(" ")} onClick={() => exit()}>
            <ModalForm onClick={e => reset(e)}/>
        </div>
    );
};

export default Modal;