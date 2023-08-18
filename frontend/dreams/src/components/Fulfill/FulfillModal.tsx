import styled from "styled-components";
// @ts-ignore
import React, {useState} from "react";
import PriceFulfill from "./PriceFulfill";
// @ts-ignore
import bgImage from './../../assets/images/priceBackground.16f0e13d391ea32b818b.jpg';
import {useEffect} from "react";
import axios from "axios";
import {errorNotify, successNotify} from "../../services/toast";
import {ToastContainer} from "react-toastify";


const ModalOpasti = styled.div`
 
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
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
  z-index: 3;
  @media (max-width: 425px) {
    //height: fit-content;
    height: auto;
  }
`

const ModalContent = styled.div`
  border-radius: 8px;
  padding: 40px;
  pointer-events: auto;
  width: 800px;
  background-image: url(${bgImage});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;

  & * {
    font-family: "Space Grotesk", sans-serif;
  }

  @media (max-width: 425px) {
    //height: fit-content;
    height: calc(100vh - 0px) !important;
    width: 320px;
  }
  @media (max-width: 926px) {
    width: 420px;
    //height: 100%;
    height: calc(100vh - 30px);
    display: flex;
    flex-direction: column;
    padding: 30px;
  }

`
const ContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 30px;
  @media (max-width: 926px) {
    //margin: auto;
    max-width: 420px;
    //flex-direction: column;
  }


  & h5 {
    color: #333;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    margin: 0 0 0 11.2px;
    @media (max-width: 425px) {
      margin: 0 0 0 11.2px;
    }
  }
`

const CloseModal = styled.button`
  cursor: pointer;
  height: 24px;
  width: 24px;
  display: contents;
  color: #777d74;
`

const BtnCloseModal = styled.div`
  margin: 0 0 10px;
`
const CardsBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 20px;
  pointer-events: auto;
  @media (max-width: 926px) {
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    display: inline-flex;
    justify-content: space-between;
  }
  @media (max-width: 428px) {
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    display: inline-flex;
    justify-content: space-between;
  }
`
const FulfillModal = ({closeModal}) => {
    const [token, setToken] = useState("")
    useEffect(() => {
        document.body.style.overflow = "hidden"
        const token = localStorage.getItem("token")
        setToken(() => token)

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [])

    const packages = [
        {
            pack: "Basic",
            price: 11,
            nrDreams: 10
        },
        {
            pack: "Standard",
            price: 110,
            nrDreams: 100
        },
        {
            pack: "Premium",
            price: 1100,
            nrDreams: 1000
        }
    ]


    const packageFulfill = (event, i) => {
        event.preventDefault()
        console.log(packages[i])
        try {
            axios.post('http://localhost:3000/post', JSON.stringify(packages[i]),
                {headers: {
                        "Content-Type": 'application/json',
                        "Authorization": token
                }})
                .then(response => {
                    successNotify(`Your account has been topped up with ${packages[i].nrDreams} dreams`)
                    console.log(response.data);

                })
                .catch(error => {
                    console.log(error)
                    // errorNotify(`Your account has been topped up with ${packages[i].nrDreams} dreams`)

                })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <ModalOpasti></ModalOpasti>
            <ModalFulfill>
                <ModalContent>
                    <ContentBlock>
                        <div>
                            <h5>Pricing</h5>
                        </div>
                        <BtnCloseModal>
                            <CloseModal onClick={closeModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
                                    <path fill="currentColor"
                                          d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12z"/>
                                    <path fill="currentColor"
                                          d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/>
                                </svg>
                            </CloseModal>
                        </BtnCloseModal>
                    </ContentBlock>
                    <CardsBlock>
                        {packages.map((elem, index) => {
                            return <PriceFulfill key={index} pack={elem.pack} price={elem.price}
                                                 nrDreams={elem.nrDreams}
                                                 packageFulfill={(event) => packageFulfill(event, index)}></PriceFulfill>
                        })}
                    </CardsBlock>
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

export default FulfillModal
