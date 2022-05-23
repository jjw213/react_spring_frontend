import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
    const user = useSelector((state) => state.user.userData);
    user && console.log("로그인 페이지에서 유저 있냐??"+user);
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <div>
        
        {user ?   <Navigate to="/" />:<Outlet />}
    </div>
      
  );
};

export default PublicRoute;