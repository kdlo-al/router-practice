import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PathOne from "./Path1";
import PathTwo from "./Path2";
import PathThree from './Path3';
import PathFour from './Path4';
import PathFive from './Path5';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="PathOne" element={<PathOne />} />
        <Route path="PathTwo" element={<PathTwo />} />
        <Route path="PathThree" element={<PathThree />} />

        <Route path="PathFour" element={<PathFour />} />
        <Route path="PathFive" element={<PathFive />} />
      </Routes>
    </div>
  );
}

export default App;
