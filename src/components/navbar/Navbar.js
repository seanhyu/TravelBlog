import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

import {Link} from 'react-router-dom'

import {AiOutlineClose} from 'react-icons/ai'

import './NavbarStyles.css'

function Navbar() {
    const [nav,setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    return (
        <div name='home' className='navbar'>
            <div className='overlay'></div>
            <div className='logo'>
                <Link to='/'><h2>Wandering Sean </h2></Link>
            </div>
            <ul className='nav-menu'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/blog' ><li>Blog</li></Link>
                <Link to='/gear'><li>Gear</li></Link>
                <Link to='/finances'><li>Finances</li></Link>
                <Link to='/about'><li>About</li></Link>
            </ul>
            <div className='nav-icons'>
                <div className='social-icons'>
                    <Link to="https://www.instagram.com/seanhyu/?hl=en"><FaInstagram className='icon'/></Link>
                    <Link to="https://www.youtube.com/channel/UCVLm1eGW0MqHTdIcUP4cKyw"><FaYoutube className='icon'/></Link>
                    <Link to="https://www.linkedin.com/in/sean-yu-461b37183/"><FaLinkedin className='icon'/></Link>
                </div>
            </div>
            <div className='hamburger' onClick={handleNav}>
                {nav ? <AiOutlineClose className='icon' /> : <HiOutlineMenuAlt4 className='icon' />}
            </div>
            <div className={nav ? 'mobile-menu active' : "mobile-menu"}>
                <ul className='mobile-nav'>
                    <Link to='/' smooth={true} duration={500}><li>Home</li></Link>
                    <Link to='/blog' smooth={true} duration={500}><li>Blog</li></Link>
                    <Link to='/gear'><li>Gear</li></Link>
                    <Link to='/finances'><li>Finances</li></Link>
                    <Link to='/about'><li>About Me</li></Link> 
                </ul>
                <div className='mobile-menu-buttons'>
                    <div className='social-icons'>
                        <Link to="https://www.instagram.com/seanhyu/?hl=en"><FaInstagram className='icon'/></Link>
                        <Link to="https://www.youtube.com/channel/UCVLm1eGW0MqHTdIcUP4cKyw"><FaYoutube className='icon'/></Link>
                        <Link to="https://www.linkedin.com/in/sean-yu-461b37183/"><FaLinkedin className='icon'/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar