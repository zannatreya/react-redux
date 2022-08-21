import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]= useState(0);
    const handleIncrement = () =>{
        setCount(count=>count+1);
    }
    const handleDecrement = () =>{
        setCount(count=>count-1);
    }
    const handleReset = () =>{
        setCount(0);
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