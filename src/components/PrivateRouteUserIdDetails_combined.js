import { Navigate } from "react-router-dom";

export default function PrivateRouteUserIdDetailsCollection({ children }) {
  const isAuthDetails = localStorage.getItem("isAuthenticatedUserIDetailsCollection") === "true";
  const isAuthLogin = localStorage.getItem("isAuthenticatedUser_login") === "true";
  const isAuth = isAuthDetails || isAuthLogin;

  return isAuth ? children : <Navigate to="/signup" replace />;
}
