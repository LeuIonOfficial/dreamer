import {Navigate} from "react-router-dom";
import {ProfileHeader} from "../components/ProfileHeader/ProfileHeader";
import RightSideBlock from "../components/rightSideBar/RightSideBlock";
import LeftSideBar from "../components/LeftSIdeBar/LeftSideBar";
import styled from "styled-components";
import {useState} from "react";
import {DashboardComponent} from "../components/DashboardComponent/DashboardComponent";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  @media(width < 990px){
    flex-direction: column;
  }
`
export const Dashboard = () => {
    const [showCard, setShowCard] = useState(false);

    const handleShowCard = () => {
        setShowCard(true);
    };
    const hideShowCard = () =>{
        setShowCard(false)
    }

    return (
        <Container>
            <LeftSideBar hideShowCard={hideShowCard } handleShowCard={handleShowCard}/>
            <RightSideBlock showCard={showCard}/>
        </Container>
    )
}
