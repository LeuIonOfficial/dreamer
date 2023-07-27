import {useState} from "react";
import {Outlet, useNavigate} from 'react-router-dom'
import axios from 'axios'
import AuthContainer from "../components/Authorization/AuthContainer";
import Alert from "../components/Alerts/Modal";
import Modal from "../components/Alerts/Modal";
import Form from "../components/Authorization/Form";
import FormHeader from "../components/Authorization/FormHeader";
import FormContent from "../components/Authorization/FormContent";
import FormInput from "../components/Authorization/FormInput";
import Button from '../components/Authorization/Button';
import FormFooter from "../components/Authorization/FormFooter";
import Validation from "../components/Authorization/Validation";
import {
    blurHandler,
    emailValidation,
    confirmHandler,
    passwordValidationFunc,
    handleInputType
} from "../components/Authorization/AuthFunctions";
import {toast, ToastContainer} from "react-toastify";
import {errorNotify, successNotify} from "../services/toast";


const SignupScreen = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [confirmState, setConfirmState] = useState({
        password: '',
    })
    const [inputType, setInputType] = useState('password')
    const [dirty, setDirty] = useState({
        email: false,
        password: false,
        confirmPassword: false,
        terms: false,
    });

    const [validationError, setValidationError] = useState({
        email: "Email field can't be empty",
        password: "Password filed can't be empty",
        confirmPassword: "Confirm password filed can't be empty!"
    })

    const {email, password} = userData
    const navigate = useNavigate()

    const emailHandler = (event, setValidationError, setUserData?) => {
        event.preventDefault()
        const {value} = event.target
        if (setUserData) setUserData((prev) => ({...prev, email: value}))
        if (!emailValidation(value)) {
            setValidationError(prev => ({...prev, email: "Invalid email"}))
        } else {
            setValidationError(prev => ({...prev, email: ""}))
        }
    }

    const passwordHandler = (event, setValidationError, setUserData?) => {
        const {value} = event.target
        if (setUserData) setUserData((prev) => ({...prev, password: value}))
        if (value.length < 8) {
            setValidationError((prev) => ({...prev, password: "Password must be atleast 8 characters long."}))
        } else if (!/[A-Z]/.test(value)) {
            setValidationError((prev) => ({...prev, password: "Password must contain at least one uppercase letter."}))
        } else if (!/[a-z]/.test(value)) {
            setValidationError((prev) => ({...prev, password: "Password must contain at leat un lowercase letter."}))
        } else if (!/\d/.test(value)) {
            setValidationError((prev) => ({...prev, password: "Password must contain at least one digit."}))
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            setValidationError((prev) => ({...prev, password: "Password must contain at least one special character."}))
        } else {
            setValidationError((prev) => ({...prev, password: ""}))
        }
    }

    const handleConfirmTerms = (event) => {
        event.preventDefault()
        setDirty(prevState => ({...prevState, terms: !prevState.terms}))
    }


    // @ts-ignore
    const makeReqToServer = async (event: FocusEvent) => {
        event.preventDefault()
        if (!(userData.password)) {
            setDirty(prevState => ({...prevState, password: true}))
        }
        if (!(userData.email)) {
            setDirty(prevState => ({...prevState, email: true}))
        }
        if (!(confirmState.password)) {
            setDirty(prevState => ({...prevState, confirmPassword: true}))
        }
        if (dirty.terms === false) {
            errorNotify("Please accept the terms and conditions to register")
        }


        if ((!(validationError.email) && !(validationError.password) && !(validationError.confirmPassword) && (dirty.terms === true))) {
            axios.post('http://localhost:3000/sign-up', JSON.stringify(userData),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then((response) => {
                    successNotify("You have successfully registered! Please, sign-in")
                })
                .catch((error) => {
                    if (error.response.status === 409) {
                        errorNotify("User with this email already exists!")
                    }
                    console.log(error.response)
                });
        } else {
            errorNotify("Registration failed!")
        }
    };

    return (
        <AuthContainer>
            <Form onSubmit={event => makeReqToServer(event)}>
                <FormHeader>
                    <h1>Sign up</h1>
                    <h3>Enter your email or password to get full access.</h3>
                </FormHeader>
                <FormContent>
                    <FormInput>
                        <label htmlFor="email">Email address</label><br/>
                        <input
                            onBlur={event => blurHandler(event, setDirty)}
                            value={email}
                            onChange={event => emailHandler(event, setValidationError, setUserData)}
                            type="text"
                            id="email"
                            placeholder="Enter email"/>
                        {(dirty.email && validationError.email) && <Validation>{validationError.email}</Validation>}
                    </FormInput>
                    <FormInput>
                        <label htmlFor="password">Password</label>
                        <input
                            onBlur={event => blurHandler(event, setDirty)}
                            value={password}
                            onInput={event => passwordHandler(event, setValidationError, setUserData)}
                            type={inputType}
                            id="password"
                            placeholder="Password"/>
                        {(dirty.password && validationError.password) &&
                          <Validation>{validationError.password}</Validation>}
                    </FormInput>
                    <FormInput>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input
                            onBlur={event => blurHandler(event, setDirty)}
                            value={confirmState.password}
                            onChange={event => confirmHandler(event, setValidationError, setConfirmState, password)}
                            type={inputType}
                            id="confirm"
                            placeholder="Confirm password"/>
                        {(dirty.confirmPassword && validationError.confirmPassword) &&
                          <Validation>{validationError.confirmPassword}</Validation>}
                    </FormInput>
                    <FormInput>
                        <p><input type="checkbox" onClick={() => handleInputType(setInputType)}/> Show password</p>
                    </FormInput>
                    <FormInput>
                        <p><input type="checkbox" id="terms" onInput={handleConfirmTerms}/> I accept <a href="#">Terms
                            and Conditions</a></p>
                    </FormInput>
                </FormContent>
                <FormFooter>
                    <Button id="btn" onClick={event => makeReqToServer(event)}>Sign up</Button>
                    <div id="text">
                        <span>Already have an account ? </span>
                        <button onClick={() => navigate('/login')}>
                            Sign In
                        </button>
                    </div>
                </FormFooter>
            </Form>
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
        </AuthContainer>
    )
}

// @ts-ignore
export default SignupScreen