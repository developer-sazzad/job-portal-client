import { useLocation } from "react-router-dom";
import Loading from "../pages/shared/Loading";
import { useContext } from "react";
import AuthContext from "../providers/AuthContext";

const PrivateRouter = ({children}) => {
    const {loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    return (
        <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    );
};

export default PrivateRouter;