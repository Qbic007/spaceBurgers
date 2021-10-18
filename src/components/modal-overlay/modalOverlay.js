import React from "react";
import style from './modalOverlay.module.css';

function ModalOverlay(props) {
    const ESC_CODE = 27;

    const [isVisible, setIsVisible] = React.useState(true);

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

    return (
        <section className={isVisible ? style.modalOverlay : style.modalOverlayHidden}
                 onClick={toggleOverlay}>
            {props.children}
        </section>
    );
}

export default ModalOverlay;
