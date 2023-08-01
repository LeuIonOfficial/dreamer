import styled from "styled-components";
import React from "react";

const CardFie = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
margin-bottom: ${props => props.marginBottom || "16px"};
`

const CardFields = (props) => {
    return (<CardFie margin-bottom={props.marginBottom}> {props.children}</CardFie>)
}

export default CardFields;
