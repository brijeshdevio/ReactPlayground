import { Link } from "react-router-dom";

const List = ({ to = "", text = "" }: { to: string; text: string }) => {
  return (
    <li>
      <Link to={to}>{text}</Link>
    </li>
  );
};

const daysList = [
  {
    to: "/day1",
    text: "Day 1: ReactJS – Controlled vs Uncontrolled Components",
  },
];

const DayList = () => {
  return (
    <main>
      <div>
        <h2>React Playground</h2>
        <p>List of Days:</p>
        <ul>
          {daysList.map((day, index) => (
            <List key={index} to={day.to} text={day.text} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default DayList;
