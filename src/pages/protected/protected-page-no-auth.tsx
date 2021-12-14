import {Navigate} from 'react-router-dom';
import {REFRESH_TOKEN_ITEM_KEY} from "../../services/reducers/auth";
import {makeLinkUrl, PATH_LOGIN} from "../../components/app/app";
import React from "react";

type Props = {
    children: JSX.Element | null;
};

export function ProtectedPageNoAuth({children}: Props) {
    return (
        localStorage.getItem(REFRESH_TOKEN_ITEM_KEY) ? (
            children
        ) : (
            <Navigate to={makeLinkUrl(PATH_LOGIN)}/>
        )
    );
}
