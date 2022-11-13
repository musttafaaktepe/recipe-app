import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MainContext } from "../context/context";
import { useContext } from "react";

const PrivateRouter = () => {
  const {
    data: { user },
  } = useContext(MainContext);
  
  // let user : true;
  return (
    <div>
      {user ? <Navigate to={"/home"} /> : <Outlet/>}
      
    </div>
  );
};

export default PrivateRouter;
