import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterActions';

const Counter = () => {
    const count = useSelector(state=>state.count);
    const dispatch = useDispatch();
    
    const handleIncrement = () =>{
        dispatch(incrementCounter());
    }

    const handleDecrement = () =>{
        dispatch(decrementCounter());
    }

    const handleReset = () =>{
        dispatch(resetCounter());
    }
    return (
        <div>
            <h1>React Redux example</h1>
            <h2>count: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;