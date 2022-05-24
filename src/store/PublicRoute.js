import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
    const userdata = useSelector((state) => state.user.userData);
    console.log("로그인 페이지에서 유저 있냐??"+userdata);
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <div>
        
        {userdata ?   <Navigate to="/" />:<Outlet />}
    </div>
      
  );
};

export default PublicRoute;