import React from "react";
import AppHeader from "../app-header/app-header";
import style from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ModalOverlay from "../modal-overlay/modalOverlay";
import Modal from "../modal/modal";
import image from "../../images/souce-red.png";
import OrderDetails from "../order-details/order-details";

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
            <ModalOverlay>
                <OrderDetails title={'Детали ингредиента'}
                       image={image}
                       name={'Биокотлета из марсианской Магнолии'}
                       calories={'244,4'}
                       proteins={'12,2'}
                       fat={'17,2'}
                       carbohydrates={'10,2'}/>
            </ModalOverlay>
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
