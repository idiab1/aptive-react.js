import React, { useState } from 'react'
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <header>
        <nav class="navbar">
            <div className='logo'>
                <Link to='/'><img src={Logo} alt='Logo' /></Link>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Pricing</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>FAQ</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Contact</Link>
                </li>
            </ul>

            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes style={{color: '#fff'}}/>) : (<FaBars style={{color: '#fff'}}/>)}
            </div>

        </nav>
    </header>
  )
}

export default Navbar