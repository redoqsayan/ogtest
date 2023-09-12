import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
 

  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
}

export default App;
