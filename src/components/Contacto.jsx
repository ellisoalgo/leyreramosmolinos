import React from 'react'
import "../styles/Contacto.scss";
import Hero from './Hero.jsx'
import ContactXs from '../images/contact_xs.png'
import { Link } from 'react-router-dom';

function Contacto() {
  return (
    <>
        <Hero/>
        <section className='contact'>
            <img src={ContactXs} alt="" className='contact-img'/>
            <div className='contact-text'>
                <h2 className='contact-text_title'>Contacta conmigo</h2>
                <p className='contact-text_text'>Estoy aquí para escucharte. Si tienes preguntas o necesitas más información, no dudes en escribirme.</p>
                <form className='contact-text_form'>
                    <div className='contact-text_form-field'>
                        <input type="text" id="name" name="name" placeholder='Nombre*' required className='contact-text_form-field_input'/>
                    </div>
                    <div className='contact-text_form-field'>
                        <label for="contact" className='contact-text_form-field_label'>¿Prefieres que te contacte por teléfono o por correo electrónico?</label>
                        <input type="radio" id="contact" name="contact" value="email" required className='contact-text_form-field_input'/>
                        <label for="contact" className='contact-text_form-field_label'>Correo electrónico</label>
                        <input type="radio" id="contact" name="contact" value="phone" required className='contact-text_form-field_input'/>
                        <label for="contact" className='contact-text_form-field_label'>Teléfono</label>
                        <input type="radio" id="contact" name="contact" value="both" required className='contact-text_form-field_input'/>
                        <label for="contact" className='contact-text_form-field_label'>Por ambos</label>
                    </div>
                    <div className='contact-text_form-field'>
                        <label for="email" className='contact-text_form-field_label'>Escribe tu correo electrónico</label>
                        <input type="email" id="email" name="email" placeholder="Correo electrónico*" required className='contact-text_form-field_input'/>
                    </div>
                    <div className='contact-text_form-field'>
                        <label for="phone" className='contact-text_form-field_label'>Escribe tu número de teléfono</label>
                        <input type="tel" id="phone" name="phone" placeholder="Teléfono*" required className='contact-text_form-field_input'/>
                    </div>
                    <div className='contact-text_form-field'>
                        <label for="msj" className='contact-text_form-field_label'>Mensaje</label>
                        <textarea id="msj" name="msj" placeholder='Mensaje' required className='contact-text_form-field_input'></textarea>
                    </div>
                    <div className='contact-text_form-field'>
                        <input type="checkbox" id="check" name="check" value="check" required  className='contact-text_form-field_input'/>
                        <label for="check" className='contact-text_form-field_label'>He leído, entendido y acepto la <Link to="/terminos-legales-privacidad">política de privacidad</Link></label>
                    </div>
                    <button type="submit" className='contact-text_form-submit'>Enviar mensaje</button>
                </form>
            </div>
        </section>
        <section className='address'>
            <div className='address_links'>
                <h2 className='address_links-h2'>Cómo llegar</h2>
                <p className='address_links-p'>
                    Carrer de Casp 172, 2º A, 08008 Barcelona, España.
                    Metro y Rodalies Arc de Triomf.
                    614 278 073
                </p>
                <a href="" className='address_links-link'>Ver en Google Maps</a>
            </div>
            <div className='address_map'>
                {/* embed maps */}
            </div>
        </section>
    </>
  )
}

export default Contacto