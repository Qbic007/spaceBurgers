import ReactDOM from "react-dom";
import React from "react";
import style from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from "../modal-overlay/modalOverlay";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {CLOSE_MODAL} from "../../services/actions/modal";
import {modalIngredient} from "../../services/reducers/modal";

const modalRoot = document.getElementById("modal");

function Modal(props) {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({type: CLOSE_MODAL, modalType: modalIngredient});
    }

    const ESC_CODE = 27;

    const catchEvent = (e) => {
        e.stopPropagation();
    };

    const escFunction = (e) => {
        if (e.keyCode === ESC_CODE) {
            return closeModal();
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
            <ModalOverlay closeCallback={closeModal}>
                <section className={style.modal} onClick={catchEvent}>
                    <div className={style.titleContainer}>
                        <h2 className={'text text_type_main-large'}>{props.title}</h2>
                        <span onClick={closeModal} className={'pointer'}><CloseIcon type={'primary'}/></span>
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
    title: PropTypes.string,
    children: PropTypes.object,
};
