import styled from "styled-components";
import {useRef, useState} from "react";
import LeftSideBar from "../LeftSIdeBar/LeftSideBar";

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
  background-image: url(${({ $backgroundImage }) => $backgroundImage || "./../../../src/assets/wing/Background5.67805aabb7dd9a06b946.png"});
  background-size: cover;
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
z-index: 100;`
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
  & input{
    visibility: hidden;
  }
  & label{
    margin: 0 0 10px 10px;
    cursor: pointer;
    &:hover {
      font-weight: 600;
    }
  }
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
const ProfilePictureContainer = styled.div`
    margin-top: -4.1rem;
  position: relative;
  display: flex;
  justify-content: center;
`
const ProfilePicDiv = styled.div`
  background: url("./../../../src/assets/wing/profile.jpg");
  background-size: cover;
  border: 3px solid white;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  cursor: pointer;
`
const ProfilePic = styled.img`
  
  border: 0;
  vertical-align: middle;
  background: url("./../../../src/assets/wing/profile.jpg");
  background-size: cover;

`
const RecivedContainer = styled.div`
  margin-top: -35px;
  color: rgb(79, 79, 79);
  cursor: default;
  display: flex;
  justify-content: space-around;
  & span{
    text-align: center;
    font-weight: 700;
    display: flex;
    justify-content: flex-end;
    margin-right: 60px;
    margin-left: 60px;  

  }
`
export const ProfileHeader = () => {
    const [isOpacity, setIsOpacity] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState('');

    // const handleMouseEnter = () =>{setIsOpacity(true)};
    const handleMouseLeave = () =>{setIsOpacity(false)};
    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        setBackgroundImage(URL.createObjectURL(file));
    };


    return (
        <Container>
            <HeaderProfile>
                <ProfileBG $backgroundImage={backgroundImage}>
                    <DropDownSection>
                        <DropDownBox $opacity={isOpacity}  onMouseLeave={handleMouseLeave}>

                            <DropDownConatiner >
                                <UploadSvg src={'./../../../../src/assets/wing/cloud.png'}></UploadSvg>
                                <label htmlFor="files" className="btn">Upload</label>
                                <input id="files" type="file" ref={inputRef} onChange={handleImageChange} />
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
                <ProfilePictureContainer>
                    <ProfilePicDiv>
                        <ProfilePic>

                        </ProfilePic>

                    </ProfilePicDiv>

                </ProfilePictureContainer>
                <RecivedContainer>
                    <span>Received</span>
                    <span></span>
                </RecivedContainer>

            </HeaderProfile>
        </Container>
    )
};
