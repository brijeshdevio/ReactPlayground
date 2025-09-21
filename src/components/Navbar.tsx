import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-base-200">
      <div className="w-full max-w-[1200px] mx-auto py-3 px-3 sm:px-6 md:px-10">
        <Link to="/" className="text-xl font-bold">
          ReactPlayground
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
