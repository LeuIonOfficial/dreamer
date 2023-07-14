import react from "@vitejs/plugin-react";
import styled from "styled-components";
import SectionName from "./SectionName";
import SmallImages from "./SmallImages";
import AddImg from "./AddSmallImg";
import AddSmallImg from "./AddSmallImg";
import AddBigImg2 from "./AddBigImg2";


const Background = styled.div`
background-color: white;
padding: 0px 20px;
  box-sizing: border-box;
  --bs-gutter-x: 1rem;
  --bs-gutter-y: 0;  width: 33.3%;
  display: flex;
  flex-direction: column;
`
const ProfilePhotos = () => {
    return(
        <Background >
            <SectionName>Profile Photos</SectionName>
            <AddBigImg2 ></AddBigImg2>
            <SmallImages>
                <AddSmallImg id="img2">

                </AddSmallImg>
                <AddSmallImg id="img3">

                </AddSmallImg>
                <AddSmallImg id="img4">

                </AddSmallImg>
                <AddSmallImg id="img5">

                </AddSmallImg>
            </SmallImages>
        </Background>
    )
}

export default ProfilePhotos;
