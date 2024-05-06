import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

import './NavbarStyles.css'

function Navbar() {
    const [nav,setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    return (
        <div className={nav ? 'navbar navbar-menu' : 'navbar'}>
            <div className='logo'>
                <h2>Sean's Travel Blog </h2>
            </div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Gear</li>
                <li>Finances</li>
                <li>About Me</li>
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
                    <li>Home</li>
                    <li>Destinations</li>
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar