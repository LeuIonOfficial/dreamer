import {FormEvent, useEffect, useRef, useState} from 'react'
import AuthContainer from "../components/Authorization/AuthContainer";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Form from "../components/Authorization/Form";
import FormHeader from "../components/Authorization/FormHeader";
import FormContent from "../components/Authorization/FormContent";
import FormInput from "../components/Authorization/FormInput";
import Button from '../components/Authorization/Button';
import FormFooter from "../components/Authorization/FormFooter";
import Modal from "../components/Alerts/Modal";
import Validation from "../components/Authorization/Validation";
import {
    handleInputType,
    blurHandler,
    emailValidation, passwordValidationFunc
} from "../components/Authorization/AuthFunctions";


const LoginScreen = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [isOpen, setShowOpen] = useState(false)
    const [inputType, setInputType] = useState('password')
    const [passwordValidation, setPasswordValidation] = useState(false)
    const [dirty, setDirty] = useState({
        email: false,
        password: false,
        confirmPassword: false,
        recoverPassword: false,
    });

    const [validationError, setValidationError] = useState({
        email: "Email can't be empty",
        password: "Password can't be empty",
        confirmPassword: "Confirm password can't be empty!",
        recoverPassword: "Email can't be empty!"
    })

    const navigate = useNavigate()

    const {email, password} = userData

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
        if (!passwordValidationFunc(value)) {
            setValidationError((prev) => ({...prev, password: "Invalid password"}))
        } else {
            setValidationError((prev) => ({...prev, password: ""}))
        }
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault()

        axios.post('http://localhost:3000/sign-in', JSON.stringify({
                email: email,
                password: password
            }),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((response) => {
                const {token} = response.data;
                localStorage.setItem('token', token);
                navigate('/dashboard')
            })
            .catch((error) => {
                console.log(error);
                setPasswordValidation(true)
            });
        console.log('submitted')
    }

    const handleOpen = (e) => {
        e.preventDefault()
        setShowOpen(true)
    }

    const handleClose = (e) => {
        e.preventDefault()
        setShowOpen(false)
    }

    return (
        <AuthContainer>
            <Form onSubmit={event => submitHandler(event)}>
                <FormHeader>
                    <h1>Sign in</h1>
                </FormHeader>
                <FormContent>
                    <h3>Enter your email or password to get full access.</h3>
                    <FormInput>
                        <label htmlFor="email">Email address</label><br/>
                        <input
                            onBlur={(event) => blurHandler(event, setDirty)}
                            id="email"
                            value={email}
                            onChange={event => emailHandler(event, setValidationError, setUserData)}
                            type="email"
                            placeholder="Enter email"
                        />
                        {(dirty.email && validationError.email) && <Validation>{validationError.email}</Validation>}
                    </FormInput>
                    <FormInput>
                        <div className="input__password">
                            <label htmlFor="password">Password</label>
                            <span onClick={handleOpen}>Forgot password?</span>
                            {isOpen && <Modal handleClose={handleClose}/>}
                        </div>
                        <input
                            onBlur={event => blurHandler(event, setDirty)}
                            id="password"
                            value={password}
                            onChange={event => passwordHandler(event, setValidationError, setUserData)}
                            type={inputType}
                            placeholder="Password"
                        />
                        {(dirty.password && validationError.password) &&
                          <Validation>{validationError.password}</Validation>}

                        {passwordValidation &&
                          <Validation>The password or email you've entered is incorrect.</Validation>}
                    </FormInput>
                    <FormInput>
                        <p><input type="checkbox" onClick={() => handleInputType(setInputType)}/> Show password</p>
                    </FormInput>
                    <FormInput>
                        <p><input type="checkbox"/> Remember Me</p>
                    </FormInput>
                </FormContent>
                <Button>Sign in</Button>
                <FormFooter>
                    <span>Don't have an account ? </span>
                    <button onClick={() => navigate('/signup')}>Sign up</button>
                </FormFooter>
            </Form>
        </AuthContainer>
    )
}

export default LoginScreen
