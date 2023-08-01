import react from "@vitejs/plugin-react";
import styled from "styled-components";
import SectionName from "./SectionName";
import SmallImages from "./SmallImages";
import AddImg from "./AddSmallImg";
import AddSmallImg from "./AddSmallImg";
import AddBigImg from "./AddBigImg";
import React from "react";

const Background = styled.div`
  background-color: white;
  padding: 0px 20px;
  box-sizing: border-box;
  --bs-gutter-x: 1rem;
  width: 33.3%;
  display: flex;
  flex-direction: column;
`

const ProfilePhotos = () => {
    return(
        <Background >
            <SectionName>Profile Photos</SectionName>
            <AddBigImg></AddBigImg>
            <SmallImages>
                <AddSmallImg></AddSmallImg>
                <AddSmallImg></AddSmallImg>
                <AddSmallImg></AddSmallImg>
                <AddSmallImg></AddSmallImg>
            </SmallImages>
        </Background>
    )
}

export default ProfilePhotos;
