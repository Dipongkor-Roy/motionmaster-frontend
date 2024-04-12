import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthCont";
import useAdmin from "../Hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoadingPending] = useAdmin();
  if (loading || adminLoadingPending) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
