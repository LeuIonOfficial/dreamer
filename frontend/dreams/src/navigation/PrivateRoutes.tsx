import {Outlet, Navigate} from "react-router-dom";
import Logged from "../components/HeaderFooter/Logged";

export const PrivateRoutes = () => {
    const auth = true

    if (auth)
        return (
            <>
                <Logged/>
                <Outlet/>
            </>
        )

    return <Navigate to={"/login"}/>
}
