import "./App.css";
import Login from "./pages/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRouter from "./router/PrivateRouter";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Login />} />
          
        </Route>

        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to={"/"}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
