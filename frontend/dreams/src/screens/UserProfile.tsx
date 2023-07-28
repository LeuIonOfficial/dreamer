import {Outlet} from "react-router-dom";
import Footer from "../components/HeaderFooter/Footer";
import AboutBiography from "../components/AboutBiography/AboutBiography";

export const UserProfile = () => {
    return (
        <>
            <Outlet/>
            <AboutBiography/>
            <Footer/>
        </>
    )
}