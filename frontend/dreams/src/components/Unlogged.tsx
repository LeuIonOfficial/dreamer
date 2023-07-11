import "./Unlogged.scss";
import styled from "styled-components";
import BgGalaxy from "./UnloggedComponents/BgGalaxy.tsx";
import DreamerzLogo from "./GeneralComponents/DreamerzLogo.tsx";
import ButtonsTogether from "./UnloggedComponents/ButtonsTogether.tsx";
import LogIn from "./UnloggedComponents/LogIn.tsx";
import ButtonName from "./UnloggedComponents/ButtonName.tsx";

function Unlogged() {
    return (
        <BgGalaxy><a href="#">
            <DreamerzLogo></DreamerzLogo> </a>
            <ButtonsTogether>
                <LogIn color={'white'}>
                    <a href='#'>
                    <ButtonName>Log in</ButtonName>
                    </a>
                </LogIn>
                <LogIn color={'linear-gradient(297.06deg,#f8ed84 23.88%,#f5e0ff 66.2%,#84fad5 109.31%)'}>
                    <a href='#'>
                    <ButtonName>Sign up</ButtonName>
                    </a>
                </LogIn>
            </ButtonsTogether>
        </BgGalaxy>
    )
}

export default Unlogged;

