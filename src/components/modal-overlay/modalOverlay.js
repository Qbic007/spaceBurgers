import React from "react";
import style from './modalOverlay.module.css';
import PropTypes from "prop-types";

function ModalOverlay(props) {
    return (
        <section className={style.modalOverlay}
                 onClick={props.closeCallback}>
            {props.children}
        </section>
    );
}

export default ModalOverlay;

ModalOverlay.propTypes = {
    closeCallback: PropTypes.func,
    children: PropTypes.object,
};
