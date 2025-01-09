import React, { useState, useRef } from 'react'
import '../styles/var.scss'
import '../styles/Header.scss'
import { Link } from "react-router-dom";
import Menu from '../images/menu.svg';
import Close from '../images/close.svg'
import LogoXsBlack from '../images/logo-black-xs.svg'

function Header() {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lottieRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='header'>
        <Link to='/'><img src={LogoXsBlack} alt="LRM logo" className='header-logo'/></Link>
        <nav className='header-nav'>
            <button className='header-nav_hamburger' onClick={toggleMenu}>
              <img src={isMenuOpen ? Close : Menu} alt="" className='header-nav_hamburger_icon'/>
            </button>
            <div className={`menu ${isMenuOpen ? "active" : ""}`}>
              <ul className='menu_list'>
                <li>
                  <button className='menu_list-btn' onClick={closeMenu}>
                    <Link to="/">Inicio</Link>
                  </button>
                </li>
                <li>
                  <button className='menu_list-btn' onClick={closeMenu}>
                    <Link to="/sobre-mi">Sobre mí</Link>
                  </button>
                </li>
                <li>
                  <button className='menu_list-btn' onClick={closeMenu}>
                    <Link to="/contacto">Contacto</Link>
                  </button>
                </li>
              </ul>
              <button className='reservar'><a href='https://calendly.com/leyreramospsico' target="_blank">Reserva tu cita</a></button>
            </div>
        </nav>
    </header>
  )
}

export default Header