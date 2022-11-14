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
import Navbar from "./components/navbar/Navbar";
import Details from "./pages/details/Details";

function App() {
  const [data, setData] = useState({
    user: false,
    userName: "",
    password: "",
    serchFood: "",
    selectMeal: "breakfast",
  });

  const [authentication, setAuthentication] = useState({
    API_KEY: process.env.REACT_APP_APP_KEY,
    API_ID: process.env.REACT_APP_APP_ID,
  });

  return (
    <BrowserRouter>
      <MainContext.Provider value={{ data, setData, authentication }}>

        {data.user && <Navbar/>} 
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
          </Route>

          <Route path="/about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>

          <Route path="/details" element={<Details />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainContext.Provider>
    </BrowserRouter>
  );
}

export default App;
