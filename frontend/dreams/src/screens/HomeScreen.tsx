
import Behero from "../components/BeOurHero/Behero";
import RBD from "../components/ReBeHero/RBD";
import Easier from "../components/purpose/Easier";
import ProjectPurpose from "../components/purpose/ProjectPurpose";
import SecurelyDonation from "../components/SecurelyDonation/SecurelyDonation";
import WingsDonation from "../components/WingsDonation/WingsDonation";
import styled from "styled-components";
import WhatIsDreamerz from "../components/WhatIsDreams/WhatIsDreamerz";
import LetTheDreams from "../components/WhatIsDreams/LetTheDreams";
import Thoughts from "../components/Thoughts/Thoughts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";
import Footer from "../components/HeaderFooter/Footer";
import Unlogged from "../components/HeaderFooter/Unlogged";

const Container = styled.div`

    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  
`

const HomeScreen = () => {
    return (
        <Container>
            <Unlogged />
            <LetTheDreams />
            <WhatIsDreamerz />
            <Behero />
            <RBD />
            <Easier />
            <ProjectPurpose />
            <Thoughts />
            <SecurelyDonation />
            <WingsDonation />
        </Container>
    )
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default HomeScreen