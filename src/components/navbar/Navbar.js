import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

import {Link} from 'react-scroll'

import {AiOutlineClose} from 'react-icons/ai'

import './NavbarStyles.css'

function Navbar() {
    const [nav,setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    return (
        <div name='home' className={nav ? 'navbar navbar-menu' : 'navbar'}>
            <div className='logo'>
                <h2>Sean's Travel Blog </h2>
            </div>
            <ul className='nav-menu'>
                <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
                <Link to=''><li>Gear</li></Link>
                <Link to=''><li>Finances</li></Link>
                <Link to=''><li>About</li></Link>
            </ul>
            <div className='nav-icons'>
                <BiSearch className='icon' style={{marginRight: "1rem"}}/>
                <BsPerson className='icon' />
            </div>
            <div className='hamburger' onClick={handleNav}>
                {nav ? <AiOutlineClose className='icon' /> : <HiOutlineMenuAlt4 className='icon' />}
            </div>
            <div className={nav ? 'mobile-menu active' : "mobile-menu"}>
                <ul className='mobile-nav'>
                    <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                    <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
                    <li>Gear</li>
                    <li>Finances</li>
                    <li>About Me</li> 
                </ul>
                <div className='mobile-menu-buttons'>
                    <div className='menu-icons'>
                        <button >Search</button>
                    </div>
                    <div className='social-icons'>
                        <FaInstagram className='icon'/>
                        <FaYoutube className='icon'/>
                        <FaLinkedin className='icon'/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar