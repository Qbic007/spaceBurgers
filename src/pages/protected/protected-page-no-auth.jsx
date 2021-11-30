import {Navigate} from 'react-router-dom';
import {REFRESH_TOKEN_ITEM_KEY} from "../../services/reducers/auth";
import {makeLinkUrl, PATH_LOGIN} from "../../components/app/app";

export function ProtectedPageNoAuth({children}) {
    return (
        localStorage.getItem(REFRESH_TOKEN_ITEM_KEY) ? (
            children
        ) : (
            <Navigate to={makeLinkUrl(PATH_LOGIN)}/>
        )
    );
}
