import React from "react";

type Props = {
    id: string;
}

function OrderId(props: Props) {
    return (
            <h2 className={'text text_type_digits-default'}>#{props.id}</h2>
    );
}

export default OrderId;
