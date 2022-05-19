import React from "react";

type Props = {
    children: JSX.Element | JSX.Element[] | String;
}

function SectionTitle(props: Props) {
    return (
        <h2 className={'text text_type_main-medium'}>
            {props.children}
        </h2>
    );
}

export default SectionTitle;
