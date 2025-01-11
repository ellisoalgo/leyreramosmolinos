import React, {useState} from 'react'
import "../styles/Terminos.scss";
import Cta from './Cta.jsx'
import { Link } from "react-router-dom";
import "../styles/Terminos.scss"
import PoliticaXs from '../images/politica_xs.svg'
import CookiesXs from '../images/cookies_xs.svg'
import AvisoXs from '../images/aviso_xs.svg'

function Terminos() {

    const [activeLink, setActiveLink] = useState("text1");

    const handleLinkClick = (target) => {
        setActiveLink(target);
    };
    
  return (
    <>
        <section className='terminos'>
            <h1 className='terminos_h1'>Términos Legales y Privacidad</h1>
            <div className='terminos_group'>
                <Link to="/terminos-legales-privacidad" className='terminos_group_gr'>
                    <img src={PoliticaXs} alt="" className='terminos_group_gr-img'/>
                    <h3 className='terminos_group_gr-h3'>Política de Privacidad</h3>
                </Link>
            </div>
            <div className='terminos_group'>
                <Link to="/aviso-legal" className='terminos_group_gr'>
                    <img src={AvisoXs} alt="" className='terminos_group_gr-img'/>
                    <h3 className='terminos_group_gr-h3'>Aviso legal</h3>
                </Link>
            </div>
            <div className='terminos_group'>
                <Link to="/cookies" className='terminos_group_gr'>
                    <img src={CookiesXs} alt="" className='terminos_group_gr-img'/>
                    <h3 className='terminos_group_gr-h3'>Política de Cookies</h3>
                </Link>
            </div>
        </section>
    </>
  )
}

export default Terminos