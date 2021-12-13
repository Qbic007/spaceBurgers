import ReactDOM from "react-dom";
import React, {MouseEventHandler} from "react";
import style from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from "../modal-overlay/modalOverlay";

const modalRoot: HTMLElement | null = document.getElementById("modal");

type Props = {
    closeModal: () => void,
    children?: JSX.Element | JSX.Element[];
}

function Modal(props: Props) {
    const ESC_CODE = 27;

    const catchEvent: MouseEventHandler = (e) => {
        e.stopPropagation();
    };

    const escFunction = (e: KeyboardEvent) => {
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
