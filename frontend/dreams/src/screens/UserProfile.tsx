import {Outlet} from "react-router-dom";
import Footer from "../components/HeaderFooter/Footer";

export const UserProfile = () => {
    return (
        <>
            <Outlet/>
            <Footer/>
        </>
    )
}