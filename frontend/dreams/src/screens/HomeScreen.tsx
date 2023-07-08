
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

const Container = styled.div`

    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  
`

const HomeScreen = () => {
    return (
        <Container>
            <WhatIsDreamerz />
            <LetTheDreams />
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

export default HomeScreen