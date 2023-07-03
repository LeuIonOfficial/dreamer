import './scss/login.scss'
import {useState, FormEvent} from "react";
import { useNavigate } from 'react-router-dom'
import AuthContainer from '../components/AuthContainer';



const SignupScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const navigate = useNavigate()
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        if (password === confirm) {
            console.log('submitted')
            await fetch('', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email,
                    password
                })
            })

            navigate('/login')

        } else {
            alert(`password don't match`)
        }
    }
    return (
        <AuthContainer>
            <form className="container" onSubmit={submitHandler}>
                <div className="intro">
                    <h1>Sign up</h1>
                </div>
                <div className="inputs">
                    <h3>Enter your email or password to get full access.</h3>
                    <div className="input">
                        <label htmlFor="email">Email address</label><br/>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            placeholder="Enter email"/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            type="password"
                            id="password"
                            placeholder="Password"/>
                    </div>
                    <div className="input">
                        <label htmlFor="confirm">Confirm password</label>
                        <input
                            value={confirm}
                            onChange={event => setConfirm(event.target.value)}
                            type="password"
                            id="confirm"
                            placeholder="Confirm password"/>
                    </div>
                    <div className="input">
                        <p><input type="checkbox"/> I accept <a href="#">Terms and Conditions</a></p>
                    </div>
                </div>
                <button className="btn">Sign up</button>
                <p className="join">Already have and account <a href="/login">Sign in</a></p>
            </form>
        </AuthContainer>
    )
}

export default SignupScreen