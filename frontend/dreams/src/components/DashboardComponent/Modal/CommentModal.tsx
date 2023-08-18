import styled from "styled-components";
import React, {useState} from "react";
import {useEffect} from "react";
import {ToastContainer} from "react-toastify";
import {SliderModal} from "./SliderModal";
import noAvatar from "../../../assets/media/noAvatar.png";
import {useNavigate} from "react-router-dom";
import Comments from "./Comments/Comments";
import {ProgresBarpx} from "../ProgresBar10px";


const ModalOpasti = styled.div`
  --bs-backdrop-zindex: 1040;
  --bs-backdrop-bg: #000;
  --bs-backdrop-opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2000;
`
const ModalFulfill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2001;
  @media (max-width: 991px) {
    height: auto;
    top: 6%;
    padding: 5px;
  }
`

const ModalContent = styled.div`
  position: relative;
  border-radius: 8px;
  pointer-events: auto;
  background-color: #ffffff;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;

  & * {
    font-family: "Space Grotesk", sans-serif;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 800px;
  }
  @media (min-width: 576px)  and (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
    max-width: var(--bs-modal-width);
}
`

const CloseModal = styled.button`
  cursor: pointer;
  height: 24px;
  width: 24px;
  display: contents;
  color: #777d74;
`

const DivCustomGradient=styled.div`
  background: linear-gradient(white, white), linear-gradient(160deg, rgb(132, 250, 213) 20%, rgb(235, 191, 255) 37%, rgb(246, 236, 133) 53%);
  border-radius: 8px;
  border: double 1px transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  &:hover{
    background: linear-gradient(320deg, #F8ED84 23.88%, #F5E0FF 66.2%, #84FAD5 109.31%);
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #262626;
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
  font-size: 14px;
  line-height: 17px;
  color: #262626;
}
`
const SpanProgress=styled.span`
  font-family: Space Grotesk,serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`

export const CommentModal = ({closeModal, images, title, percent, progress, toggleModal}) => {
    const [token, setToken] = useState("")
    console.log(token);
    useEffect(() => {
        document.body.style.overflow = "hidden"
        const token = localStorage.getItem("token")
        setToken(() => token)

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [])

    const navigate = useNavigate()
    return (
        <>
            <ModalOpasti></ModalOpasti>
            <ModalFulfill>
                <ModalContent>
                    <div id="btn-close" className="absolute right-0 top-[-5%]">
                        <CloseModal onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
                                <path fill="#ffffff"
                                      d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12z"/>
                                <path fill="#ffffff"
                                      d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/>
                            </svg>
                        </CloseModal>
                    </div>
                    <section className="overflow-hidden rounded-lg md:grid md:grid-cols-3">
                        <div className="md:col-span-2">
                            <SliderModal images={images} />
                        </div>
                        <div className="flex flex-col min-w-full justify-between shadow-[-10px_0_10px_-1px_rgba(180,183,196,0.2)]">
                            <div className="flex flex-col w-full p-0 m-0 justify-between max-h-[777px]">
                                <div className="border-b border-solid border-neutral-200 rounded-tr-[10px] pl-2.5 pb-2.5 pr-5 pt-1.5">
                                    <div className="flex justify-between items-center mb-5 pt-1.5 ">
                                        <div className="flex items-center">
                                            <a>
                                                <div className="flex items-center justify-center bg-white h-[60px] leading-[3.75rem] rounded-full w-[61px]">
                                                    <img src={noAvatar} alt="profile-img" className="h-[55px] leading-[55px] w-[55px] align-middle rounded-[50rem] object-cover"/>
                                                </div>
                                            </a>
                                            <h6 className="ml-2.5 text-[16px] font-bold	leading-normal	text-[#333]">TEST TEST</h6>
                                        </div>
                                        <DivCustomGradient className="w-[84px] h-[34px]">
                                            <DivButtonText onClick={() => navigate("/user-profile")}>
                                                        <span>
                                                            Visit profile
                                                        </span>
                                            </DivButtonText>
                                        </DivCustomGradient>
                                    </div>
                                    <span className="flex h-auto items-center text-[#333] text-[15px] font-bold leading-[25px]">{title}</span>
                                    <div className="h-[30px] mb-[10px] w-full">
                                        <div className="w-full flex justify-end">
                                            <SpanProgress className="mr-[0.3125rem] decoration-black">
                                                {percent}%
                                            </SpanProgress>
                                        </div>
                                        <ProgresBarpx progress={progress} onClick={toggleModal} children={undefined}/>
                                    </div>
                                </div>
                                <Comments commentsUrl="http://localhost:3004/comments"
                                          currentUserId="1"/>
                            </div>
                        </div>
                    </section>
                </ModalContent>
            </ModalFulfill>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
        </>

    )
}
