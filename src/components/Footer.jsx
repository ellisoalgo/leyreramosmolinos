import React from 'react'
import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import LogoWhiteXs from '../images/logo-white-xs.svg'
import Linkedin from '../images/LinkedIn.svg'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <img src={LogoWhiteXs} alt="logo LRM pscioterapeuta" className='footer-info-logo'/>
            <div className='footer-info-add'>
                <p className='footer-info-add_title'>
                    Dirección
                </p>
                <div className='footer-info-add_links'>
                    <ul>
                        <li>
                            <a href="" className='footer-info-add_links-address' target="_blank">
                                Carrer de Casp 172, 2º A,
                                08008 Barcelona, España.
                            </a>
                        </li>
                        <li>
                            <a href="mailto:psicoterapeutaleyre@outlook.com" className='footer-info-add_links-email' target="_blank">
                                psicoterapeutaleyre@outlook.com
                            </a>
                        </li>
                        <li>
                            <a href="" className='footer-info-add_links-phone' target="_blank">
                                614 278 073
                            </a>
                        </li>
                    </ul>
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
            <p className='footer-socials_title'>Leyre Ramos Molinos | Psicóloga clínica | 2024</p>
            {/* <a href="" className='footer-socials_insta'>
                <img src="" alt="instagram logo" />
            </a> */}
            <div className='footer-socials_icon'>
                <a href=""  className='footer-socials_icon_linkedin' target="_blank">
                    <img src={Linkedin} alt="linkedin logo" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer