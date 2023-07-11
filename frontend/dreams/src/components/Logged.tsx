import "./Logged.scss";
import styled from "styled-components";
import DivContainer from "./LoggedComponents/DivContainer.tsx";
import HeaderLogin from "./LoggedComponents/HeaderLogin.tsx";
import DreamerzLogo from "./LoggedComponents/Logo.tsx";
import Search from "./LoggedComponents/Search.tsx";
import BalanceFrame from "./LoggedComponents/BalanceFrame.tsx";
import BalanceText from "./LoggedComponents/BalanceName.tsx";
import BalanceAmount from "./LoggedComponents/BalanceAmount.tsx";
import UserPhoto from "./LoggedComponents/UserPhoto.tsx";

function Logged() {
    return (
        <HeaderLogin>
            <DivContainer justify = {"flex-start"}>
                <a href="#">
            <DreamerzLogo></DreamerzLogo>
                </a>
            </DivContainer>
            <DivContainer justify = {"center"}>
            <Search />
        </DivContainer>
            <DivContainer justify={"flex-end"}>
                <BalanceFrame >
                    <BalanceText color={"#A8A6A6"} size = {"13px"}>Balance</BalanceText>
                    <BalanceAmount color={"black"} size={"12px"}></BalanceAmount>
                </BalanceFrame>
                <UserPhoto>
                    {/*<Round role="button " href="#">*/}
                    {/*      <UserImg></UserImg>*/}
                    {/*</Round>*/}
                </UserPhoto>
                {/*<UserBalance>
                    <UserImg></UserImg>
                </UserBalance>*/}
                </DivContainer>
        </HeaderLogin>
                    )}

export default Logged;
