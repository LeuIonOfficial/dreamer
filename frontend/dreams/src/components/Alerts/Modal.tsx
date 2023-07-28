import Validation from "../Authorization/Validation";
import {useEffect, useRef, useState} from "react";
import {Container, Header, Content, Footer} from "./modal.template"
import {FormButton} from "../Authorization/button.template";
import {emailValidation} from "../Authorization/AuthFunctions";
import axios from "axios";
import {errorNotify, successNotify} from "../../services/toast";
import {ToastContainer} from "react-toastify";

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


    const handleRecover = (event) => {
        event.preventDefault()
        try {
            if (!(recoverEmail.length === 0) && !validationError) {
                axios
                    .patch('http://localhost:3000/recover', {
                        email: recoverEmail
                    })
                    .then(() => {
                        successNotify("Please check your email to proceed to recover password.")
                    })
                    .catch((error) => {
                        console.log('Error: ', error)
                        errorNotify("Server error");
                    });
            } else {
                setDirty(true)
                errorNotify("Recover password failed")
            }

        } catch (e) {
            console.log(e)
            errorNotify("Server is off.")
        }
    }


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
                    <FormButton onClick={handleRecover}>Submit</FormButton>
                    <FormButton onClick={handleClose}>Back</FormButton>
                </Footer>
            </Container>
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

export default Modal
