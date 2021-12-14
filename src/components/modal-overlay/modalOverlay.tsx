import React from "react";
import style from './modalOverlay.module.css';

type Props = {
    closeCallback: () => void;
    children?: JSX.Element | JSX.Element[]
}

function ModalOverlay(props: Props) {
    return (
        <section className={style.modalOverlay}
                 onClick={props.closeCallback}>
            {props.children}
        </section>
    );
}

export default ModalOverlay;
