import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "../pages/Home";
import DrinkFocused from "../pages/DrinkFocused";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="drink:drinkid" element={<DrinkFocused />} />
        </Route>
        <Route path="/drink" element={<Layout />}>
          <Route path=":drinkid" element={<DrinkFocused />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header></Header>

      <Outlet />
    </div>
  );
}

export default App;
