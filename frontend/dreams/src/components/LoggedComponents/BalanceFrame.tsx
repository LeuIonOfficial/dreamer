import styled from "styled-components";
import React from "react";

const Frame = styled.div`
  background: linear-gradient(#fff,#fff) padding-box,linear-gradient(150deg,#84fad5 7.35%,#ebbfff 49.61%,#f6ec85 92.65%) border-box;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: default;
  margin-left: 16px;
  max-height: 40px;
  padding: 4px 5px 6px;
  width: 70px;
  display: flex;
  flex-direction: column;
`
const BalanceFrame = (props) => {
    return (
        <Frame>
                {props.children}
    </Frame>)
}




export default BalanceFrame;
