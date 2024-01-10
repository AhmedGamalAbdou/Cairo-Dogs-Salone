import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Booking from "../pages/Booking";

const ProtectedRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? <Booking /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
