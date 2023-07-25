import styled from "styled-components";
import PriceFulfill from "./PriceFulfill";
// @ts-ignore
import bgImage from './../../assets/images/priceBackground.16f0e13d391ea32b818b.jpg';


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
  
  @media (max-width: 769px) {
    height: fit-content;
    z-index: 2001;
    //overflow: scroll;
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
    height: fit-content;
  }
  @media(max-width: 926px){
    width: 420px;
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
  @media(max-width: 926px){
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
    @media (max-width: 425px){
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
  @media (max-width: 926px){
    flex-direction: column;
    display: flex;
    align-items: center;
  }
`
const FulfillModal = ({closeModal}) => {


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
                    <PriceFulfill pack={"Basic"} price={11} nrDreams={10}></PriceFulfill>
                    <PriceFulfill pack={"Standard"} price={110} nrDreams={100}></PriceFulfill>
                    <PriceFulfill pack={"Premium"} price={1100} nrDreams={100}></PriceFulfill>
                </CardsBlock>
            </ModalContent>
        </ModalFulfill>
</>

    )
}

export default FulfillModal
