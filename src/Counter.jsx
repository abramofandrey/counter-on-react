import { useState } from "react";

import './style.css';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const onClickPlus = () => {
        setCounter(counter + 1)
    }
    const onClickMinus = () => {
        setCounter(counter - 1)
    }
    const onClickReset = () => {
        setCounter(0)
    }

    return (
        <div>
            <div className="container">
                <div className="counter-wrapper">
                    <div className="counter-content">
                    <h2 className="title-count">Счетчик:</h2>
                    <h1 className="title-value">{counter}</h1>
                    <div className="buttons-group">
                        <button className="button" onClick={onClickMinus}>Минус -</button>
                        <button className="button" onClick={onClickPlus}>+ Плюс</button>
                        <button className="button" onClick={onClickReset}>Обнулить</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;