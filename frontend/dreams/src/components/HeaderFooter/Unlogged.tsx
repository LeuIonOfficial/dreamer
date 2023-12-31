import "./Unlogged.scss";
import BgGalaxy from "../UnloggedComponents/BgGalaxy";
import DreamerzLogo from "../GeneralComponents/DreamerzLogo";
import ButtonsTogether from "../UnloggedComponents/ButtonsTogether";
import LogIn from "../UnloggedComponents/LogIn";
import ButtonName from "../UnloggedComponents/ButtonName";
import {useNavigate} from "react-router-dom";
import React from "react";

const Unlogged = () => {
    const navigate = useNavigate();


    return (
        <BgGalaxy top={'0'} bottom={'auto'} >
            {/*<a href="#">          */}
            <DreamerzLogo onClick = {() => navigate('')} ></DreamerzLogo>
            {/*</a>*/}
            <ButtonsTogether>
                <LogIn color={'white'} onClick={() => navigate('/login')}>
                    <ButtonName >Log in</ButtonName>
                </LogIn>
                <LogIn color={'linear-gradient(297.06deg,#f8ed84 23.88%,#f5e0ff 66.2%,#84fad5 109.31%)'} onClick={() => navigate('/signup')}>
                    <ButtonName> Sign up</ButtonName>
                </LogIn>
            </ButtonsTogether>
        </BgGalaxy>
    )
}

export default Unlogged;

