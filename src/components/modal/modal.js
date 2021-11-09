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
            return props.closeModal();
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
            <ModalOverlay closeCallback={props.closeModal}>
                <section className={style.modal} onClick={catchEvent}>
                    <span onClick={props.closeModal} className={style.closeIcon}><CloseIcon type={'primary'}/></span>
                    {props.children}
                </section>
            </ModalOverlay>
        ),
        modalRoot
    );
}

export default Modal;

Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
};
