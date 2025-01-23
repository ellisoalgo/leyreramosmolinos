import React from 'react'
import '../styles/Hero.scss'
import AnchaXs from '../images/ancha_xs.svg'


function Hero2() {
  return (
    <section className='hero'>
        <div className='hero-hero'>
          <h1 className='hero-h1'>Leyre Ramos Molinos</h1>
          <p className='hero-text'>Psicoterapeuta especializada en terapia sexual y de pareja</p>
          <div className='hero-btn'>
            <md-filled-button href="https://calendly.com/leyreramospsico" target="_blank">
              Reserva tu cita
            </md-filled-button>
          </div>
        </div>
        <img src={AnchaXs} alt="" className='hero-img'/>
    </section>
  )
}

export default Hero2