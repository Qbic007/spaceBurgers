import ReactDOM from "react-dom";
import React from "react";
import style from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from "../modal-overlay/modalOverlay";

const modalRoot = document.getElementById("modal");

function Modal(props) {
    return ReactDOM.createPortal(
        (
            <ModalOverlay>
                <section className={style.modal}>
                    <div className={style.titleContainer}>
                        <h2 className={'text text_type_main-large'}>{props.title}</h2>
                        <CloseIcon type={'primary'}/>
                    </div>
                    {props.children}
                </section>
            </ModalOverlay>
        ),
        modalRoot
    );
}

export default Modal;
