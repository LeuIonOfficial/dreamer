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
    const handleInputType = () => {
        setInputType(prev => prev === 'password' ? 'text' : 'password')
    }

    const emailHandler = (event) => {
        const {value} = event.target
        setUserData((prev) => ({...prev, email: value}))
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!validRegex.test(String(value).toLowerCase())) {
            setValidationError((prev) => ({...prev, email: "Invaild email"}));
        } else {
            setValidationError((prev) => ({...prev, email: ""}))
        }
    }

    const passwordHandler = (event) => {
        const {value} = event.target
        setUserData((prev) => ({...prev, password: value}))
        if (value.length < 4) {
            setValidationError((prev) => ({...prev, password: "Invalid password"}))
        } else {
            setValidationError((prev) => ({...prev, password: ''}))
        }
    }

    const confirmHandler = (event) => {
        const {value} = event.target
        setConfirm(() => value)
        if (value !== password) {
            setValidationError((prev) => ({...prev, confirmPassword: "Password doesnt match"}))
        } else {
            setValidationError((prev) => ({...prev, confirmPassword: ""}))
        }
    }

    const blurHandler = (event) => {
        const {id} = event.target
        switch (id) {
            case "email":
                setDirty((prevDirty) => ({...prevDirty, email: true}));
                break;
            case "password":
                setDirty((prevDirty) => ({...prevDirty, password: true}));
                break;
            case "confirm":
                setDirty((prevDirty) => ({...prevDirty, confirmPassword: true}))
        }
    }

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
                        {(dirty.email && validationError.email) && <Validation>{validationError.email}</Validation>}
                        <input
                            onBlur={event => blurHandler(event)}
                            value={email}
                            onChange={emailHandler}
                            type="text"
                            id="email"
                            placeholder="Enter email"/>
                    </FormInput>
                    <FormInput>
                        <label htmlFor="password">Password</label>
                        {(dirty.password && validationError.password) &&
                          <Validation>{validationError.password}</Validation>}
                        <input
                            onBlur={event => blurHandler(event)}
                            value={password}
                            onChange={passwordHandler}
                            type={inputType}
                            id="password"
                            placeholder="Password"/>
                    </FormInput>
                    <FormInput>
                        <label htmlFor="confirm">Confirm Password</label>
                        {(dirty.confirmPassword && validationError.confirmPassword) &&
                          <Validation>{validationError.confirmPassword}</Validation>}
                        <input
                            onBlur={event => blurHandler(event)}
                            value={confirm}
                            onChange={confirmHandler}
                            type={inputType}
                            id="confirm"
                            placeholder="password"/>
                    </FormInput>
                    <FormInput>
                        <p><input type="checkbox" onClick={handleInputType}/> Show password</p>
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