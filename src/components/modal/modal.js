import React from "react";
import style from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function Modal(props) {
    return (
        <section className={style.modal}>
            <div className={style.titleContainer}>
                <h2 className={'text text_type_main-large'}>{props.title}</h2>
                <CloseIcon type={'primary'}/>
            </div>
            {props.children}
        </section>
    );
}

export default Modal;
