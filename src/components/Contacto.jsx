import React from 'react'
import "../styles/Contacto.scss";
import Hero from './Hero.jsx'
import Cta from './Cta.jsx'

function Contacto() {
  return (
    <>
        <Hero/>
        <section className='contact'>
            <img src="" alt="" className='contact-img'/>
            <div className='contact-text'>
                <h2 className='contact-text_title'>Contacta conmigo</h2>
                <p className='contact-text_text'>Estoy aquí para escucharte. Si tienes preguntas o necesitas más información, no dudes en escribirme.</p>
                <form action="" className='contact-text_form'>
                    <input type="text" name="name" id="name" className='contact-text_form-input'/>
                    <label htmlFor="contactType">¿Prefieres que te contacte por teléfono o por correo electrónico?</label>
                    <input type="radio" name="correo" id="contactType" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className='contact-text_form-input'/>
                    <label htmlFor="phone">Teléfono</label>
                    <input type="tel" name="phone" id="phone" className='contact-text_form-input'/>
                    <label htmlFor="msg">Mensaje</label>
                    <input type="text" name="msg" id="msg" className='contact-text_form-input'/>
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
    </>
  )
}

export default Contacto