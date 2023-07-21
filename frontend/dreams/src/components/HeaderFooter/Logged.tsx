import "./Logged.scss";
import DivContainer from "../LoggedComponents/DivContainer";
import HeaderLogin from "../LoggedComponents/HeaderLogin";
import DreamerzLogo from "../LoggedComponents/Logo";
import Search from "../LoggedComponents/Search";
import BalanceFrame from "../LoggedComponents/BalanceFrame";
import BalanceText from "../LoggedComponents/BalanceName";
import BalanceAmount from "../LoggedComponents/BalanceAmount";
import UserPhoto from "../LoggedComponents/UserPhoto";
import {useNavigate} from "react-router-dom";
import CardWrapperOpen from "../LoggedComponents/CardWrapperOpen";
import { useState} from "react";
import CardFields from "../LoggedComponents/CardFields";
import LinkButton from "../LoggedComponents/LinkButton";
import DivForSvg from "../LoggedComponents/DivForSvg";
import ProfiePhotos from "../ProfilePhotos/ProfiePhotos";
import MyProfileList from "../LoggedComponents/MyProfileList";

function Logged() {
    const navigate = useNavigate();
    const [myheight, setMyHeight] = useState("0px");
    const toggleMenu = () => {
        if (myheight === "0px") {
            setMyHeight("auto");
        } else {
            setMyHeight("0px")
        }
        console.log("I am pressed, but not impressed");
    }
    return (
        <HeaderLogin>
            <DivContainer justify={"flex-start"}>
                <a href="#">
                    <DreamerzLogo></DreamerzLogo>
                </a>
            </DivContainer>
            <DivContainer justify={"center"}>
                <Search/>
            </DivContainer>
            <DivContainer justify={"flex-end"}>
                <BalanceFrame>
                    <BalanceText color={"#A8A6A6"} size={"13px"}>Balance</BalanceText>
                    <BalanceAmount color={"black"} size={"12px"}></BalanceAmount>
                </BalanceFrame>
                <UserPhoto onClick={() => toggleMenu()}>
                    {/*<Round role="button " href="#">*/}
                    {/*      <UserImg></UserImg>*/}
                    {/*</Round>*/}
                </UserPhoto>
                <CardWrapperOpen height={myheight}>
                    <MyProfileList>
                    <CardFields>
                            <LinkButton>My Profile</LinkButton>
                            <LinkButton>Pricing Page</LinkButton>
                    </CardFields>
                    <hr />
                    <CardFields>
                        <LinkButton>About Us</LinkButton>
                        <LinkButton>How it works</LinkButton>
                        <LinkButton>FAQ</LinkButton>
                        <LinkButton>Leave feedback</LinkButton>
                        <LinkButton>Terms $ Conditions</LinkButton>
                        <LinkButton>Privacy Policy</LinkButton>
                    </CardFields>
                    <hr />
                    <CardFields>
                        <LinkButton>Logout</LinkButton>
                        {/*logout remove items from local storage
                        в src создаем services , а там функцию удаления. delete token from local storage*/}
                    </CardFields>
                    </MyProfileList>
                </CardWrapperOpen>
            </DivContainer>
        </HeaderLogin>
    )
}

export default Logged;
