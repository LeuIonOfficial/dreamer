import {Navigate} from "react-router-dom";
import {ProfileHeader} from "../components/ProfileHeader/ProfileHeader";
import RightSideBlock from "../components/rightSideBar/RightSideBlock";
import LeftSideBar from "../components/LeftSIdeBar/LeftSideBar";
import styled from "styled-components";
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

    return (
        <Container>
            <LeftSideBar/>
            <RightSideBlock/>
        </Container>
    )
}
