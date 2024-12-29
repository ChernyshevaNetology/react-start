import React, { useState } from 'react';

const data = [
    {id: 1, value: 0},
    {id: 2, value: 3},
    {id: 3, value: 4},
    {id: 4, value: 0},
    {id: 5, value: 0},
]

// single-counter.jsx
// SingleCounter


export const MultipleCounters = () => {
    const [counters, setCounters] = useState(data);

    const onIncrement = (id) => {
        console.log(counters)
        console.log('id', id);
        const updatedCounters = counters.map((counter) => {
            if (counter.id === id) {
                return {
                    ...counter,
                    value: ++counter.value,
                }
            }
            return counter;
        })
        setCounters(updatedCounters);
    }

    const onDecrement = () => {}

    const onReset = () => {}

    return (
        <div>
            {
                counters.map(counter => <div className={'counters-container'} key={counter.id}>
                    <button className={'btn'} onClick={() => onIncrement(counter.id)}>Increment</button>
                    <button className={'btn'}>Decrement</button>
                    <button className={'btn btn_red'}>Reset</button>
                    <div className="val-cont">
                        <span className={'counter-value'}>{counter.value}</span>
                    </div>
                </div>)
            }
        </div>
    );
};