import React from 'react'
import "../styles/Contacto.scss";
import Hero from './Hero.jsx'
import Cta from './Cta.jsx'

function Contacto() {
  return (
    <>
        <Hero/>
        <section>
            <img src="" alt="" />
            <div>
                <h2>Contacta conmigo</h2>
                <p>Estoy aquí para escucharte. Si tienes preguntas o necesitas más información, no dudes en escribirme.</p>
                <form action="">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="phone">Teléfono</label>
                    <input type="tel" name="phone" id="phone" />
                    <label htmlFor="msg">Mensaje</label>
                    <input type="text" name="msg" id="msg" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
        <section>
            <div>
                <h2>Cómo llegar</h2>
                <p>
                    Carrer de Casp 172, 2º A, 08008 Barcelona, España.
                    Metro y Rodalies Arc de Triomf.
                    614 278 073
                </p>
                <a href="">Ver en Google Maps</a>
            </div>
            <div>
                {/* embed maps */}
            </div>
        </section>
        <Cta/>
    </>
  )
}

export default Contacto