import { useContext } from "react";
import { AuthContext } from "../Providers/AuthCont";


const useAuth = () => {
    const auth = useContext(AuthContext);
    const {user}=auth;
    console.log(user)
    return auth;
};

export default useAuth; 