import { Counter, LoginToggle, TodoList } from "../components";

const Beginner = () => {
  return (
    <>
      <section>
        <h2 className="text-xl font-semibold text-primary mb-2">
          👉 Beginner Concepts
        </h2>
      </section>
      <section className="flex flex-col gap-5">
        <Counter />
        <TodoList />
        <LoginToggle />
      </section>
    </>
  );
};

export default Beginner;
