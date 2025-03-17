import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/shared/Loading";
import { useContext } from "react";
import AuthContext from "../providers/AuthContext";

const PrivateRouters = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)

    if(loading){
        return <Loading></Loading>
    }
    if(user) {
        return children;
    }

    return (
        <Navigate to={'/auth/login'} state={location.pathname}></Navigate>
    );
};

export default PrivateRouters;