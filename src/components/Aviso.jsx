import React from 'react'
import Terminos from './Terminos.jsx'
import "../styles/Aviso.scss"

function Aviso() {
  return (
    <>
      <Terminos/>
      <section className='avisoLegal'>
        <h2>Aviso Legal</h2>
        <h3>Titular del Sitio Web</h3>
        <p>
            Leyre Ramos Molinos
            <a href="">Carrer de Casp 172, 2º A, 08008 Barcelona, España.</a>
            <a href="mailto:psicoterapeutaleyre@outlook.com">psicoterapeutaleyre@outlook.com</a>
        </p>
        <h3>Objeto de la Web</h3>
        <p>
            Este sitio tiene como objetivo proporcionar información sobre servicios de psicoterapia, responder a consultas y gestionar los servicios solicitados.
        </p>
        <h3>Condiciones de Uso</h3>
        <p>
            El uso de este sitio implica la aceptación de estas condiciones, que podrán ser modificadas en cualquier momento para asegurar el cumplimiento de la normativa vigente, en particular el RGPD y la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).
        </p>
      </section>
    </>
  )
}

export default Aviso