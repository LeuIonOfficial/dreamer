import {FormEvent, useState} from 'react'
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


const LoginScreen = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [isOpen, setShowOpen] = useState(false)
    const [inputType, setInputType] = useState('password')
    const [passwordValidation, setPasswordValidation] = useState(false)

    const navigate = useNavigate()

    const {email, password} = userData

    const handleInputType = () => {
        setInputType(prev => prev === 'password' ? 'text' : 'password')
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

    const handleInputChange = (event) => {
        const {id, value} = event.target
        setUserData({...userData, [id]: value})
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
                            id="email"
                            value={email}
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Enter email"
                        />
                    </FormInput>
                    <FormInput>
                        <div className="input__password">
                            <label htmlFor="password">Password</label>
                            <span onClick={handleOpen}>Forgot password?</span>
                            <Modal
                                isOpen={isOpen}
                                title='Recover password'
                                handleClose={handleClose}
                            >
                                <label htmlFor="recover">Email</label>
                                <h3>Enter your email to get recover your password!</h3>
                                <input type="text" id='recover'/>
                            </Modal>
                        </div>
                        <input
                            id="password"
                            value={password}
                            onChange={handleInputChange}
                            type={inputType}
                            placeholder="Password"
                        />
                        {passwordValidation && <p className='text-red-500'>The password or email you've entered is incorrect.</p>}
                    </FormInput>
                    <FormInput>
                        <p><input type="checkbox" onClick={handleInputType}/> Show password</p>
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
