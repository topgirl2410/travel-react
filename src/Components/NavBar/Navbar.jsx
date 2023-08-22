import React, { useState } from 'react'
import './navbar.scss';
import { MdTravelExplore } from 'react-icons/md'
import { TbGridDots } from 'react-icons/tb'
import { AiFillCloseCircle } from 'react-icons/ai'
const Navbar = () => {
    const [active, setActive] = useState('navBar');
    // Function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    // Function to remove navBar
    const removeNav = () => {
        setActive('navBar')
    }


    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className="logoDiv">
                    <a href="./#" className='logo flex'><h1><MdTravelExplore className="icon" />Travel.</h1></a>
                </div>
                <div className={active}>
                    <ul className='navLists flex'>
                        <li className="navItem">
                            <a href="./" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="./" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="./" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="./" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="./" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="./" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                            <a href="./" className="navLink">Contact</a>
                        </li>

                        <button className='btn'>
                            <a href="./">BOOK NOW</a>
                        </button>
                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                        <a href="./#"><AiFillCloseCircle className='icon' /></a>
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <a href="./#" className='logo flex'><TbGridDots className="icon" /></a>

                </div>
            </header>
        </section>
    )
}


export default Navbar