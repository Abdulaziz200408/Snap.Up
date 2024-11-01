import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Rootlayout from "./Rotlayout/Rootlayout";
import Menu from "./menu/Menu";
import Details from "./Pages/Details";
import Basket from "./Pages/basket";
const notify = () => toast.success("Wow so easy!");

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Rootlayout />}>
            <Route path="/" element={<Menu />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="shop" element={<Basket />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
