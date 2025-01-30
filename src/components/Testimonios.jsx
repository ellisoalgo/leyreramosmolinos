import React from 'react'
import "../styles/Testimonios.scss";
import Star from '../images/star_xs.svg'

function Testimonios() {
  return (
    <section className='test'>
        <h2 className='test-h2'>Testimonios</h2>
        <div className='test-carrousel'>
            <div className='test-carrousel_card'>
                <div className='test-carrousel_card-block'>
                    <h4 className='test-carrousel_card-block_name'>Alejandro Sánchez</h4>
                    <img src={Star} alt="" className='test-carrousel_card-block_img'/>
                </div>
                <p className='test-carrousel_card-text'>Apenas llevo dos visitas, pero desde luego el trato que he recibido de Leyre es excelente. Se preocupa por escucharte, y te hace las preguntas que realmente importan haciendo que la comunicación sea muy fluida.</p>
            </div>
            <div className='test-carrousel_card'>
                <div className='test-carrousel_card-block'>
                    <h4 className='test-carrousel_card-block_name'>X.S</h4>
                    <img src={Star} alt="" className='test-carrousel_card-block_img'/>
                </div>
                <p className='test-carrousel_card-text'>Leyre es una excelente profesional, muy cercana y fácil de transmitir lo que sientes. Empatiza mucho y está pendiente de cualquier detalle que pueda ayudar a mejorar la situación.</p>
            </div>
            <div className='test-carrousel_card'>
                <div className='test-carrousel_card-block'>
                    <h4 className='test-carrousel_card-block_name'>Ainara Suñe</h4>
                    <img src={Star} alt="" className='test-carrousel_card-block_img'/>
                </div>
                <p className='test-carrousel_card-text'>He tenido mucha suerte con ella! Me ha ayudado mucho tanto a nivel personal, ademico y profesional, estoy suuuper agradecida.</p>
            </div>
            <div className='test-carrousel_card'>
                <div className='test-carrousel_card-block'>
                    <h4 className='test-carrousel_card-block_name'>Karla Martínez</h4>
                    <img src={Star} alt="" className='test-carrousel_card-block_img'/>
                </div>
                <p className='test-carrousel_card-text'>Me sentí muy tranquila y en confianza con Leyre! Es mi primera vez que voy con un psicólogo y me sentí bastante bien.</p>
            </div>
            <div className='test-carrousel_card'>
                <div className='test-carrousel_card-block'>
                    <h4 className='test-carrousel_card-block_name'>I.C</h4>
                    <img src={Star} alt="" className='test-carrousel_card-block_img'/>
                </div>
                <p className='test-carrousel_card-text'>Llevo ya 3 visitas con Leyre y estoy super contenta de haber acertado con ella. Es una professional super dedicada con su trabajo y con la que te sientes super cómoda para abrirte con ella. Sus consejos me están ayudando para empezar a mejorar aquellas cosas que me preocupan y sentirme mejor conmigo misma.</p>
            </div>
            <div className='test-carrousel_card'>
                <div className='test-carrousel_card-block'>
                    <h4 className='test-carrousel_card-block_name'>Lucas</h4>
                    <img src={Star} alt="" className='test-carrousel_card-block_img'/>
                </div>
                <p className='test-carrousel_card-text'>Siempre me ha costado mucho acudir y ser constante en terapia. Pero esta vez me he sentido muy cómodo, Leyre es muy profesional, escucha atentamente y hace que la sesión fluya de manera muy natural. Sin duda recomiendo</p>
            </div>
            <div className='test-carrousel_card'>
                <div className='test-carrousel_card-block'>
                    <h4 className='test-carrousel_card-block_name'>A.S</h4>
                    <img src={Star} alt="" className='test-carrousel_card-block_img'/>
                </div>
                <p className='test-carrousel_card-text'>Una primera visita muy buena y sana, Leyre es muy abierta y amable, y se nota que la psicóloga es su vocación.</p>
            </div>
            <div className='test-carrousel_card'>
                <div className='test-carrousel_card-block'>
                    <h4 className='test-carrousel_card-block_name'>C.R</h4>
                    <img src={Star} alt="" className='test-carrousel_card-block_img'/>
                </div>
                <p className='test-carrousel_card-text'>Me hace sentir muy cómoda y me gusta mucho su trato, es una gran profesional :)</p>
            </div>
        </div>
    </section>
  )
}

export default Testimonios