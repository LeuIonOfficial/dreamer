import styled from "styled-components";
import Button from "../Authorization/Button";


const Modal = ({isOpen, title, children, handleClose}): null | JSX.Element => {

    const Container = styled.div`
      width: 250px;
      height: 250px;
      position: absolute;
      //top: 50%;
      left: 50%;
      z-index: 9999;
      transform: translate(-50%, -50%);
      background: #fff;
      box-shadow: 0 10px 15px rgba(179, 179, 179, 0.7);
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 35px 0;
      
      & h3 {
        color: #bdbdbd;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
      }
      
      @media (min-width: 768px) {
        width: 350px;
      }
    `

    const Header = styled.div`
      & h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: rgb(51, 51, 51);
        text-align: center;
      }
    `


    const Content = styled.div`
      padding: 20px;
      width: 100%;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: rgb(130, 130, 130);

      #recover {
        background: #fbfbfb;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        color: #bdbdbd;
        font-size: 14px;
        font-weight: 400;
        height: 40px;
        line-height: 16px;
        width: 100%;
        letter-spacing: normal;

        padding: 6px 12px;
        text-align: start;
        text-indent: 0;
        text-rendering: auto;
        text-shadow: none;
        text-size-adjust: 100%;
        text-transform: none;

        margin: 10px 0;
      }
      

    `

    const Footer = styled.div`
      display: flex;
      justify-content: center;
      margin: 0 20px;
      
      & button {
        color: black;
        margin: 0 15px;
      }
    `

    if (!isOpen) return null

    return (
        <>
            <Container>
                <Header>
                    <h1>{title}</h1>
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer>
                    <Button onClick={handleClose}>Submit</Button>
                    <Button onClick={handleClose}>Back</Button>
                </Footer>
            </Container>
        </>

    );
}

export default Modal