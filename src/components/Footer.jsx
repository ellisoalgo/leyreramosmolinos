import React from 'react'
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
        <div>
            <img src="" alt="logo LRM pscioterapeuta" />
        </div>
        <div>
            <p>Dirección</p>
            <div> 
                <a href="">
                Carrer de Casp 172, 2º A,
                08008 Barcelona, España.
                </a>
                <a href="mailto:psicoterapeutaleyre@outlook.com">psicoterapeutaleyre@outlook.com</a>
                <a href="">614 278 073</a>
            </div>
        </div>
        <div>
            <p>Secciones</p>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Sobre mí</a></li>
                <li><a href="">Contacto</a></li>
                <li><a href="">Reserva tu cita</a></li>
                <li><a href="">Términos Legales y Privacidad</a></li>
            </ul>
        </div>
        <div>
            <p>Leyre Ramos Molinos | Psicóloga clínica | 2024</p>
            <a href="">
                <img src="" alt="instagram logo" />
            </a>
            <a href="">
                <img src="" alt="linkedin logo" />
            </a>
        </div>
    </footer>
  )
}

export default Footer