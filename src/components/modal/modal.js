import ReactDOM from "react-dom";
import React from "react";
import style from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from "../modal-overlay/modalOverlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal");

function Modal(props) {
    const ESC_CODE = 27;

    const catchEvent = (e) => {
        e.stopPropagation();
    };

    const escFunction = (e) => {
        if (e.keyCode === ESC_CODE) {
            return props.closeCallback();
        }
    }

    React.useEffect(
        () => {
            document.addEventListener("keydown", escFunction, false);

            return () => document.removeEventListener("keydown", escFunction);
        }
    );

    return ReactDOM.createPortal(
        (
            <ModalOverlay closeCallback={props.closeCallback}>
                <section className={style.modal} onClick={catchEvent}>
                    <div className={style.titleContainer}>
                        <h2 className={'text text_type_main-large'}>{props.title}</h2>
                        <span onClick={props.closeCallback} className={'pointer'}><CloseIcon type={'primary'}/></span>
                    </div>
                    {props.children}
                </section>
            </ModalOverlay>
        ),
        modalRoot
    );
}

export default Modal;

Modal.propTypes = {
    closeCallback: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.object,
};
