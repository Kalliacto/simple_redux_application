import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
// import { decrementAction, increaseAction, incrementAction } from '../store/actions/counterActions';
import { decrement, increment } from '../storageToolkit/slices/counterSlice';

const CounterPage = (props) => {
    // const counter = useSelector((s) => s.counter.value);
    const { value: counter } = useSelector((s) => s.counter);
    const dispatch = useDispatch();

    // const handleIncrement = (data) => {
    //     dispatch(incrementAction(data));
    // };

    // const handleDecrement = (data) => {
    //     if (counter > 0) {
    //         dispatch(decrementAction(data));
    //     } else {
    //         return;
    //     }
    // };

    // const handleIncrease = (data) => {
    //     dispatch(increaseAction(data));
    // };

    return (
        <div className='block'>
            <h1>Счетчик: {counter}</h1>
            <div className='btns'>
                {/* <button onClick={() => handleIncrement(1)}>Добавить 1</button> */}
                <button onClick={() => dispatch(increment(1))}>Добавить 1 через Toolkit</button>
                <button onClick={() => dispatch(decrement(1))}>Убавить 1 через Toolkit</button>
                {/* <button onClick={() => handleDecrement(1)}>Убавить 1</button>
                <button onClick={() => handleIncrease(2)}>Умножить на 2</button> */}
            </div>
        </div>
    );
};

export default CounterPage;
