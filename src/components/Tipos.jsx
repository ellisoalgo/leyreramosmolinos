import React from 'react'
import "../styles/Tipos.scss";
import { Link } from "react-router-dom";
import Children from '../images/children.svg';
import Couple from '../images/couple.svg';
import People from '../images/people.svg';
import Sexual from '../images/sexual.svg';



function Tipos() {
  return (
    <section id='tipos-de-terapia' className='tipos'>
        <h2 className='tipos-h2'>Tipos de terapia</h2>
        <div className='tipos-cards'>
            <div className='tipos-cards_card'>
                <img src={Children} alt="" className='card-img'/>
                <h3 className='card-h3'>Psicoterapia infantil y juvenil</h3>
                <p className='card-text'>Ayudamos a niños y adolescentes a gestionar sus emociones y desarrollar habilidades, en un espacio de confianza donde pueden crecer de forma sana.</p>
            </div>
            <div className='tipos-cards_card'>
                <img src={People} alt="" className='card-img'/>
                <h3 className='card-h3'>Psicoterapia para adultos</h3>
                <p className='card-text'>Te acompañamos a superar retos emocionales, ofreciéndote herramientas para encontrar un mayor equilibrio y bienestar en tu vida diaria.</p>
            </div>
            <div className='tipos-cards_card'>
                <img src={Couple} alt="" className='card-img'/>
                <h3 className='card-h3'>Terapia de pareja</h3>
                <p className='card-text'>Fortalece tu relación de pareja y mejora la comunicación trabajando juntos en la resolución de conflictos y la comprensión para el crecimiento emocional.</p>
            </div>
            <div className='tipos-cards_card'>
                <img src={Sexual} alt="" className='card-img'/>
                <h3 className='card-h3'>Terapia sexual</h3>
                <p className='card-text'>Un espacio seguro y profesional para abordar y resolver dificultades en la intimidad, mejorando tu satisfacción, conexión y bienestar sexual.</p>
            </div>
        </div>
    </section>
  )
}

export default Tipos