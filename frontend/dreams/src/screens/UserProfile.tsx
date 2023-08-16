import {Outlet} from "react-router-dom";
import Footer from "../components/HeaderFooter/Footer";
import AboutBiography from "../components/AboutBiography/AboutBiography";
import ProfilePhoto from "../components/ProfilePhoto/ProfilePhoto";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const UserProfile = () => {
    return (
        <>
            <Outlet/>

            <Container>
            <ProfilePhoto/>
            <AboutBiography/>
            </Container>

            <Footer/>
        </>
    )
}