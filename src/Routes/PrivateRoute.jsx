
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location=useLocation();
    console.log(location.pathname);

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }

    return <Navigate
    state={location.pathname} to="/signin" replace></Navigate>
};

export default PrivateRoute;