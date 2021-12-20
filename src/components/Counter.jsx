import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1 )
    }


    return (
        <div>
            <h1>{count}</h1>
            <br/>
            <button onClick={increment}>+++++++</button>
            <button onClick={decrement}>----------</button>
        </div>
    );
};

export default Counter;


// вызов в App: <Counter></Counter>
