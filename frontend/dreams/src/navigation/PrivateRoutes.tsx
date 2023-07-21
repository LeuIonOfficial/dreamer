import {Outlet, Navigate} from "react-router-dom";
import Logged from "../components/HeaderFooter/Logged";
import Footer from "../components/HeaderFooter/Footer";

export const PrivateRoutes = () => {
    const auth = true

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
