import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const user = useSelector((state) => state.user.userData);
  user == undefined && alert("접근 권한이 없습니다. 로그인 후 다시 시도하십시오.");
  return <React.Fragment>
    {user == undefined ? <Navigate to="/members/memberLogin" /> : <Outlet />}
  </React.Fragment>
};
export default PrivateRoute;
