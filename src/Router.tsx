import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Day1, DayList } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DayList />} />
        <Route path="/day1" element={<Day1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
