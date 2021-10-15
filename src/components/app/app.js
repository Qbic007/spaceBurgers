import AppHeader from "../app-header/app-header";
import style from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
    return (
        <>
            <AppHeader/>
            <main>
                <div className={style.wrapper}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </div>
            </main>
        </>
    );
}

export default App;
