import styled from "styled-components";
import Button from "../Authorization/Button";
import Validation from "../Authorization/Validation";
import {useEffect, useRef, useState} from "react";

const Modal = ({handleClose}): null | JSX.Element => {

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

    const [recoverEmail, setRecoverEmail] = useState('')

    // const ref = useRef(null)
    //
    // useEffect(() => {
    //     const handleInput = (event) => {
    //         setRecoverEmail(event.target.value)
    //         console.log(recoverEmail)
    //     }
    //     const element = ref.current;
    //
    //     element.addEventListener('change', handleInput);
    //
    //     return () => {
    //         element.removeEventListener('change', handleInput);
    //     };
    // }, [recoverEmail, setRecoverEmail])

    return (
        <>
            <Container>
                <Header>
                    <h1>Recover Password</h1>
                </Header>
                <Content>
                    <label htmlFor="recoverEmail">Email</label>
                    <h3>Enter your email to get recover your password!</h3>
                        <div
                            contentEditable={true}
                            onFocus={event => setRecoverEmail(event.target.textContent)}
                            id="recoverEmail"
                        >
                            {recoverEmail}
                        </div>


                    <Validation></Validation>
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