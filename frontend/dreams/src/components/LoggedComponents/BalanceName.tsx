import styled from "styled-components";
import React from "react";

const UpperBal = styled.div`
  text-align: center;
  width: 100%;
  height: 14px;
`
const BalanceName = styled.h5`
  margin: 0;
  font-family: Roboto;
  font-size: ${props => props.size};
  font-style: normal;
  font-weight: 700;
  color: ${props => props.color}
`
const BalanceText = (props) => {
    return(
        <UpperBal>
        <BalanceName {...props}>
            {props.children}
        </BalanceName>
    </UpperBal>
    )
}

export default BalanceText;
