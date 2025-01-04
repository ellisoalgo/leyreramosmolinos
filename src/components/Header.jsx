import React from 'react'
import '../styles/Header.scss'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <img src="" alt="LRM logo" />
        <nav>
            <Link to="/"><span>Inicio</span></Link>
            <Link to="/sobre-mi"><span>Sobre mí</span></Link>
            <Link to="/contacto"><span>Contacto</span></Link>
            <a href='https://calendly.com/leyreramospsico'>Reserva tu cita</a>
        </nav>
    </header>
  )
}

export default Header