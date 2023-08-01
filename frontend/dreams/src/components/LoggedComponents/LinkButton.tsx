import styled from "styled-components";
import React from "react";

const LinkBu = styled.button`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   border: none;
   line-height: normal;
   padding: 16px 16px;
   background: transparent;
   color: #777d74;
   padding-bottom: ${props => props.bottom || "0"};
   &:hover{
      color: black;
   }`

const LinkButton = (props) => {
   return <LinkBu padding-bottom={props.bottom}> {props.children} </LinkBu>;
}
export default LinkButton;
