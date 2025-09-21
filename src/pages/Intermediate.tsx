import { ExpensiveCalculator, FocusInput } from "../components";

const Intermediate = () => {
  return (
    <>
      <section>
        <h2 className="text-xl font-semibold text-primary mb-2">
          👉 Intermediate Concepts
        </h2>
      </section>
      <section className="flex flex-col gap-5">
        <ExpensiveCalculator />
        <FocusInput />
      </section>
    </>
  );
};

export default Intermediate;
