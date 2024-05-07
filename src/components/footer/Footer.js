import React from 'react'
import './FooterStyles.css'
import {Link} from 'react-scroll'


import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='top'>
                    <h3>Stay Connected</h3>
                    <div className='social'>
                        <FaInstagram className='icon'/>
                        <FaYoutube className='icon'/>
                        <FaLinkedin className='icon'/>
                    </div>
                </div>
                <div className='bottom'>
                    <ul>
                        <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                        <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
                        <li>Gear</li>
                        <li>Finances</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
