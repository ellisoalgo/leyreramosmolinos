import React, { useState, useEffect } from 'react'
import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import LogoWhiteXs from '../images/logo-white-xs.svg'
import LogoWhiteXl from '../images/logo-white-xl.svg'
import Linkedin from '../images/LinkedIn.svg'
import Instagram from '../images/Instagram.svg'

function Footer() {

    const [isWideScreen, setIsWideScreen] = useState(false)

    useEffect(() => {
        const checkScreenWidth = () => {
          setIsWideScreen(window.innerWidth > 767)
        }
    
        // Check on initial render
        checkScreenWidth()
    
        // Add event listener for window resize
        window.addEventListener("resize", checkScreenWidth)
    
        // Cleanup
        return () => window.removeEventListener("resize", checkScreenWidth)
    }, [])


  return (
    <footer className='footer'>
        <div className='footer-info'>
            <div className='footer-info_gr'>
                <Link to="/" className={`${isWideScreen ? "hidden" : ""}`}><img src={LogoWhiteXs} alt="logo LRM pscioterapeuta" className={`footer-info_gr-logo ${isWideScreen ? "hidden" : ""}`}/></Link>
                <Link to="/" className={`${isWideScreen ? "" : "hidden"}`}><img src={LogoWhiteXl} alt="logo LRM pscioterapeuta" className={`footer-info_gr-logo2 ${isWideScreen ? "" : "hidden"}`}/></Link>
                <div className='footer-info_gr-add'>
                    <p className='footer-info_gr-add_title'>
                        Dirección
                    </p>
                    <div className='footer-info_gr-add_links'>
                        <ul>
                            <li>
                                <a href="https://maps.app.goo.gl/SZDsLjan8uCMw6q86" className='footer-info_gr-add_links-address' target="_blank">
                                    Carrer de Casp 172, 2º A, <br/>
                                    08008 Barcelona, España.
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hola@leyreramos.com" className='footer-info_gr-add_links-email' target="_blank">
                                    hola@leyreramos.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:0034614278073" className='footer-info_gr-add_links-phone' target="_blank">
                                    614 278 073
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-info-nav'>
                <p className='footer-info-nav_title'>Secciones</p>
                <ul className='footer-info-nav_list'>
                    <li className='footer-info-nav_list-item'><Link to="/">Inicio</Link></li>
                    <li className='footer-info-nav_list-item'><Link to="/sobre-mi">Sobre mí</Link></li>
                    <li className='footer-info-nav_list-item'><Link to="/contacto">Contacto</Link></li>
                    <li className='footer-info-nav_list-item'><a href="https://calendly.com/leyreramospsico" target="_blank">Reserva tu cita</a></li>
                    <li className='footer-info-nav_list-item'><Link to="/terminos-legales-privacidad">Términos Legales y Privacidad</Link></li>
                </ul>
            </div>
        </div>
        <div className='footer-socials'>
            <div className='footer-socials_socials'>
                <p className='footer-socials_title'>Leyre Ramos Molinos | Psicóloga clínica | 2025</p>
                <div className='footer-socials_icons'>
                    <a href="https://www.instagram.com/leyreramospsico/" className='footer-socials_icons-icon_insta' target='_blank'>
                        <div className='footer-socials_icons-icon'>
                            <img src={Instagram} alt="insta" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/leyre-ramos-molinos-2b2733116/"  className='footer-socials_icons-icon_linkedin' target="_blank">
                        <div className='footer-socials_icons-icon'>
                            <img src={Linkedin} alt="linkedin logo" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer