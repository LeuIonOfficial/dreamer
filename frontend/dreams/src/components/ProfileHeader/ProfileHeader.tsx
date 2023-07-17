import styled from "styled-components";
import {useState} from "react";


const Container = styled.div`
  max-width: 1300px;
  box-sizing: border-box;
  margin: 0 304px 0 304px;
`
// const CenterContetnt = styled.div`
//   margin: 0;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
// `

const HeaderProfile = styled.div`
  margin-bottom: 0;
  margin-top: 10px;
`
const ProfileBG = styled.div`
  background-color: gray;
  overflow: hidden;
  border-radius: 8px;
  height: 325px;
  top: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

`
const DropDownSection = styled.div`
  //position: absolute;
`
const DDButton = styled.button`

  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  z-index: 100;
  opacity: 0;
  padding: 0 5px 0 5px;
  border: 0;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 10px 10px 0;

  &:hover {
    color: #fff;
    opacity: 1;
  }
`
const ButtonImg = styled.img`
  background-size: cover;
  margin: 3px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  vertical-align: middle;
`
const EditButton = styled.p`
  font-size: .875rem;
  margin: 0 14px 0 14px;
`
const DropDonwArrow = styled.img`
  background-size: cover;
  margin: 3px;
  cursor: pointer;
  width: 10px;
  height: 10px;
  vertical-align: middle;
`
const DropDownBox = styled.div`
  opacity: ${({$opacity}) => ($opacity ? 1 : 0)};
  margin: 0 10px 5px 0;
  border-radius: 8px;
  width: 80px;
  max-height: 100px;
  max-width: 120px;
  background-color: #fff;
  box-shadow: 0 0 1.25rem 0 rgba(0, 0, 0, .1);
  padding: 10px;
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`
const DropDownConatiner = styled.div`
  display: flex;
  flex-direction: row;  
  padding-top: 4px;
  & span {
    margin: 0 0 10px 10px;
    cursor: pointer;

    &:hover {
      font-weight: 600;
    }
  }
`
const UploadSvg = styled.img`
  width: 18px;
  height: 18px;
  background-size: cover;
  vertical-align: middle;
  &:hover{
    height: 19px;
    width: 19px;
  }
`

export const ProfileHeader = () => {
    const [isOpacity, setIsOpacity] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState('');

    // const handleMouseEnter = () =>{setIsOpacity(true)};
    const handleMouseLeave = () =>{setIsOpacity(false)};
    return (
        <Container>
            <HeaderProfile>
                <ProfileBG>
                    <DropDownSection>
                        <DropDownBox $opacity={isOpacity}  onMouseLeave={handleMouseLeave}>

                            <DropDownConatiner>
                                <UploadSvg src={'./../../../../src/assets/wing/cloud.png'}>
                                </UploadSvg>
                                <span>Upload</span>
                            </DropDownConatiner>

                            <DropDownConatiner>
                                <UploadSvg  src={'./../../../../src/assets/wing/resize.png'}></UploadSvg>
                                <span>Resize</span>
                            </DropDownConatiner>
                            <DropDownConatiner>
                                <UploadSvg src={'./../../../../src/assets/wing/delete.png'}></UploadSvg>
                                <span>Delete</span>
                            </DropDownConatiner>
                        </DropDownBox>
                        <DDButton >
                            <ButtonImg
                                src={"./../../../../src/assets/wing/photo-camera-svgrepo-com.png"}></ButtonImg>
                            <EditButton $opacity={isOpacity} onClick={() => setIsOpacity(!isOpacity)} >Edit</EditButton>
                            <DropDonwArrow
                                src={"./../../../../src/assets/wing/drop-down-arrow.png"}></DropDonwArrow>

                        </DDButton>

                    </DropDownSection>

                </ProfileBG>

            </HeaderProfile>
        </Container>
    )
};
