import React, { useState, useRef } from 'react'
import '../styles/var.scss'
import '../styles/Header.scss'
import { Link } from "react-router-dom";
import Menu from '../images/menu.svg';
import LogoXsBlack from '../images/logo-black-xs.svg'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import HamburgerAnimation from '../images/Animation - 1736001391910.json'


function Header() {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lottieRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);

    // if (!isMenuOpen) {
    //   lottieRef.current.play();
    // } else {
    //   lottieRef.current.playSegments([lottieRef.current.totalFrames, 0], true);
    // }
  };

  return (
    <header className='header'>
        <img src={LogoXsBlack} alt="LRM logo" className='header-logo'/>
        <nav className='header-nav'>
            <button className='header-nav_hamburger' onClick={toggleMenu}>
              <img src={Menu} alt="" className='header-nav_hamburger_icon'/>
            </button>
            {/* <DotLottieReact 
              src={HamburgerAnimation}  // Add the correct Lottie file URL
              autoplay={false}  // Set autoplay to false so we can control playback
              loop={false}  // Prevent looping
              ref={lottieRef}  // Connect the reference to the component
              onClick={toggleMenu}  // Add onClick event to trigger the menu toggle
            /> */}
            <div className={`menu ${isMenuOpen ? "active" : ""}`}>
              <ul className='menu_list'>
                <li>
                  <button className='menu_list-btn'>
                    <Link to="/">Inicio</Link>
                  </button>
                </li>
                <li>
                  <button className='menu_list-btn'>
                    <Link to="/sobre-mi">Sobre mí</Link>
                  </button>
                </li>
                <li>
                  <button className='menu_list-btn'>
                    <Link to="/contacto">Contacto</Link>
                  </button>
                </li>
              </ul>
              <button className='reserva'><a href='https://calendly.com/leyreramospsico'>Reserva tu cita</a></button>
            </div>
        </nav>
    </header>
  )
}

export default Header