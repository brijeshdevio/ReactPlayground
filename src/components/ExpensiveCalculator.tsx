import { useState, useMemo } from "react";
import Button from "./Button";

function expensiveFibonacci(n: number): number {
  console.log(`Calculating Fibonacci of ${n}`);
  if (n <= 1) return n;
  return expensiveFibonacci(n - 1) + expensiveFibonacci(n - 2);
}

export default function ExpensiveCalculator() {
  const [num, setNum] = useState(3);

  const fib = useMemo(() => {
    return expensiveFibonacci(num);
  }, [num]);

  const handleIncrement = () => {
    setNum(num + 1);
  };

  const handleDecrement = () => {
    if (num <= 0) return;
    setNum(num - 1);
  };

  return (
    <div className="card bg-base-200 min-w-[320px] w-fit">
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">Expensive Calculator</h2>
        <div className="flex flex-col gap-3 ">
          <div>
            <h3 className="text-2xl font-black">
              Fibonacci of {num} is{" "}
              <strong className="text-accent">{fib}</strong>
            </h3>
            {num >= 20 && (
              <p className="opacity-70 text-error">
                You are performing an expensive operation. Please see the
                console.
              </p>
            )}
          </div>
          <div className="flex items-center justify-center gap-3">
            <Button className="btn-primary btn-sm" onClick={handleIncrement}>
              Increment
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
