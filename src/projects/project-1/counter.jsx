import React, { useState } from "react";
import { Button } from "../../components/button";

export const Counter = () => {
  const [count, setCount] = useState(5);

  const onIncrement = () => setCount((prev) => prev + 1);
  const onDecrement = () => setCount((prev) => prev - 1);

  // const onReset = () => //сбрасывать счетчик на ноль

  return (
    <>
      <div>
        <Button title={"increment"} onClick={onIncrement} />
        <Button title={"decrement"} onClick={onDecrement} />
      </div>
      <h3>{count}</h3>
    </>
  );
};
