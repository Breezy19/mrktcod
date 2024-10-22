import React, { useEffect } from 'react'
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Products } from './Products'
import { ContactInfo } from './ContactInfo';
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'

export const Home = ({ user }) => {

    const history = useHistory();

    useEffect(() => {
        // forcing user to signup
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })

    return (
        <div className='wrapper'>
            <Navbar user={user} />
            <Products />
            <ContactInfo />
            <Footer />
        </div>
    )
}