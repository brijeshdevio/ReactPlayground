import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    if (count == 20) return;
    setCount(count + 1);
  };

  const handleReset = () => {
    if (count == 0) return;
    setCount(0);
  };

  const handleDecrement = () => {
    if (count == 0) return;
    setCount(count - 1);
  };

  return (
    <div className="card bg-base-200 min-w-[320px] w-fit">
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">Simple Counting App</h2>
        <div className="flex flex-col gap-3 ">
          <h3 className="text-2xl font-black">{count}</h3>
          <div className="flex items-center gap-3">
            <Button className="btn-primary btn-sm" onClick={handleIncrement}>
              Increment
            </Button>
            <Button className="btn-secondary btn-sm" onClick={handleReset}>
              Reset
            </Button>
            <Button className="btn-primary btn-sm" onClick={handleDecrement}>
              Decrement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
