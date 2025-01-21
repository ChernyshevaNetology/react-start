import React, {useState} from 'react';
import { Button } from '../../components/button';
import { Notice } from '../../components/notice';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrement = () => setCount((prev) => prev + 1);
    const onDecrement = () => setCount((prev) => prev - 1);
    const onReset = () => setCount( 0);
    const limiter = () => {
        if (count > 1 && count < 5) return "grey";
        if (count >= 6 && count <= 15) return "green";
        if (count > 15) return "red";
    }

    return (
        <>
            <div>

                <Button title={"increment"} handler={onIncrement}/>
                <Button blocked={count <= 0} title={"decrement"} handler={onDecrement}/>
                <Button blocked={count === 0} title={"reset"} handler={onReset}/>
            </div>
            <div className="count">
                <h3 className={limiter(count)}>
                    {count}
                </h3>
            </div>
            <div>
                <Notice warning={(count >= 15) ? 'Счетчик не может превышать 15' : null} />
            </div>

        </>
    );
};
