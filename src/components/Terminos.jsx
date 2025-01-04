import React from 'react'
import "../styles/Terminos.scss";
import Cta from './Cta.jsx'
import { Link } from "react-router-dom";
import "../styles/Terminos.scss"

function Terminos() {
  return (
    <>
        <section>
            <h2>Términos Legales y Privacidad</h2>
            <div>
                <Link to="/terminos-legales-privacidad">
                    <img src="" alt="" />
                    <p>Política de Privacidad</p>
                </Link>
            </div>
            <div>
                <Link to="/aviso-legal">
                    <img src="" alt="" />
                    <p>Aviso legal</p>
                </Link>
            </div>
            <div>
                <Link to="/cookies">
                    <img src="" alt="" />
                    <p>Política de Cookies</p>
                </Link>
            </div>
        </section>
    </>
  )
}

export default Terminos