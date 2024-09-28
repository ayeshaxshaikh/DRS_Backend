import "./App.css";
import { Routes, Route } from "react-router-dom";
import Timer from "./Timer";
import TimerControl from "./button";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/button" element={<TimerControl />} />
      </Routes>
    </>
  );
}

export default App;
