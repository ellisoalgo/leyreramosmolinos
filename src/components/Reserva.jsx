import React from 'react'
import "../styles/Reserva.scss";
import Online from '../images/online.svg'
import Presencial from '../images/handshake.svg'

function Reserva() {
  return (
    <section className='reserva'>
        <h2 className='reserva-h2'>¿Te sientes preparado?</h2>
        <p className='reserva-text'>Estoy aquí para acompañarte en cada paso, ofreciéndote la oportunidad de escucharte y redescubrirte.
        </p>
        <div className='reserva-card'>
            <h3 className='reserva-card_h3'>Psicoterapia online</h3>
            <p className='reserva-card_text'>Accede a la terapia desde la comodidad de tu hogar. Apto para personas que prefieren sesiones a distancia.</p>
            <md-filled-button className='reserva-card_btn'>
                <a href="https://calendly.com/leyreramospsico/psicoterapia-online" target="_blank" className='reserva-card_btn-link'>
                    <img src={Online} alt="" className='reserva-card_btn-link_icon'/>
                    <span className='reserva-card_btn-link_text'>Reserva tu cita online</span>
                </a>
            </md-filled-button>
        </div>
        <div className='reserva-card'>
            <h3 className='reserva-card_h3'>Psicoterapia presencial</h3>
            <p className='reserva-card_text'>Reunión conmigo en persona. Ideal para quienes prefieren interacciones cara a cara.</p>
            <md-filled-button className='reserva-card_btn'>
                <a href="https://calendly.com/leyreramospsico/psicoterapia-presencial" target="_blank" className='reserva-card_btn-link'>
                    <img src={Presencial} alt="" className='reserva-card_btn-link_icon'/>
                    <span className='reserva-card_btn-link_text'>Reserva tu cita presencial</span>
                </a>
            </md-filled-button>
        </div>
    </section>
  )
}

export default Reserva