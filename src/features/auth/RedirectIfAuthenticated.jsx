import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  // If user is already logged in such as having ACCESS_TOKEN right now, redirect to home page ("/")
  // Ex. If you already have ACCESS_TOKEN in local storage and try to access "/login" page, you will be redirected to home page ("/") instead of seeing the login page
  if (authUser) {
    return <Navigate to="/" />;
  }
  return children;
}
