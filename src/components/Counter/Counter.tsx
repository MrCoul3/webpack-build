import React, {useState} from 'react';
import style from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0);
    const clickHandler = () => {
        setCount(count  + 1)
    }
    return (
        <div className={style.button}>
            <h1>{count}</h1>
            <button onClick={clickHandler}>Increase</button>
        </div>
    );
};

export default Counter;