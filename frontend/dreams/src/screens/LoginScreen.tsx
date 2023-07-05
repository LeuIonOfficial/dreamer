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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [inputType, setInputType] = useState('password')

    const handleInputType = () => {
        if (inputType === 'password') {
            setInputType('text')
        }
        if (inputType === 'text') {
            setInputType('password')
        }
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const submitHandler = async (event: FormEvent) => {
        event.preventDefault()

        await axios.post('http://localhost:3000/sign-up', JSON.stringify({
            email,
            password
        }))
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log('submitted')

        navigate('/')

    }

    const [isOpen, setShowOpen] = useState(false)

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
            <Form onSubmit={event => submitHandler(event)} className='m-10'>
                <FormHeader>
                    <h1>Sign in</h1>
                </FormHeader>
                <FormContent>
                    <h3>Enter your email or password to get full access.</h3>
                    <FormInput>
                        <label htmlFor="email">Email address</label><br/>
                        <input
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            type="email"
                            id="email"
                            placeholder="Enter email"
                        />
                    </FormInput>
                    <FormInput>
                        <div className="input__password">
                            <label htmlFor="password">Password</label>
                            <button onClick={handleOpen}>Forgot password?</button>
                            <Modal 
                                isOpen={isOpen} 
                                title='Recover password'
                                handleClose={handleClose}
                            >
                                <label htmlFor="recover">Email</label>
                                <input type="text" id='recover'/>
                            </Modal>
                        </div>
                        <input
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            type={inputType}
                            id="password"
                            placeholder="Password"
                        />
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
