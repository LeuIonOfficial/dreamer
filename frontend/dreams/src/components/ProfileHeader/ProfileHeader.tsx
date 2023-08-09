import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import Draggable from 'react-draggable';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";


const Container = styled.div`
  max-width: 1300px;
  box-sizing: border-box;
  //margin: 0 304px 0 304px;
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
  width: 105px;
  min-height: 100px;

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
  width: auto;

  & input {
    visibility: hidden;
  }

  & label {
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

  &:hover {
    height: 19px;
    width: 19px;
  }
`
const ProfilePictureContainer = styled.div`
  margin-top: -4.1rem;
  position: relative;
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

const Image = styled.div`
  background-image: url(${({$backgroundImage}) => $backgroundImage || "./../../../src/assets/wing/Background5.67805aabb7dd9a06b946.png"});
  background-size: cover;
  position: absolute;
  top: 0;
  height: 100rem;
  width: 100rem;
  cursor: move;
`
const GoldLine = styled.div`
  background: none;
  border-width: 2px;
  border-bottom: 2px double transparent;
  border-image: linear-gradient(90deg, rgba(255, 193, 32, .1) .16%, #ffc120 48.95%, rgba(255, 193, 32, .06));
  border-image-slice: 2;
  margin-top: 4px;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;

  & div {
    background: none;
    border: 30px solid #ffc120;
    border-bottom-left-radius: 120px;
    border-bottom-right-radius: 120px;
    height: 70px;
    margin-top: 1px;
    width: 140px;
    position: absolute;
  }
`
const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0;
  margin: 10px 10px 0 10px;

  & h3 {
    font-weight: 700;
    font-size: 27px;
    color: rgb(63, 65, 77);
    margin: 0;
  }
`
const FulfilledContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  & span {
    font-weight: 700;
    font-size: 14px;
    color: #757575;
  }
`
const ChangesButtonContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 275px;
  z-index: 1001;
  display: flex;
  justify-content: flex-end;
  visibility: ${({ $visibility }) => ($visibility ? 'hidden' : 'visible')};
`
const EditButtonResizer = styled.div`
  background: linear-gradient(297.06deg,#f8ed84 23.88%,#f5e0ff 66.2%,#84fad5 109.31%);
  cursor: pointer;
  color: #262626;
  border-radius: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  height: 34px;
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CancelButtonResizer = styled.div`
  background: linear-gradient(#fff,#fff),linear-gradient(160deg,#84fad5 20%,#ebbfff 37%,#f6ec85 53%);
  background-clip: content-box,border-box!important;
  background-origin: border-box!important;
  border: 1px double transparent!important;
  border-radius: 8px;
  cursor: pointer;
  color: #262626;
  border-radius: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  height: 34px;
  width: 110px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProfileHeader = () => {
    const [isOpacity, setIsOpacity] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState('');
    const [coverImageHeight, setImageHeight] = useState(0);
    const coverImageRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);
    const [isDraggable, setIsDraggable] = useState(false);

    const handleResizeClick = () => {
        setIsDraggable(!isDraggable);
        setIsResizing(!isResizing);
    };
    // const handleMouseEnter = () =>{setIsOpacity(true)};
    const handleMouseLeave = () => {
        setIsOpacity(false)
    };
    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        setBackgroundImage(URL.createObjectURL(file));

    };
    useEffect(() => {
        if (coverImageRef.current) {
            setImageHeight(coverImageRef.current.clientHeight);
        }
    }, []);
    const handleSaveChangesClick = () => {
        setIsResizing(false);
        setIsDraggable(false);
    };

    return (
        <Container>
            <HeaderProfile>
                <ProfileBG>
                    <DropDownSection>
                        <DropDownBox $opacity={isOpacity} onMouseLeave={handleMouseLeave}>

                            <DropDownConatiner>
                                <UploadSvg src={'./../../../../src/assets/wing/cloud.png'}></UploadSvg>
                                <label htmlFor="files" className="btn">Upload</label>
                                <input id="files" type="file" ref={inputRef} onChange={handleImageChange}/>
                            </DropDownConatiner>

                            <DropDownConatiner>
                                <UploadSvg src={'./../../../../src/assets/wing/resize.png'}></UploadSvg>
                                <span onClick={handleResizeClick} >Resize</span>
                            </DropDownConatiner>
                            <DropDownConatiner>
                                <UploadSvg src={'./../../../../src/assets/wing/delete.png'}></UploadSvg>
                                <span>Delete</span>
                            </DropDownConatiner>
                        </DropDownBox>
                        <DDButton>
                            <ButtonImg
                                src={"./../../../../src/assets/wing/photo-camera-svgrepo-com.png"}></ButtonImg>
                            <EditButton $opacity={isOpacity} onClick={() => setIsOpacity(!isOpacity)}>Edit</EditButton>
                            <DropDonwArrow
                                src={"./../../../../src/assets/wing/drop-down-arrow.png"}></DropDonwArrow>

                        </DDButton>
                        {isResizing && (
                            <ChangesButtonContainer>
                                <EditButtonResizer onClick={handleSaveChangesClick} >Save Changes</EditButtonResizer>
                                <CancelButtonResizer onClick={handleSaveChangesClick} >Cancel</CancelButtonResizer>
                            </ChangesButtonContainer>
                        )}
                    </DropDownSection>
                    {isDraggable ? ( // Render the draggable component conditionally based on isDraggable state
                        <Draggable
                            axis="y"
                            position={null}
                            scale={1}
                            nodeRef={coverImageRef}
                            bounds={{
                                top: -`${coverImageHeight / 2}`,
                                bottom: 0,
                                left: 0,
                                right: 0,
                            }}>
                            <Image $backgroundImage={backgroundImage} ref={coverImageRef} ></Image>
                        </Draggable>
                    ) : (
                        <Image $backgroundImage={backgroundImage} ref={coverImageRef}></Image>
                    )}
                </ProfileBG>
                <GoldLine>
                    <div></div>
                </GoldLine>
                <ProfilePictureContainer>
                    <ProfilePicDiv>
                        <ProfilePic>

                        </ProfilePic>

                    </ProfilePicDiv>
                </ProfilePictureContainer>
                <NameContainer>
                    <h3>Holla Bonita</h3>
                </NameContainer>
                <FulfilledContainer>
                    <span>0 Fulfilled</span>
                </FulfilledContainer>

            </HeaderProfile>
        </Container>
    )
};
