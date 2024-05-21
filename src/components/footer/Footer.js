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
                        <Link to="https://www.instagram.com/seanhyu/?hl=en"><FaInstagram className='icon'/></Link>
                        <Link to="https://www.youtube.com/channel/UCVLm1eGW0MqHTdIcUP4cKyw"><FaYoutube className='icon'/></Link>
                        <Link to="https://www.linkedin.com/in/sean-yu-461b37183/"><FaLinkedin className='icon'/></Link>
                    </div>
                </div>
                <div className='bottom'>
                    <ul>
                        <Link to='/' ><li>Home</li></Link>
                        <Link to='/blog' ><li>Trips</li></Link>
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
