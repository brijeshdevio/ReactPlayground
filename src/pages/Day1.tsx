import { useRef, useState, type FormEvent } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 border rounded">
      <div>
        <b>Controlled Form</b>
      </div>
      <label className="block">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-1 ml-2"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Submit
      </button>
    </form>
  );
};

const UncontrolledForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Submitted Name: ${nameRef.current?.value}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 border rounded">
      <div>
        <b>Uncontrolled Form</b>
      </div>
      <label className="block">
        Name:
        <input type="text" ref={nameRef} className="border p-1 ml-2" />
      </label>
      <button
        type="submit"
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        Submit
      </button>
    </form>
  );
};

const Day1 = () => {
  return (
    <div>
      <h3>Day 1</h3>
      <ControlledForm />
      <UncontrolledForm />
    </div>
  );
};

export default Day1;
