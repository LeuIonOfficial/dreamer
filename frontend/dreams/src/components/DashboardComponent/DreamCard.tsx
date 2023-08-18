import styled from "styled-components";
import React, {useState} from "react";
import DreamCardIco from "../../assets/media/DreamCardIco.svg";
import noAvatar from "../../assets/media/noAvatar.png";
import SliderDashboard from "./SliderDashboard";
import Button from "../Authorization/Button";
import {useNavigate} from "react-router-dom";
import {CommentModal} from "./Modal/CommentModal";
import {ProgresBarpx} from "./ProgresBar10px";

/*npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch*/

const DivCustomGradient=styled.div`
  background: linear-gradient(white, white), linear-gradient(160deg, rgb(132, 250, 213) 20%, rgb(235, 191, 255) 37%, rgb(246, 236, 133) 53%);
  border-radius: 8px;
  border: double 1px transparent !important;
  background-origin: border-box !important;
  background-clip: content-box, border-box !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  &:hover{
    background: linear-gradient(320deg, #F8ED84 23.88%, #F5E0FF 66.2%, #84FAD5 109.31%);
    border-radius: 8px;
  }
`
const DivButtonText=styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: black;
&:hover{
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 17px;
  color: #262626;
}
`
const SpanTitle=styled.span`
  font-family: Space Grotesk,serif;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  font-style: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`
const SpanItem=styled.span`
  font-family: Space Grotesk,serif;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  font-style: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`
const SpanProgress=styled.span`
  font-family: Space Grotesk,serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`
export const DreamCard = ({title, image}) => {
    const navigate = useNavigate()
    const [modal, setModal] = React.useState(false);
    const [received, setRecived] = useState(31);
    const [fulfilled, setFulfilled] = useState(40);
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = (event) => {
        event.preventDefault()
        setModal(true)
    }

    const closeModal = (event) => {
        event.preventDefault()
        setModal(false)
    }
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
    const progress = (received / fulfilled) * 100;
    const procentageVerifiction = () => {
        if (fulfilled < received) {
            return 100;
        } else {
            return Math.round((received / fulfilled) * 100)
        }
    };

    return (
        <>
            <div className="mb-[14px] px-[7px]">
                        <div className="relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                            <div className="flex">
                                <div className="relative overflow-hidden bg-cover bg-no-repeat w-full">
                                    <SliderDashboard image={image}/>
                                </div>
                            </div>
                            <div className="p-2 w-full h-[50%]">
                                <div className="user-detail">
                                    <div className="text-center">
                                        <div className="profile-detail">
                                            <div className="relative flex items-center flex-col mt-[-2.5rem]">
                                                    <a>
                                                    <div className="flex items-center justify-center bg-white h-[60px] leading-[3.75rem] rounded-full w-[61px]">
                                                        <img src={noAvatar} alt="profile-img" className="h-[55px] leading-[55px] w-[55px] align-middle rounded-[50rem] object-cover"/>
                                                    </div>
                                                    </a>
                                                <div className="text-dark cursor-pointer w-[-webkit-fill-available]">
                                                    <SpanTitle>
                                                        TEST NAME
                                                    </SpanTitle>
                                                    <SpanItem className="leading-[1.25rem] h-[35px]">
                                                        {title}
                                                    </SpanItem>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="h-[30px] mb-[10px]">
                                                <div className="w-full flex justify-end">
                                                    <SpanProgress className="mr-[0.3125rem] decoration-black">
                                                        {procentageVerifiction()}%
                                                    </SpanProgress>
                                                </div>
                                                <ProgresBarpx progress={progress} onClick={toggleModal} children={undefined}/>
                                            </div>
                                            <div className="flex justify-between my-2.5">
                                                <DivCustomGradient className="w-[65%] h-[36px]">
                                                    <DivButtonText onClick={() => navigate("/user-profile")}>
                                                        <span>
                                                            Visit profile
                                                        </span>
                                                    </DivButtonText>
                                                </DivCustomGradient>
                                                <Button className="w-[30%] h-[36px]" onClick={openModal}>
                                                        <img src={DreamCardIco} className="w-[24px] h-[24px]" alt=""/>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {modal && <CommentModal closeModal={closeModal} images={image} title={title} percent={procentageVerifiction()} progress={progress} toggleModal={toggleModal} />}
            </>
    )
}
export default DreamCard