import React from 'react'
import '../styles/Hero.scss'
import { HashLink } from 'react-router-hash-link';
import AnchaXs from '../images/ancha_xs.svg'


function Hero() {
  return (
    <section className='hero'>
        <h1 className='hero-h1'>Leyre Ramos Molinos</h1>
        <p className='hero-text'>Psicoterapeuta especializada en terapia sexual y de pareja</p>
        <div className='hero-btn'>
            <md-outlined-button>
              <HashLink smooth to="#tipos-de-terapia">Explora las opciones</HashLink>
            </md-outlined-button>
            <md-filled-button>
              <a href="https://calendly.com/leyreramospsico" target="_blank">
                  Reserva tu cita
                </a>
            </md-filled-button>
        </div>
        <div className='hero-imgs'>
          <img src={AnchaXs} alt="" className='hero-imgs_1'/>
          <img src={AnchaXs} alt="" className='hero-imgs_2'/>
        </div>
    </section>
  )
}

export default Hero