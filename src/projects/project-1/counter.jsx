import React, {useState} from 'react';
import { Button } from '../../components/button';
import { Notice } from '../../components/notice';

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
                <h3 className={
                    (count > 1 && count < 10) ? "grey" :
                        (count > 10 && count < 15) ? "green" :
                            (count > 15) ? "red" : null
                }>
                    {count}
                </h3>
            </div>
            <div>
                <Notice warning={(count >= 15) ? 'Счетчик не может превышать 15' : null} />
            </div>

        </>
    );
};
