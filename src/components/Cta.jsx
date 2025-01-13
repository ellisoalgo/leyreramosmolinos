import React from 'react'
import "../styles/Cta.scss";
import ThinXs from '../images/estrecha_xs.svg'

function Cta() {
  return (
    <section>
        <div className='cta'>
          <p className='cta-p'>transformando <em className='cta-em'>conflictos</em>  en </p>
          <p className='cta-p'><em className='cta-em'> oportunidades</em></p>
          <p className='cta-p'> de crecimiento</p>
          <div className='cta-btn'>
            <md-filled-button>
              <a href="https://calendly.com/leyreramospsico" target="_blank">Reserva tu cita</a>
            </md-filled-button>
          </div>
        </div>
        <div className='cta-imgs'>
          <img src={ThinXs} alt="" className='cta-imgs_1'/>
          <img src={ThinXs} alt="" className='cta-imgs_2'/>
        </div>
    </section>
  )
}

export default Cta