import React, { useState } from 'react';
import { auth, db } from '../Config/Config';
import { Link, useHistory } from 'react-router-dom';
import '../Signup.css';
import logo from '../images/ecommerceland.png'

export const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                history.push('/login');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }

    return (
        <div className='signup-container'>
            <form className='signup-form' onSubmit={signup}>
                <img className='logo' src={logo} alt="Logo" />
                <h2>Sign up</h2>
                {error && <span className='error-msg'>{error}</span>}
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required onChange={(e) => setName(e.target.value)} value={name} />
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required onChange={(e) => setEmail(e.target.value)} value={email} />
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
                
                <button type="submit" className='btn-submit'>SUBMIT</button>
                
                <span>Already have an account? Login <Link to="/login">Here</Link></span>
            </form>
        </div>
    )
}
