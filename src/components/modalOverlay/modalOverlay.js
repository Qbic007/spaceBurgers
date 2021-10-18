import React from "react";
import style from './modalOverlay.module.css';

function ModalOverlay() {
    const [isVisible, setIsVisible] = React.useState(true);

    const toggleOverlay = () => {
        setIsVisible(!isVisible);
    };

    const escFunction = (e) => {
        if (e.keyCode === 27) {
            setIsVisible(false);
        }
    }

    React.useEffect(
        () => {
            document.addEventListener("keydown", escFunction, false);
        }
    );

    return (
        <section className={isVisible ? style.modalOverlay : style.modalOverlayHidden}
                 onClick={toggleOverlay}>

        </section>
    );
}

export default ModalOverlay;
