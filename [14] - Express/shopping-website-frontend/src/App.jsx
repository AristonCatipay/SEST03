import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
