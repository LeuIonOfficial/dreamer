import "./Logged.scss";
import DivContainer from "../LoggedComponents/DivContainer";
import HeaderLogin from "../LoggedComponents/HeaderLogin";
import DreamerzLogo from "../LoggedComponents/Logo";
import Search from "../LoggedComponents/Search";
import BalanceFrame from "../LoggedComponents/BalanceFrame";
import BalanceText from "../LoggedComponents/BalanceName";
import BalanceAmount from "../LoggedComponents/BalanceAmount";
import UserPhoto from "../LoggedComponents/UserPhoto";
import MyProfileList from "../LoggedComponents/MyProfileList";
import {useNavigate} from "react-router-dom";
import CardWrapperOpen from "../LoggedComponents/CardWrapperOpen";
import {useEffect} from "react";

function Logged() {
    const navigate = useNavigate();
    //try UseRef
    const toggleMenu = () => {

        // let opentheliiiist = open.setAttribute("height", "{\"auto\"}");
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
                <CardWrapperOpen id={"openpls"}>
                <MyProfileList></MyProfileList>
                </CardWrapperOpen>
            </DivContainer>
        </HeaderLogin>
    )
}

export default Logged;
