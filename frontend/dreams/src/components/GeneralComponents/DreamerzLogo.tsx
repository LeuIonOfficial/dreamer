import styled from "styled-components";
import React from "react";

const Logo = styled.div`
  background-image: url('https://dreamerz.net/static/media/whiteLogo.d4409e777733dc79e6d8.svg');
  background-repeat: no-repeat;
  color: white;
  height: 60px;
  width: 160px;
  cursor: pointer;
`

const DreamerzLogo = (props) => {
    return <Logo {...props}>

    </Logo>
}

export default DreamerzLogo;
