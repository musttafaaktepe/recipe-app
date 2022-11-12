import React from 'react';
import { Navigate, Outlet} from "react-router-dom";


const PrivateRouter = () => {
    const user = true;
  return (
    <div>
        {user ? <Navigate to={"/home"} /> : <Outlet />}
        
    </div>
  )
}

export default PrivateRouter