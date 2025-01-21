import React from 'react';

export const SingleCounter = ({count, handler, id}) => {
    return(
    <>
    <div className={'counters-container'}>
        <button className={'btn'} count={count} onClick={() => {handler(id)}}>Increment</button>
        <button className={'btn'} count={count} onClick={() => {handler(id)}}>Decrement</button>
        <button className={'btn'} count={count} onClick={() => {handler(id)}}>Reset</button>
        <h3>{count}</h3>
    </div>
        </>
    );
}