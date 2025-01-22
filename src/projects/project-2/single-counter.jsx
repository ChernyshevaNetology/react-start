import React from 'react';

export const SingleCounter = ({count, onIncrement, onDecrement, onReset, id}) => {
    return(
    <>
    <div className={'counters-container'}>
        <button className={'btn'} onClick={() => {onIncrement(id)}}>Increment</button>
        <button className={'btn'} onClick={() => {onDecrement(id)}}>Decrement</button>
        <button className={'btn'} onClick={() => {onReset(id)}}>Reset</button>
        <h3>{count}</h3>
    </div>
        </>
    );
}