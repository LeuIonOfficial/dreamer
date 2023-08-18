import styled from "styled-components";
import React from "react";

const ProgressBarContainer = styled.div`
  height: 10px;
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

export const ProgresBarpx = ({ progress, onClick, children }) => {
    return (
        <ProgressBarContainer onClick={onClick}>
            <div className="cursor-pointer bg-gradient-to-r from-teal-300 via-purple-300 to-yellow-300" style={{width: `${progress}%`}} onProgress={progress} />
            {children}
        </ProgressBarContainer>
    );
};
