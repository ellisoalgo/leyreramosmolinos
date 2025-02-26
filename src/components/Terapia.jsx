import React from 'react'
import "../styles/Terapia.scss";
import { Link } from "react-router-dom";
import TerapiaImg from '../images/terapia_xl.svg'

function Terapia() {
  return (
    <section className='terapia'>
        <div className='terapia-sect'>
          <img src={TerapiaImg} alt="" className='terapia-img'/>
          <div className='terapia-group'>
            <h2 className='terapia-h2'>Tu bienestar empieza aquí</h2>
            <div className='terapia-par'>
              <p className='terapia-text'>
                  Hacer terapia es un acto de cuidado personal que te permite entenderte mejor, procesar emociones difíciles y encontrar herramientas para enfrentar los desafíos de la vida.
              </p>
              <p className='terapia-text'>
                  En un entorno seguro y confidencial, la terapia te ofrece un espacio para explorar tu interior, mejorar tus relaciones y aprender a gestionar el estrés, la ansiedad o cualquier dificultad que te impida avanzar.
              </p>
              <p className='terapia-text'>
                  A través de la terapia, puedes desbloquear tu potencial, desarrollar habilidades emocionales y alcanzar un equilibrio mental y emocional que te permita vivir de manera más plena y consciente. No estás solo en este proceso, la terapia te acompaña en cada paso hacia tu bienestar.
              </p>
            </div>
            <Link to="/contacto">
              <md-filled-button>
                Contacta conmigo
              </md-filled-button>
            </Link>
          </div>
        </div>
    </section>
  )
}

export default Terapia