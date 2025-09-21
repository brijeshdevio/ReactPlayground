import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col gap-3">
      <Link
        to={"/beginner"}
        className="block w-full border-b pb-1 border-base-200 text-primary text-md"
      >
        Beginner
      </Link>
      <Link
        to={"/intermediate"}
        className="block w-full border-b pb-1 border-base-200 text-primary text-md"
      >
        Intermediate
      </Link>
    </section>
  );
};

export default Home;
