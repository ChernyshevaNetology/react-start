import React, { useState } from 'react';
import { SingleCounter } from './single-counter';

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
        //console.log(counters)
        //console.log('id', id);
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
    const onDecrement = (id) => {
        const updatedCounters = counters.map((counter) => {
            if (counter.id === id) {
                return {
                    ...counter,
                    value: --counter.value,
                }
            }
            return counter;
        })
        setCounters(updatedCounters);
    }

    const onReset = (id) => {
        const updatedCounters = counters.map((counter) => {
            if (counter.id === id) {
                return {
                    ...counter,
                    value: 0,
                }
            }
            return counter;
        })
        setCounters(updatedCounters);
    }

    // onMasterReset => все счетчики сбрасываются на 0

    return (
        <div>
            {
                counters.map((counter) => <SingleCounter id={counter.id} onIncrement={onIncrement} onDecrement={onDecrement} onReset={onReset} count={counter.value}/>)
            }
        </div>
    );
};