import Validation from "../Authorization/Validation";
import {useEffect, useRef, useState} from "react";
import {Container, Header, Content, Footer} from "./modal.template"
import {FormButton} from "../Authorization/button.template";
import {emailValidation} from "../Authorization/AuthFunctions";

const Modal = ({handleClose}): null | JSX.Element => {

    const [recoverEmail, setRecoverEmail] = useState('')
    const [validationError, setValidationError] = useState('Email field cant be empty!')
    const [dirty, setDirty] = useState(false)
    const inputRef = useRef<HTMLInputElement>()

    const handleBlur = () => {
        setDirty(() => true)
    }

    useEffect(() => {
        const element = inputRef.current;
        const handleInput = (event) => {
            const {value} = event.target
            setRecoverEmail(value)
            if (!emailValidation(value)) {
                setValidationError("Wrong email format!")
            } else {
                setValidationError("")
            }
        }

        element.addEventListener('input', handleInput);
        element.addEventListener('blur', handleBlur)

        return () => {
            element.removeEventListener('input', handleInput);
        };
    }, [recoverEmail])



    return (
        <>
            <Container>
                <Header>
                    <h1>Recover Password</h1>
                </Header>
                <Content>
                    <label htmlFor="recoverEmail">Email</label>
                    <h3>Enter your email to get recover your password!</h3>
                    <input
                        ref={inputRef}
                        id="recoverEmail"
                    >
                    </input>
                    {(dirty && validationError) && <Validation>{validationError}</Validation>}
                </Content>
                <Footer>
                    <FormButton onClick={handleClose}>Submit</FormButton>
                    <FormButton onClick={handleClose}>Back</FormButton>
                </Footer>
            </Container>
        </>

    );
}

export default Modal
