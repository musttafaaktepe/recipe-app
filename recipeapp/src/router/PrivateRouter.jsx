import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { initialState, reducer } from "../reducer";
import { useReducer, useState } from "react";

const PrivateRouter = () => {
  // const [didMounth, setDidMounth] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = state;
  useEffect(() => {
    dispatch({ type: "LOGIN" });
    
  }, []);


  return <div>{user ? <Navigate to={"/home"} /> : <Outlet />}</div>;
};

export default PrivateRouter;
