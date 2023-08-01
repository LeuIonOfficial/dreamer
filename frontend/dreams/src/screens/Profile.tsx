import {Outlet} from "react-router-dom";
import Footer from "../components/HeaderFooter/Footer";
import AboutBiography from "../components/AboutBiography/AboutBiography";
import {CreateDreams} from "./CreateDreams";

export const Profile = () => {
    return (
        <>
            <Outlet/>
            <Footer/>
        </>
    )
}