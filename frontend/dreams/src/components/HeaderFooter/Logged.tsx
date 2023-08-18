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
import {useState} from "react";
import CardFields from "../LoggedComponents/CardFields";
import LinkButton from "../LoggedComponents/LinkButton";
import MyProfileList from "../LoggedComponents/MyProfileList";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWrench, faUsers, faQuestionCircle, faFileContract} from '@fortawesome/free-solid-svg-icons'
import CardText from "../LoggedComponents/CardText";
import styled from "styled-components";
import React from "react";

const Line = styled.hr`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
`

function Logged() {
    const [showSearch, setShowSearch] = useState(window.innerWidth > 800);
    const navigate = useNavigate();
    const marginBottom = "16px";
    const [myheight, setMyHeight] = useState("0px");
    let [mywidth, setMyWidth] = useState("0px");
    let smallScreen = window.matchMedia("(max-width: 600px)");
    let setWidth = document.body.offsetWidth - 15 + "px";
    // let setWidthSearch = document.body.offsetWidth - 60 + "px";
    let [searchWidth, setSearchWidth] = useState("0px");
    // const [searchHere, setDisplay] = useState("");

    let mediaWidth = (smallScreen) => {
        if (smallScreen.matches) {
            mywidth = setWidth;
            // searchWidth = setWidthSearch;
        } else {
            mywidth = "180px";
        }
    }
    mediaWidth(smallScreen);
    smallScreen.addListener(mediaWidth);
    //>501 i <500
    const toggleMenu = () => {
        if (myheight === "0px") {
            setMyHeight("auto");
        } else {
            setMyHeight("0px")
        }
    }

    const handleResize = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 800 && showSearch) {
            setShowSearch(false);
        } else if (screenWidth > 800 && !showSearch) {
            setShowSearch(true);
        }
    };

    return (
        <HeaderLogin>
            <DivContainer justify={"flex-start"}>
                <a href="#">
                    <DreamerzLogo></DreamerzLogo>
                </a>
            </DivContainer>
            {showSearch && <Search/>}
            <DivContainer justify={"flex-end"}>
                <BalanceFrame>
                    <BalanceText color={"#A8A6A6"} size={"13px"}>Balance</BalanceText>
                    <BalanceAmount color={"black"} size={"12px"}></BalanceAmount>
                </BalanceFrame>
                <UserPhoto onClick={() => toggleMenu()}>
                </UserPhoto>
                <CardWrapperOpen height={myheight} width={mywidth}>
                    <MyProfileList>
                        <CardFields>
                            {!showSearch && <Search/>}
                            <LinkButton>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                    <path fillRule="evenodd"
                                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path>
                                </svg>
                                <CardText>My profile</CardText>
                            </LinkButton>
                            <LinkButton>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-cash-coin" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"></path>
                                    <path
                                        d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"></path>
                                    <path
                                        d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"></path>
                                    <path
                                        d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"></path>
                                </svg>
                                <CardText>Pricing page</CardText>
                            </LinkButton>
                        </CardFields>
                        <Line/>
                        <CardFields>
                            <LinkButton>
                                <FontAwesomeIcon icon={faUsers}/>
                                <CardText>About us</CardText>
                            </LinkButton>
                            <LinkButton>
                                <FontAwesomeIcon icon={faWrench}/>
                                <CardText>How it works</CardText>
                            </LinkButton>
                            <LinkButton>
                                <FontAwesomeIcon icon={faQuestionCircle}/>
                                <CardText>FAQ</CardText>
                            </LinkButton>
                            <LinkButton>
                                <svg width="16" height="16" viewBox="0 0 14 15" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.5 0C8.10218 0 7.72064 0.158035 7.43934 0.43934C7.15804 0.720644 7 1.10218 7 1.5V3.5C7.00004 3.81016 7.09623 4.11267 7.27532 4.3659C7.4544 4.61913 7.70758 4.81062 8 4.914V6C8.00004 6.09501 8.02714 6.18804 8.07814 6.2682C8.12913 6.34836 8.20191 6.41233 8.28795 6.45262C8.37399 6.49291 8.46973 6.50786 8.56396 6.49571C8.65819 6.48355 8.747 6.4448 8.82 6.384L10.48 5H12.5C12.8978 5 13.2794 4.84196 13.5607 4.56066C13.842 4.27936 14 3.89782 14 3.5V1.5C14 1.10218 13.842 0.720644 13.5607 0.43934C13.2794 0.158035 12.8978 0 12.5 0H8.5ZM8 1.5C8 1.36739 8.05268 1.24021 8.14645 1.14645C8.24021 1.05268 8.36739 1 8.5 1H12.5C12.6326 1 12.7598 1.05268 12.8536 1.14645C12.9473 1.24021 13 1.36739 13 1.5V3.5C13 3.63261 12.9473 3.75979 12.8536 3.85355C12.7598 3.94732 12.6326 4 12.5 4H10.3C10.1831 4.00005 10.0698 4.0411 9.98 4.116L9 4.932V4.5C9 4.36739 8.94732 4.24021 8.85355 4.14645C8.75979 4.05268 8.63261 4 8.5 4C8.36739 4 8.24021 3.94732 8.14645 3.85355C8.05268 3.75979 8 3.63261 8 3.5V1.5ZM2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3C4.53043 3 5.03914 3.21071 5.41421 3.58579C5.78929 3.96086 6 4.46957 6 5C6 5.53043 5.78929 6.03914 5.41421 6.41421C5.03914 6.78929 4.53043 7 4 7C3.46957 7 2.96086 6.78929 2.58579 6.41421C2.21071 6.03914 2 5.53043 2 5ZM4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6C4.26522 6 4.51957 5.89464 4.70711 5.70711C4.89464 5.51957 5 5.26522 5 5C5 4.73478 4.89464 4.48043 4.70711 4.29289C4.51957 4.10536 4.26522 4 4 4ZM1.5 8H6.5C6.89782 8 7.27936 8.15804 7.56066 8.43934C7.84196 8.72064 8 9.10218 8 9.5C8 10.616 7.541 11.51 6.788 12.115C6.047 12.71 5.053 13 4 13C2.947 13 1.953 12.71 1.212 12.115C0.46 11.51 0 10.616 0 9.5C0 9.10218 0.158035 8.72064 0.43934 8.43934C0.720644 8.15804 1.10218 8 1.5 8ZM6.5 9H1.5C1.36739 9 1.24021 9.05268 1.14645 9.14645C1.05268 9.24021 1 9.36739 1 9.5C1 10.317 1.325 10.923 1.838 11.335C2.364 11.757 3.12 12 4 12C4.88 12 5.636 11.757 6.162 11.335C6.675 10.923 7 10.317 7 9.5C7 9.36739 6.94732 9.24021 6.85355 9.14645C6.75979 9.05268 6.63261 9 6.5 9Z"></path>
                                </svg>
                                <CardText>Leave feedback</CardText>
                            </LinkButton>
                            <LinkButton>
                                <FontAwesomeIcon icon={faFileContract}/>
                                <CardText>Terms & Conditions</CardText>
                            </LinkButton>
                            <LinkButton>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-file-earmark-lock" viewBox="0 0 16 16">
                                    <path
                                        d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0zM7 7v1h2V7a1 1 0 0 0-2 0zM6 9.3v2.4c0 .042.02.107.105.175A.637.637 0 0 0 6.5 12h3a.64.64 0 0 0 .395-.125c.085-.068.105-.133.105-.175V9.3c0-.042-.02-.107-.105-.175A.637.637 0 0 0 9.5 9h-3a.637.637 0 0 0-.395.125C6.02 9.193 6 9.258 6 9.3z"></path>
                                    <path
                                        d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"></path>
                                </svg>
                                <CardText>Privacy Policy</CardText>
                            </LinkButton>
                        </CardFields>
                        <Line/>
                        <CardFields margin-bottom={marginBottom}>
                            <LinkButton style="padding-bottom: 16px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"></path>
                                    <path fillRule="evenodd"
                                          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"></path>
                                </svg>
                                <CardText margin-bottom={"16px"}>Logout</CardText>
                            </LinkButton>
                        </CardFields>
                    </MyProfileList>
                </CardWrapperOpen>
            </DivContainer>
        </HeaderLogin>
    );
}

export default Logged;
