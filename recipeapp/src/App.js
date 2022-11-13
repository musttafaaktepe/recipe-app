import "./App.css";
import Login from "./pages/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRouter from "./router/PrivateRouter";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { MainContext } from "./context/context";
import { useContext } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    user: false,
    userName: "",
    password: "",
  });
  return (
    <BrowserRouter>
      <MainContext.Provider value={{ data, setData }}>
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route index element={<Login />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainContext.Provider>
    </BrowserRouter>
  );
}

export default App;
