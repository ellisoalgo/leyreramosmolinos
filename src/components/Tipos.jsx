import React from 'react'
import "../styles/Tipos.scss";
import { Link } from "react-router-dom";


function Tipos() {
  return (
    <div id='tipos-de-terapia'>
        <h2>Tipos de terapia</h2>
        <div>
            <img src="" alt="" />
            <h3>Psicoterapia infantil y juvenil</h3>
            <p>Ayudamos a niños y adolescentes a gestionar sus emociones y desarrollar habilidades, en un espacio de confianza donde pueden crecer de forma sana.</p>
        </div>
        <div>
            <img src="" alt="" />
            <h3>Psicoterapia para adultos</h3>
            <p>Te acompañamos a superar retos emocionales, ofreciéndote herramientas para encontrar un mayor equilibrio y bienestar en tu vida diaria.</p>
        </div>
        <div>
            <img src="" alt="" />
            <h3>Terapia de pareja</h3>
            <p>Fortalece tu relación de pareja y mejora la comunicación trabajando juntos en la resolución de conflictos y la comprensión para el crecimiento emocional.</p>
        </div>
        <div>
            <img src="" alt="" />
            <h3>Terapia sexual</h3>
            <p>Un espacio seguro y profesional para abordar y resolver dificultades en la intimidad, mejorando tu satisfacción, conexión y bienestar sexual.</p>
        </div>
    </div>
  )
}

export default Tipos