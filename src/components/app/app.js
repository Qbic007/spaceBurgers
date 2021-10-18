import React from "react";
import AppHeader from "../app-header/app-header";
import style from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ModalOverlay from "../modalOverlay/modalOverlay";

function App() {
    const [data, setData] = React.useState([]);

    React.useEffect(
        () => {
            const getData = (url) => {
                setData(data);

                fetch(url)
                    .then((res) => res.json())
                    .then((data) =>
                        setData(data)
                    )
                    .catch((e) => {
                        // TODO обработать ошибки;
                    });
            }
            getData('https://norma.nomoreparties.space/api/ingredients');
        }, []
    );

    return (
        <>
            <AppHeader/>
            <ModalOverlay/>
            <main>
                <div className={style.wrapper}>
                    <BurgerIngredients data={data}/>
                    <BurgerConstructor data={data}/>
                </div>
            </main>
        </>
    );
}

export default App;
