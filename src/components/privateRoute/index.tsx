import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStore } from "../../lib/types";

const PrivateRoute = () => {
  const isLoggedIn = useSelector((store: IStore) => {
    return store.auth.isLoggedIn;
  });

  return isLoggedIn ? <Outlet /> : <Navigate to="login" replace />;
};
export default PrivateRoute;
