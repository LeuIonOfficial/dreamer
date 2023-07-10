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


const SignupScreen = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [confirm, setConfirm] = useState('')
    const [inputType, setInputType] = useState('password')

    const {email, password} = userData
    const handleInputType = () => {
        setInputType(prev => prev === 'password' ? 'text' : 'password')
    }

    const handleInputValue = (event) => {
        const {id, value} = event.target
        console.log(id)
        setUserData({...userData, [id]: value})
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
                        <input
                            value={email}
                            onChange={handleInputValue}
                            type="text"
                            id="email"
                            placeholder="Enter email"/>
                    </FormInput>
                    <FormInput>
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={handleInputValue}
                            type={inputType}
                            id="password"
                            placeholder="Password"/>
                    </FormInput>
                    <FormInput>
                        <label htmlFor="confirm">Password</label>
                        <input
                            value={confirm}
                            onChange={event => setConfirm(event.target.value)}
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