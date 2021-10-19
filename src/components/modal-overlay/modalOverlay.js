import React from "react";
import style from './modalOverlay.module.css';

function ModalOverlay(props) {

    const [isVisible, setIsVisible] = React.useState(true);

    const toggleOverlay = () => {
        setIsVisible(!isVisible);
    };

    return (
        <section className={isVisible ? style.modalOverlay : style.modalOverlayHidden}
                 onClick={toggleOverlay}>
            {props.children}
        </section>
    );
}

export default ModalOverlay;
