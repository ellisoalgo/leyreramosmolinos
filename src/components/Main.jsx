import React from 'react'
import Hero from './Hero.jsx'
import Sobremi from './Sobremi.jsx'
import Terapia from './Terapia.jsx'
import Tipos from './Tipos.jsx'
import Reserva from './Reserva.jsx'
import Testimonios2 from './Testimonios2.jsx'
import "../styles/Main.scss"
import EmblaCarousel from './EmblaCarousel.jsx'
import '../styles/Embla.scss'


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Main() {
  return (
    <>
        <Hero/>
        <Sobremi/>
        <Terapia/>
        {/* <Tipos/> */}
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <Reserva/>
        <Testimonios2/>
    </>
  )
}

export default Main