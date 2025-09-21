import { useRef, useState } from "react";
import Button from "./Button";

export default function FocusInput() {
  const [input, setInput] = useState<string>("");
  const ref = useRef<HTMLInputElement | null>(null);

  const handleAddTask = () => {
    if (ref?.current) {
      ref.current.focus();
    }
  };

  return (
    <div className="card bg-base-200 min-w-[320px] w-fit">
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">Focus Input</h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <input
              className="input input-sm"
              placeholder="Add a task"
              value={input}
              onChange={(e: any) => setInput(e.target.value)}
            />
            <Button className="btn-primary btn-sm" onClick={handleAddTask}>
              Focus
            </Button>
          </div>
          <div>
            <p className="opacity-70">{input}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
