import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token"); // your JWT token

  if (!token) {
    // not logged in → redirect to login in one click
    return <Navigate to="/auth" replace />;
    //navigate("/cart", { replace: true }) do not use it navbar first route to /cart then another click route to /login 
  }

  // logged in → allow page
  return children;
}