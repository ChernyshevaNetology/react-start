import React, {useState} from 'react';
import { Button } from '../../components/button';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrement = () => setCount((prev) => prev + 1);
    const onDecrement = () => setCount((prev) => prev - 1);
    const onReset = () => setCount( 0);

    return (
        <>
            <div>

                <Button title={"increment"} onClick={onIncrement}/>
                <Button disabled={count <= 0} title={"decrement"} onClick={onDecrement}/>
                <Button disabled={count === 0} title={"reset"} onClick={onReset}/>
            </div>
            <div className="count">
                <h3>{count}</h3>
            </div>

        </>
    );
};
