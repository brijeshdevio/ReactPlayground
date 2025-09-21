import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beginner, Home, Intermediate } from "./pages";
import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/beginner" element={<Beginner />} />
          <Route path="/intermediate" element={<Intermediate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
