// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";
import Behero from "../components/BeOurHero/Behero";
import RBD from "../components/ReBeHero/RBD";
import Easier from "../components/purpose/Easier";
import ProjectPurpose from "../components/purpose/ProjectPurpose";
import SecurelyDonation from "../components/SecurelyDonation/SecurelyDonation";
import WingsDonation from "../components/WingsDonation/WingsDonation";
import WhatIsDreamerz from "../components/WhatIsDreams/WhatIsDreamerz";
import LetTheDreams from "../components/WhatIsDreams/LetTheDreams";
import Thoughts from "../components/Thoughts/Thoughts";
import Unlogged from "../components/HeaderFooter/Unlogged";
import Footer from "../components/HeaderFooter/Footer";
import {Outlet} from "react-router-dom";


const HomeScreen = () => {
    return (
        <>
            <LetTheDreams/>
            <WhatIsDreamerz/>
            <Behero/>
            <RBD/>
            <Easier/>
            <ProjectPurpose/>
            <Thoughts/>
            <SecurelyDonation/>
            <WingsDonation/>
        </>
    )
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default HomeScreen
