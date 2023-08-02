import styled from "styled-components";
import React from "react";

const Links = styled.a`
    text-decoration: none`

const LinksForPages = (props) => {
    return <Links>
        {props.children}
    </Links>
}
export default LinksForPages;
