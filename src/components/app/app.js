import React from "react";
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFound404} from '../../pages/not-found-404';
import Constructor from "../../pages/constructor/constructor";

export const draggableTypeAddIngredient = 'addIngredient';
export const draggableTypeMoveIngredient = 'moveIngredient';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Constructor/>}>
                    {/*<Route index element={<Home />} />*/}
                    {/*<Route path="teams" element={<Teams />}>*/}
                    {/*    <Route path=":teamId" element={<Team />} />*/}
                    {/*    <Route path="new" element={<NewTeamForm />} />*/}
                    {/*    <Route index element={<LeagueStandings />} />*/}
                    {/*</Route>*/}
                </Route>
                <Route path="/" element={<NotFound404/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;