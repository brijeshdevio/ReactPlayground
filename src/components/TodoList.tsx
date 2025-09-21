import { useState } from "react";
import Button from "./Button";

export default function TodoList() {
  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>(["Dummy task"]);

  const handleAddTask = () => {
    if (input == "") return;
    setTasks((pre) => [input, ...pre]);
    setInput("");
  };

  return (
    <div className="card bg-base-200 min-w-[320px] w-fit">
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">ToDo List App</h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <input
              className="input input-sm"
              placeholder="Add a task"
              value={input}
              onChange={(e: any) => setInput(e.target.value)}
            />
            <Button className="btn-primary btn-sm" onClick={handleAddTask}>
              ADD
            </Button>
          </div>
          <ul className="text-start flex flex-col gap-1 max-h-300px">
            {tasks?.map((task: string, index: number) => (
              <li key={index} className="bg-base-100 p-2 rounded">
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
