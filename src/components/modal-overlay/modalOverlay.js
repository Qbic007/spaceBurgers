import React from "react";
import style from './modalOverlay.module.css';

function ModalOverlay(props) {
    const closeOverlay = () => {
        return props.closeCallback;
    };

    return (
        <section className={style.modalOverlay}
                 onClick={closeOverlay}>
            {props.children}
        </section>
    );
}

export default ModalOverlay;
