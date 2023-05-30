import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, increaseAction, incrementAction } from '../store/actions/counterActions';

const CounterPage = (props) => {
    // const counter = useSelector((s) => s.counter.value);
    const { value: counter } = useSelector((s) => s.counter);
    const dispatch = useDispatch();

    const handleIncrement = (data) => {
        dispatch(incrementAction(data));
    };

    const handleDecrement = (data) => {
        if (counter > 0) {
            dispatch(decrementAction(data));
        } else {
            return;
        }
    };

    const handleIncrease = (data) => {
        dispatch(increaseAction(data));
    };

    return (
        <div className='block'>
            <h1>Счетчик: {counter}</h1>
            <div className='btns'>
                <button onClick={() => handleIncrement(10)}>Добавить 10</button>
                <button onClick={() => handleDecrement(10)}>Убавить 10</button>
                <button onClick={() => handleIncrease(2)}>Умножить на 2</button>
            </div>
        </div>
    );
};

export default CounterPage;
