import React, {useState} from "react";
import {Button} from "../../components/button";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrement = () => setCount((prev) => prev + 1);
    const onDecrement = () => setCount((prev) => prev - 1);
    const onReset = () => setCount(() => 0);

    return (
        <>
            <div>
                <Button title={"increment"} onClick={onIncrement}/>
                <Button title={"decrement"} onClick={onDecrement}/>
                <Button title={"reset"} onClick={onReset}/>
            </div>
            <h3>{count}</h3>
        </>
    );
};
