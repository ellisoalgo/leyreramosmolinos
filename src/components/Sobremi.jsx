import React from 'react'
import "../styles/Sobremi.scss";
import LeyreXs from '../images/leyre_xs.png'
import { Link } from 'react-router-dom';
import LeyreXl from '../images/leyre_principal.png'

function Sobremi() {
  return (
    <section className='sobreMi'>
      <div className='sobreMi-sect'>
        <img src={LeyreXl} alt="" className='sobreMi-img' />
        <div className='sobreMi-sobre'>
          <h2 className='sobreMi-h2'>Leyre Ramos Molinos</h2>
          <p className='sobreMi-text'>
            Soy psicóloga clínica especializada en terapia sexual y de pareja. Mi vocación por la psicología nace de un profundo deseo de contribuir al bienestar emocional y mental de las personas, ayudándolas a descubrir y desarrollar su mejor versión.
          </p>
          <p className='sobreMi-text'>
            Cada día, aprendo de mis pacientes y me apasiona ver cómo, a través de la terapia, logran transformar sus vidas y construir vínculos más sanos.
          </p>
          <Link to='/sobre-mi' className='sobreMi-link'>
            <md-outlined-button>
              Más información
            </md-outlined-button>
          </Link>
        </div>
      </div>
      
    </section>
  )
}

export default Sobremi