/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
const AdminMiddleware = ({ allowedRoles }) => {
  const location = useLocation();
  const token = Cookies.get("token");

  const jwtDecodes = jwtDecode(token);
  const userRole = jwtDecodes.authorities[0];
  useEffect(() => {
    if (!allowedRoles.includes(userRole)) {
      alert("You must be an admin to access this page.");
    }
  }, [allowedRoles, userRole]);
  let content = allowedRoles.includes(userRole) ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );

  return <div>{content}</div>;
};

export default AdminMiddleware;
