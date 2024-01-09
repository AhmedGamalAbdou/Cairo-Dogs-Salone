import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Booking from "../pages/Booking";

const ProtectedRoute = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return currentUser ? <Booking /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
