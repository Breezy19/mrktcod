import React, { useState } from 'react';
import { auth } from '../Config/Config';
import { Link } from 'react-router-dom';
import '../Login.css'; 
import logo from '../images/ecommerceland.png'

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/');
        }).catch(err => setError(err.message));
    }

    return (
        <div className='login-container'>
            <div className='login-form'>
                <img className='logo' src={logo} alt="Logo" />
                <h2>Sign in</h2>
                <form autoComplete="off" onSubmit={login}>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className='remember-me'>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember password</label>
                    </div>
                    <button type="submit" className='login-btn'>LOGIN</button>
                </form>
                {error && <span className='error-msg'>{error}</span>}
                <span>Don't have an account? Register
                    <Link to="signup"> Here</Link>
                </span>
            </div>
        </div>
    );
};
