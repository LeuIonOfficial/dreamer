import {Outlet, Navigate} from "react-router-dom";
import Logged from "../components/HeaderFooter/Logged";
import Footer from "../components/HeaderFooter/Footer";

export const PrivateRoutes = () => {
    const auth = localStorage.getItem("token")

    if (auth)
        return (
            <>
                <Logged/>
                <Outlet/>
            </>
        )

    return <Navigate to={"/login"}/>
}
