import React from 'react'
import "../styles/MasSobreMi.scss";
import Hero from './Hero.jsx'
import Cta from './Cta.jsx'

function MasSobreMi() {
  return (
    <>
        <Hero/>
        <section>
            <h2>Un espacio seguro para transformarse y crecer</h2>
            <h3>Cada historia es única, y cada paso hacia el bienestar es un triunfo que celebro junto a mis pacientes.</h3>
            <img src="" alt="" />
            <p>
                Desde que tengo memoria, he sentido una profunda curiosidad por el mundo interior de las personas. La psicología ha sido para mí un camino natural y vocacional, una forma de dedicarme a lo que más me llena: ayudar a los demás a encontrar su equilibrio, sanar y crecer.
                Mi enfoque terapéutico se basa en la empatía, la cercanía y el respeto. Cada persona tiene su propia historia, retos y fortalezas, y mi trabajo consiste en acompañarles de forma personalizada.
                Mi objetivo es ofrecer un espacio seguro y libre de juicios donde puedan explorar, comprender y transformar su mundo emocional.
                El proceso terapéutico es, para mí, una colaboración. Valoro la honestidad, la apertura y el compromiso mutuo, y busco proporcionar herramientas prácticas y eficaces para que mis pacientes enfrenten sus desafíos y alcancen sus objetivos a su propio ritmo. 
                Lo más gratificante de mi trabajo es ver cómo las personas toman las riendas de sus vidas, adquieren nuevas perspectivas y logran sanar en su propio tiempo.
                Ser psicóloga no es solo mi profesión, sino una verdadera pasión. Cada historia es un regalo y cada avance, por pequeño que sea, es un triunfo compartido.
            </p>
        </section>
        <Cta/>
    </>
  )
}

export default MasSobreMi