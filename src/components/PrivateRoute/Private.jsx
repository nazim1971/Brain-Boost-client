import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Private = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="mx-auto h-screen flex justify-center items-center">
            <img src="https://i.ibb.co/tpJx9kQ/Animation-1715360708115.gif" alt="" />
        </div>
    }
    
    if(user){
        return children
    }
    return (
       <Navigate state={location?.pathname || '/'} to='/login'></Navigate>
    );
};

export default Private;