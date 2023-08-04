import styled from "styled-components";
import { useState } from "react";

const ProgressBarContainer = styled.div`
  height: 16px;
  background-color: #e9ecef;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 10px 0 10px;
  display: flex;
  overflow: hidden;

  &:hover {
    border: 1px solid gray;
  }
`;

const ProgressBarFill = styled.div`
  cursor: pointer;
  background: linear-gradient(
          114.93deg,
          #84fad5 1.02%,
          #ebbfff 44.33%,
          #f6ec85 76.07%
  );
  width: ${({ progress }) => progress}%;
`;

export const ProgresBar = ({ progress, onClick, children }) => {
    return (
        <ProgressBarContainer onClick={onClick}>
            <ProgressBarFill progress={progress} />
            {children}
        </ProgressBarContainer>
    );
};

//to reuse this component use propos inside the component it will be passed
//for progress bar width inside your component
// const progress = (received / fulfilled) * 100;