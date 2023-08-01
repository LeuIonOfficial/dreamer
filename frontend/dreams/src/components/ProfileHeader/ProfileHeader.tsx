import styled from "styled-components";
import { useRef, useState } from "react";
import Draggable from 'react-draggable';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";

const Container = styled.div`
  
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  @media (width: 1200px) {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (width: 992px) {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (width: 768px) {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (width: 576px) {
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
  }
`

const HeaderProfile = styled.div`
  width: 1300px;
  margin: 10px 20px 0 20px`

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
  z-index: 100;
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
  opacity: ${({ $opacity }) => ($opacity ? 1 : 0)};
  margin: 0 10px 5px 0;
  border-radius: 8px;
  width: 100px;
  max-height: 120px;
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
  
`
const SpanElement = styled.span`
  text-align: center;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
  margin-right: 60px;
`
const SpanElement2 = styled.span`
  text-align: center;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
  margin-left: 60px;
`

const Image = styled.img`
  background-image: url(${({ $backgroundImage }) => $backgroundImage || "./../../../src/assets/wing/Background5.67805aabb7dd9a06b946.png"});
  background-size: contain;
  position: absolute;
  top: 0;
  height: 100rem;
  width: 100%;
  cursor: move;
  
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
const Name = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 10px 10px 0 10px;

  & h3 {
  font-weight: 700;
    font-size: 28px;
    color: #3f414d;
    @media(width < 680px){
      font-size: 24px;

    }
  }
  
`
export const ProfileHeader = () => {
    const [isOpacity, setIsOpacity] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState('');
    const [isDraggable, setIsDraggable] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
    const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
    const draggableRef = useRef(null);

    const handleMouseLeave = () => {
        setIsOpacity(false);
    };

    const handleResizeClick = () => {
        setIsDraggable(!isDraggable);
        setIsResizing(!isResizing);
    };

    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        setBackgroundImage(URL.createObjectURL(file));
    };

    const customBounds = { bottom:0, top: -1000}

    const handleSaveChangesClick = () => {
        setIsResizing(false);
        setIsDraggable(false);
    };

    const handleCancelClick = () => {
        setIsDraggable(false);
        setIsResizing(false);
        setCurrentPosition({ x: initialPosition.x, y: initialPosition.y });
        if (draggableRef.current) {
            const node = draggableRef.current.node;
            node.style.transform = `translate(${initialPosition.x}px, ${initialPosition.y}px)`;
        }
    };

    const handleDragStop = (e, data) => {
        const { x, y } = data;
        setCurrentPosition({ x, y });
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
                                <input id="files" type="file" ref={inputRef} onChange={handleImageChange} />
                            </DropDownConatiner>

                            <DropDownConatiner>
                                <UploadSvg src={'./../../../../src/assets/wing/resize.png'}></UploadSvg>
                                <span onClick={handleResizeClick}>Resize</span>
                            </DropDownConatiner>
                            <DropDownConatiner>
                                <UploadSvg src={'./../../../../src/assets/wing/delete.png'}></UploadSvg>
                                <span>Delete</span>
                            </DropDownConatiner>
                        </DropDownBox>
                        <DDButton $opacity={isOpacity} onClick={() => setIsOpacity(!isOpacity)}>
                            <ButtonImg src={"./../../../../src/assets/wing/photo-camera-svgrepo-com.png"}></ButtonImg>
                            <EditButton>Edit</EditButton>
                            <DropDonwArrow src={"./../../../../src/assets/wing/drop-down-arrow.png"}></DropDonwArrow>
                        </DDButton>
                        {isResizing && (
                            <ChangesButtonContainer>
                                <EditButtonResizer onClick={handleSaveChangesClick}>Save Changes</EditButtonResizer>
                                <CancelButtonResizer onClick={handleCancelClick}>Cancel</CancelButtonResizer>
                            </ChangesButtonContainer>
                        )}
                    </DropDownSection>
                    {isDraggable ? ( // Render the draggable component conditionally based on isDraggable state
                        <Draggable
                            bounds={customBounds}
                            axis="y"
                            position={null}
                            grid={[25, 25]}
                            scale={1}
                            ref={draggableRef}
                            onStop={handleDragStop}>
                            <Image $backgroundImage={backgroundImage} ></Image>
                        </Draggable>
                    ) : (
                        <Image $backgroundImage={backgroundImage}></Image>
                    )}
                </ProfileBG>

                <ProfilePictureContainer>
                    <ProfilePicDiv>
                        <ProfilePic></ProfilePic>
                    </ProfilePicDiv>
                </ProfilePictureContainer>
                <RecivedContainer>
                    <SpanElement>Received</SpanElement>
                    <SpanElement2>Fulfilled</SpanElement2>
                </RecivedContainer>
                <Name>
                    <h3>Pedro Pascal</h3>
                </Name>
            </HeaderProfile>
        </Container>
    )
};
