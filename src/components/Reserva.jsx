import React from 'react'
import "../styles/Reserva.scss";

function Reserva() {
  return (
    <div>
        <h2>¿Te sientes preparado?</h2>
        <p>Estoy aquí para acompañarte en cada paso, ofreciéndote la oportunidad de escucharte y redescubrirte.
        </p>
        <div>
            <h3>Psicoterapia online</h3>
            <p>Accede a la terapia desde la comodidad de tu hogar. Apto para personas que prefieren sesiones a distancia.</p>
            <a href="">
                <img src="" alt="" />
                <span>Reserva tu cita online</span>
            </a>
        </div>
        <div>
            <h3>Psicoterapia presencial</h3>
            <p>Reunión conmigo en persona. Ideal para quienes prefieren interacciones cara a cara.</p>
            <a href="">
                <img src="" alt="" />
                <span>Reserva tu cita presencial</span>
            </a>
        </div>
    </div>
  )
}

export default Reserva