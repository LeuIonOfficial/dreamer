import './scss/login.scss'
import {FormEvent, useState} from 'react'
import AuthContainer from "../components/Authorization/AuthContainer";
import { useNavigate } from "react-router-dom";


const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const submitHandler = async (event: FormEvent) => {
        event.preventDefault()

        await fetch('', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password,
            })
        })
        console.log('submitted')

        navigate('/')

    }

    const toSignUp = () => {
        navigate('/signup')
    }


    return (
            <AuthContainer>
            <form className="container" onSubmit={submitHandler}>
                <div className="intro">
                    <h1>Sign in</h1>
                </div>
                <div className="inputs">
                    <h3>Enter your email or password to get full access.</h3>
                    <div className="input">
                        <label htmlFor="email">Email address</label><br/>
                        <input
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            type="email"
                            id="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="input">
                        <div className="input__password">
                            <label htmlFor="password">Password</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <input
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            type="password"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="input">
                        <p><input type="checkbox"/> Remember Me</p>
                    </div>
                </div>
                <button className="btn">Sign in</button>
                <p className="join">Don't have an account? <button onClick={toSignUp}>Sign up</button></p>
            </form>
            </AuthContainer>
    )
}

export default LoginScreen
