import React from 'react'
import './FooterStyles.css'
import {Link} from 'react-router-dom'


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
                        <Link to='/' ><li>Home</li></Link>
                        <Link to='/destinations' ><li>Destinations</li></Link>
                        <Link to='/gear' ><li>Gear</li></Link>
                        <Link to='/finances' ><li>Finances</li></Link>
                        <Link to='/contact' ><li>Contact</li></Link>
                        <Link to='/about' ><li>About</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
