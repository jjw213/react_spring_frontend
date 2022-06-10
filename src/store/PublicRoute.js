import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
    const userdata = useSelector((state) => state.user.userData);
  return (
    <React.Fragment>
        
        {userdata ?   <Navigate to="/" />:<Outlet />}
    </React.Fragment>
      
  );
};

export default PublicRoute;