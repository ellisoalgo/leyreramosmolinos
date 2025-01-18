import React from 'react'
import "../styles/MasSobreMi.scss";
import AboutXs from '../images/about_xs.svg'
import Hero2 from './Hero2.jsx';

function MasSobreMi() {
  return (
    <>
        <Hero2/>
        <section className='about'>
            <div className='about-head'>
              <h2 className='about-head-title'>Un espacio seguro para transformarse y crecer</h2>
              <h3 className='about-head-subtitle'>Cada historia es única, y cada paso hacia el bienestar es un triunfo que celebro junto a mis pacientes.</h3>
            </div>
            <img src={AboutXs} alt="" className='about-img'/>
            <div className='about-text'>
              <p >
                  Desde que tengo memoria, he sentido una profunda curiosidad por el mundo interior de las personas. La psicología ha sido para mí un camino natural y vocacional, una forma de dedicarme a lo que más me llena: ayudar a los demás a encontrar su equilibrio, sanar y crecer.
              </p>
              <p className='about-text'>
                Mi enfoque terapéutico se basa en la empatía, la cercanía y el respeto. Cada persona tiene su propia historia, retos y fortalezas, y mi trabajo consiste en acompañarles de forma personalizada.
              </p>
              <p className='about-text'>
                Mi objetivo es ofrecer un espacio seguro y libre de juicios donde puedan explorar, comprender y transformar su mundo emocional.
              </p>
              <p className='about-text'>
                El proceso terapéutico es, para mí, una colaboración. Valoro la honestidad, la apertura y el compromiso mutuo, y busco proporcionar herramientas prácticas y eficaces para que mis pacientes enfrenten sus desafíos y alcancen sus objetivos a su propio ritmo.
              </p>
              <p className='about-text'>
                Lo más gratificante de mi trabajo es ver cómo las personas toman las riendas de sus vidas, adquieren nuevas perspectivas y logran sanar en su propio tiempo.
              </p>
              <p className='about-text'>
                Ser psicóloga no es solo mi profesión, sino una verdadera pasión. Cada historia es un regalo y cada avance, por pequeño que sea, es un triunfo compartido.
              </p>
            </div>
        </section>
    </>
  )
}

export default MasSobreMi