import React from "react";

type Props = {
    time: string;
}

function OrderTime(props: Props) {
    return (
        <div className={'text text_type_main-small text_color_inactive'}>{props.time}</div>
    );
}

export default OrderTime;
