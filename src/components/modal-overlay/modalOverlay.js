import React from "react";
import style from './modalOverlay.module.css';
import PropTypes from "prop-types";

function ModalOverlay(props) {
    return (
        <section className={style.modalOverlay}
                 onClickCapture={props.closeCallback}>
            {props.children}
        </section>
    );
}

export default ModalOverlay;

ModalOverlay.propTypes = {
    closeCallback: PropTypes.func,
};
