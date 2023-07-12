import {useState} from "react";
import {useNavigate} from 'react-router-dom'
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
    emailHandler,
    passwordHandler,
    blurHandler,
    emailValidation,
    confirmHandler,
    passwordValidationFunc,
    handleInputType
} from "../components/Authorization/AuthFunctions";


const SignupScreen = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [confirm, setConfirm] = useState('')
    const [inputType, setInputType] = useState('password')
    const [dirty, setDirty] = useState({
        email: false,
        password: false,
        confirmPassword: false,
    });

    const [validationError, setValidationError] = useState({
        email: "Email can't be empty",
        password: "Password can't be empty",
        confirmPassword: "Confirm password can't be empty!"
    })

    const {email, password} = userData
    const navigate = useNavigate()

    // @ts-ignore
    const makeReqToServer = async (event: FocusEvent) => {
        await event.preventDefault()
        if (password === confirm) {
            axios.post('http://localhost:3000/sign-up', JSON.stringify({
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
                    navigate('/login')
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <AuthContainer>
            <Form onSubmit={event => makeReqToServer(event)}>
                <FormHeader>
                    <h1>Sign up</h1>
                </FormHeader>
                <FormContent>
                    <h3>Enter your email or password to get full access.</h3>
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
                            value={confirm}
                            onChange={event => confirmHandler(event, setValidationError, setConfirm, password)}
                            type={inputType}
                            id="confirm"
                            placeholder="password"/>
                        {(dirty.confirmPassword && validationError.confirmPassword) &&
                          <Validation>{validationError.confirmPassword}</Validation>}
                    </FormInput>
                    <FormInput>
                        <p><input type="checkbox" onClick={() => handleInputType(setInputType)}/> Show password</p>
                    </FormInput>
                    <FormInput>
                        <p><input type="checkbox"/> I accept <a href="#">Terms and Conditions</a></p>
                    </FormInput>
                </FormContent>
                <Button onClick={event => makeReqToServer(event)}>Sign up</Button>
                <FormFooter>
                    <span>Already have an account ? </span>
                    <button onClick={() => navigate('/login')}>
                        Sign In
                    </button>
                </FormFooter>
            </Form>
        </AuthContainer>
    )
}

// @ts-ignore
export default SignupScreen