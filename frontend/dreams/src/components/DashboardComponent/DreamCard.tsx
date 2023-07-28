import styled from "styled-components";
// @ts-ignore
import React, {useEffect, useState} from "react";
// @ts-ignore
import DreamCardIco from "../../assets/media/DreamCardIco.svg";
// @ts-ignore
import coverImg from "../../assets/media/coverImg.png";
// @ts-ignore
import noAvatar from "../../assets/media/noAvatar.png";
import SliderDashboard from "./SliderDashboard";

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

const DivProgress=styled.div`
  display: flex;
  overflow: hidden;
  --bs-progress-height: 10px;
  --bs-progress-font-size: 0.65625rem;
  --bs-progress-bg: #e9ecef;
  --bs-progress-border-radius: 5px;
  --bs-progress-box-shadow: inset 0 1px 2px rgba(0,0,0,.075);
  --bs-progress-bar-color: #fff;
  --bs-progress-bar-bg: #50b5ff;
  --bs-progress-bar-transition: width 0.6s ease;
  background-color: var(--bs-progress-bg);
  border-radius: var(--bs-progress-border-radius);
  font-size: var(--bs-progress-font-size);
  height: var(--bs-progress-height);
  &:hover{
    border: 1px solid #000;
  }
`
const DivProgressBar=styled.div`
  display: flex;
  overflow: hidden;
  background: linear-gradient(114.93deg,#84fad5 1.02%,#ebbfff 44.33%,#f6ec85 76.07%);
  color: var(--bs-progress-bar-color);
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition: var(--bs-progress-bar-transition);
  white-space: nowrap;
`
export const DreamCard = (props) => {
    return (
                    <div className="mb-[14px] px-[7px]">
                        <div className="relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                            <div className="flex">
                                <div className="relative overflow-hidden bg-cover bg-no-repeat w-full">
                                    <SliderDashboard imagine={props.imagine}/>
                                </div>
                            </div>
                            <div className="p-2 w-full h-[50%]">
                                <div className="user-detail">
                                    <div className="text-center">
                                        <div className="profile-detail">
                                            <div className="relative flex items-center flex-col mt-[-2.5rem]">
                                                <a href="#">
                                                    <div className="flex items-center justify-center bg-white h-[60px] leading-[3.75rem] rounded-full w-[61px]">
                                                        <img src={noAvatar} alt="profile-img" className="h-[55px] leading-[55px] w-[55px] align-middle rounded-[50rem] object-cover"/>
                                                    </div>
                                                </a>
                                                <div className="text-dark cursor-pointer w-[-webkit-fill-available]">
                                                    <SpanTitle>
                                                        TEST NAME
                                                    </SpanTitle>
                                                    <SpanItem className="leading-[1.25rem] h-[35px]">
                                                        {props.title}
                                                    </SpanItem>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="h-[30px] mb-[10px]">
                                                <div className="w-full flex justify-end">
                                                    <SpanProgress className="mr-[0.3125rem] decoration-black">
                                                        90%
                                                    </SpanProgress>
                                                </div>
                                                <DivProgress className="black-hover h-[10px] cursor-pointer">
                                                    <DivProgressBar role="progressbar" className="w-[90%]" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"/>
                                                </DivProgress>
                                            </div>
                                            <div className="flex justify-between my-2.5">
                                                <DivCustomGradient className="w-[65%] h-[36px]">
                                                    <DivButtonText>
                                                        <span>
                                                            Visit profile
                                                        </span>
                                                    </DivButtonText>
                                                </DivCustomGradient>
                                                <DivCustomGradient className="w-[30%] h-[36px]">
                                                    <img src={DreamCardIco} className="w-[24px] h-[24px]" alt=""/>
                                                </DivCustomGradient>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}
export default DreamCard