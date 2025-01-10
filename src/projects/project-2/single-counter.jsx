import React from 'react';

export const SingleCounter = ({count, onIncrement}) => {
    return(
    <>
    <div className={'counters-container'}>
        <button className={'btn'} onClick={() => onIncrement(counter.id)}>Increment</button>
        <button className={'btn'} onClick={onIncrement}>Decrement</button>
        <button className={'btn'} onClick={onIncrement}>Reset</button>
        <h3>{count}</h3>
    </div>
        </>
    );
}