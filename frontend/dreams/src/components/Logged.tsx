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
import React from "react";

const UserImg = styled.img`
  background-image: url('data:image/png;base64,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');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  vertical-align: middle;
  overflow-clip-margin: content-box;
  overflow: clip;
  //object-fit: cover;
  cursor: pointer;
`
const Round = styled.a`
    display: flex;
  align-items: center;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: #e2e2e2;
  margin-right: 10px;
`

function Logged() {
    return (
        <HeaderLogin>
            <DivContainer justify = {"flex-start"}>
            <DreamerzLogo></DreamerzLogo>
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
                    <Round role="button " href="#">
                          <UserImg></UserImg>
                    </Round>
                </UserPhoto>
                {/*<UserBalance>
                    <UserImg></UserImg>
                </UserBalance>*/}
                </DivContainer>
        </HeaderLogin>
                    )}

export default Logged;
