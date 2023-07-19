import {Outlet, Navigate} from "react-router-dom";

export const PrivateRoute = () => {
    const auth = {'token': true}
    return (
        auth.token ? <Outlet/> : <Navigate to='/login'/>
    )
}