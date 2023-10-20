import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user} = useAuth()
    const location = useLocation();
    
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace />

};

export default PrivateRoute;