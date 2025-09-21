import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-[1200px] mx-auto py-3 px-3 sm:px-6 md:px-10 flex flex-col gap-6">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
