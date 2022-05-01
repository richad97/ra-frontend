import "./main.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Logo</li>

          <div className="mid-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="products">Products</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </div>

          <li>Cart</li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
