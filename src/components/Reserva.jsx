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
        <div className='reserva-cards'>
            <div className='reserva-card'>
                <div>
                    <h3 className='reserva-card_h3'>Psicoterapia online</h3>
                    <p className='reserva-card_text'>Accede a la terapia desde la comodidad de tu hogar. Apto para personas que prefieren sesiones a distancia.</p>
                </div>
                <div className='reserva-card_btn'>
                    <md-filled-button  href="https://calendly.com/leyreramospsico/psicoterapia-online" target="_blank">
                        <div  className='reserva-card_btn-link'>
                            <img src={Online} alt="" className='reserva-card_btn-link_icon'/>
                            <span className='reserva-card_btn-link_text'>Reserva tu cita online</span>
                        </div>
                    </md-filled-button>
                </div>
            </div>
            <div className='reserva-card'>
                <div>
                    <h3 className='reserva-card_h3'>Psicoterapia presencial</h3>
                    <p className='reserva-card_text'>Reunión conmigo en persona. Ideal para quienes prefieren interacciones cara a cara.</p>
                </div>
                <div className='reserva-card_btn'>
                    <md-filled-button  href="https://calendly.com/leyreramospsico/psicoterapia-presencial" target="_blank" >
                        <div className='reserva-card_btn-link'>
                            <img src={Presencial} alt="" className='reserva-card_btn-link_icon'/>
                            <span className='reserva-card_btn-link_text'>Reserva tu cita presencial</span>
                        </div>
                    </md-filled-button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reserva