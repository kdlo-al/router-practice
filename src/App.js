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
        <Route path="/gh-pages-url" element={<Home />} />
        <Route path="/gh-pages-url/PathOne" element={<PathOne />} />
        <Route path="/gh-pages-url/PathTwo" element={<PathTwo />} />
        <Route path="/gh-pages-url/PathThree" element={<PathThree />} />

        <Route path="/gh-pages-url/PathFour" element={<PathFour />} />
        <Route path="/gh-pages-url/PathFive" element={<PathFive />} />
      </Routes>
    </div>
  );
}

export default App;
