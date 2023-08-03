import RightSideBlock from "../components/rightSideBar/RightSideBlock";
import LeftSideBar from "../components/LeftSIdeBar/LeftSideBar";
import styled from "styled-components";
import {useState} from "react";
import ProfilePhotos from "../components/ProfilePhotos/ProfiePhotos";
import {DashboardComponent} from "../components/DashboardComponent/DashboardComponent";
import {DonationList} from "../components/LeftSIdeBar/DonationList";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 16.66666667% 66.66666667% 16.66666667%;
  grid-template-rows: 2;
  @media (width < 992px) {
    grid-template-columns:${(props) => (props.donation ? "100%" : "66.66666667% 33.33333333%")};

  }
  @media (width < 769px) {
    grid-template-columns: 100%;


  }
`
const Iteam1 = styled.div`
  @media (width < 991px) {
    //grid-row-start: ;
    //grid-row-end: ;
    grid-column-start: 1 ;
    grid-column-end: 3;
  }

`
const Iteam2 = styled.div`
  @media (width < 991px) {
    grid-column-start: 1 ;
    grid-column-end: 3;
  }

`
const TestCompoennt = styled.div`
  width: 100%;
  height: 100rem;
  background-color: gray;
`
export const Dashboard = () => {
    const [showCard, setShowCard] = useState(false);
    const [donation, setDonation] = useState(false)
    const [state, setState] = useState(false);
    const handleShowCard = () => {
        setShowCard(true);
    };
    const hideShowCard = () => {
        setShowCard(false)
    };
    const handleShowDoantion = () => {
        setDonation(true);
    };
    const hideShowDoantion = () => {
        setDonation(false)
    };
    return (
        <Container >
            <Iteam1>
                <LeftSideBar hideShowCard={hideShowCard} handleShowCard={handleShowCard} handleShowDoantion={handleShowDoantion} hideShowDoantion={hideShowDoantion}/>
            </Iteam1>

            {!showCard && !donation ? (<DashboardComponent/>) : ("")}

            {!donation ? (<RightSideBlock showCard={showCard}/>) : ("")}

            {donation ? (<DonationList/>) : ("")}

        </Container>
    )
}