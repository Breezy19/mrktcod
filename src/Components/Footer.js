import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer style={{backgroundColor: '#f8f9fa', padding: '10px', width: '100%', bottom: '0'}}>
            <h3 style={{textAlign: 'center'}}>Follow Us :</h3>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px'}}>
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px'}}>
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px'}}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
            <div style={{padding: '10px 0'}}>
                <hr style={{borderTop: '1px solid #000', width: '80%', margin: '0 auto'}} />
            </div>
            <p style={{textAlign: 'center'}}>© 2024 CODMARKT</p>
        </footer>
    );
}

export default Footer;