import ReactDOM from "react-dom";
import React from "react";
import style from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from "../modal-overlay/modalOverlay";

const modalRoot = document.getElementById("modal");

function Modal(props) {
    const ESC_CODE = 27;

    const [isVisible, setIsVisible] = React.useState(true);

    const catchEvent = (e) => {
        e.stopPropagation();
    };

    const toggleOverlay = () => {
        setIsVisible(!isVisible);
    };

    const escFunction = (e) => {
        if (e.keyCode === ESC_CODE) {
            setIsVisible(false);
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
            isVisible && <ModalOverlay>
                <section className={style.modal} onClick={catchEvent}>
                    <div className={style.titleContainer}>
                        <h2 className={'text text_type_main-large'}>{props.title}</h2>
                        <span onClick={toggleOverlay} className={'pointer'}><CloseIcon type={'primary'}/></span>
                    </div>
                    {props.children}
                </section>
            </ModalOverlay>
        ),
        modalRoot
    );
}

export default Modal;
