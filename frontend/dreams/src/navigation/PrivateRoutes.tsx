import {Outlet, Navigate} from "react-router-dom";
import Logged from "../components/HeaderFooter/Logged";

export const PrivateRoutes = () => {
    const auth = localStorage.getItem("token")

    if (auth)
        return (
            <>
                <Logged/>
                <Outlet/>
                <Footer/>
            </>
        )

    return <Navigate to={"/login"}/>
}
