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
        <Route path="/router-practice" element={<Home />} />
        <Route path="/router-practice/PathOne" element={<PathOne />} />
        <Route path="/router-practice/PathTwo" element={<PathTwo />} />
        <Route path="/router-practice/PathThree" element={<PathThree />} />

        <Route path="/router-practice/PathFour" element={<PathFour />} />
        <Route path="/router-practice/PathFive" element={<PathFive />} />
      </Routes>
    </div>
  );
}

export default App;
