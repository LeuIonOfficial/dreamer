import Unlogged from "../components/HeaderFooter/Unlogged";
import {Outlet} from "react-router-dom";

import Logged from "../components/HeaderFooter/Logged";
import Footer from "../components/HeaderFooter/Footer";

export const Layout = () => {

    return (
        <>
            <Unlogged/>
            <Outlet/>
            <Footer/>
        </>
    )
}
