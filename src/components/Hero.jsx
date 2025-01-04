import React from 'react'
import '../styles/Hero.scss'
import { Link } from "react-router-dom";
import AnchaXs from '../images/ancha_xs.svg'


function Hero() {
  return (
    <section className='hero'>
        <h1 className='hero-h1'>Leyre Ramos Molinos</h1>
        <p className='hero-text'>Psicoterapeuta especializada en terapia sexual y de pareja</p>
        <div className='hero-btn'>
            <button className='hero-btn_explora'>
              <Link to="#tipos-de-terapia">Explora las opciones</Link>
            </button>
            <button href="https://calendly.com/leyreramospsico" className='hero-btn_reserva'>Reserva tu cita</button>
        </div>
        <div className='hero-imgs'>
          <img src={AnchaXs} alt="" className='hero-imgs_1'/>
          <img src={AnchaXs} alt="" className='hero-imgs_2'/>
        </div>
    </section>
  )
}

export default Hero