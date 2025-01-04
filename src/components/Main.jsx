import React from 'react'
import Hero from './Hero.jsx'
import Sobremi from './Sobremi.jsx'
import Terapia from './Terapia.jsx'
import Tipos from './Tipos.jsx'
import Reserva from './Reserva.jsx'
import Testimonios from './Testimonios.jsx'
import "../styles/Main.scss"

function Main() {
  return (
    <>
        <Hero/>
        <Sobremi/>
        <Terapia/>
        <Tipos/>
        <Reserva/>
        <Testimonios/>
    </>
  )
}

export default Main