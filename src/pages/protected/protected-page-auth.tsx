import {Navigate} from 'react-router-dom';
import {REFRESH_TOKEN_ITEM_KEY} from "../../services/reducers/auth";
import {makeLinkUrl, PATH_PROFILE} from "../../components/app/app";

export function ProtectedPageAuth({children}) {
    return (
        localStorage.getItem(REFRESH_TOKEN_ITEM_KEY) ? (
            <Navigate to={makeLinkUrl(PATH_PROFILE)}/>
        ) : (
            children
        )
    );
}
