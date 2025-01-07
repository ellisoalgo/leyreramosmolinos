import React from 'react'
import "../styles/Contacto.scss";
import Hero from './Hero.jsx'
import ContactXs from '../images/contact_xs.png'
import { Link } from 'react-router-dom';
import '@material/web/all.js';

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
                        <md-outlined-text-field type="text" id="name" name="name" required label='Nombre'></md-outlined-text-field>
                    </div>
                    <div role="radiogroup" aria-labelledby="contact-type" className='contact-text_form-radio'>
                        <label for="contact" className='contact-text_form-field_label'>¿Prefieres que te contacte por teléfono o por correo electrónico?</label>
                        <div className='contact-text_form-radio_opt'>
                            <md-radio type="radio" id="contact" name="contact" value="email" aria-label='email' required/>
                            <label for="contact" className='contact-text_form-field_label'>Correo electrónico</label>
                        </div>
                        <div className='contact-text_form-radio_opt'>
                            <md-radio type="radio" id="contact" name="contact" value="phone" aria-label='phone' required/>
                            <label for="contact" className='contact-text_form-field_label'>Teléfono</label>
                        </div>
                        <div className='contact-text_form-radio_opt'>
                            <md-radio  type="radio" id="contact" name="contact" value="both" aria-label='both' required/>
                            <label for="contact" className='contact-text_form-field_label'>Por ambos</label>
                        </div>
                    </div>
                    <div className='contact-text_form-field'>
                        <label for="email" className='contact-text_form-field_label'>Escribe tu correo electrónico:</label>
                        <md-outlined-text-field type="email" id="email" name="email" label='Correo electrónico' required></md-outlined-text-field>
                    </div>
                    <div className='contact-text_form-field'>
                        <label for="phone" className='contact-text_form-field_label'>Escribe tu número de teléfono:</label>
                        <md-outlined-text-field type="tel" id="phone" name="phone" label='Teléfono' required></md-outlined-text-field>
                    </div>
                    <div className='contact-text_form-field'>
                        <label for="msj" className='contact-text_form-field_label'>Mensaje:</label>
                        <md-outlined-text-field type='textarea' id="msj" name="msj" label='Mensaje' required></md-outlined-text-field>
                    </div>
                    <div className='contact-text_form-check'>
                        <md-checkbox type="checkbox" id="check" name="check" value="check" required></md-checkbox>
                        <label for="check" className='contact-text_form-field_label'>He leído, entendido y acepto la <Link to="/terminos-legales-privacidad" className='contact-text_form-field_label-link'>política de privacidad</Link></label>
                    </div>
                    <button type="submit" className='contact-text_form-submit'>Enviar mensaje</button>
                </form>
            </div>
        </section>
        <section className='sectAdd'>
            <div className='sectAdd-address'>
                <div className='sectAdd-address_map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.9475792527232!2d2.1785136756994787!3d41.39694477129869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2e11321961f%3A0x3828506ad0233f59!2sCarrer%20de%20Casp%2C%20172%2C%202%C2%BA%2C%20A%2C%20L&#39;Eixample%2C%2008013%20Barcelona!5e0!3m2!1sen!2ses!4v1736264321838!5m2!1sen!2ses" width="256" height="256" style={{ border: "0", borderRadius: "16px", width: "100%", height: "100%" }}allowFullScreen=""></iframe>
                </div>
                <div className='sectAdd-address_links'>
                    <h2 className='sectAdd-address_links-h2'>Cómo llegar</h2>
                    <p className='sectAdd-address_links-p'>
                        Carrer de Casp 172, 2º A, 08008 Barcelona, España.
                    </p>
                    <p className='sectAdd-address_links-p'>
                        Metro y Rodalies Arc de Triomf.
                    </p>
                    <p className='sectAdd-address_links-p'>
                        614 278 073
                    </p>
                    <button className='sectAdd-address_links-btn'>
                        <a href="" >Ver en Google Maps</a>
                    </button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contacto