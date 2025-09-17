import { Navigate } from "react-router-dom";

export default function PrivateRouteSignup({ children }) {
  const isAuth = localStorage.getItem("isAuthenticatedSignUp") === "true";

  return isAuth ? children : <Navigate to="/signup" replace />;
}