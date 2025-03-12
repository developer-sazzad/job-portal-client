import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../providers/AuthContext";

const SocialLogin = () => {
    const {setUser,loginWithGoogle} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="py-7">
            <button onClick={handleGoogleLogin} className="btn btn-soft btn-xl w-full">
            <FcGoogle /> Sign up with Google</button>
            <div className="divider py-5 font-bold">OR</div>
        </div>
    );
};

export default SocialLogin;