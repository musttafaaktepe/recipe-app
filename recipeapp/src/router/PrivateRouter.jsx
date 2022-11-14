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
      {user ? <Outlet/> : <Navigate to={"/"} /> }
      
    </div>
  );
};

export default PrivateRouter;
