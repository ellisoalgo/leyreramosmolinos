import React, { useState, useEffect } from "react"
import "../styles/Cta.scss";
import ThinXs from '../images/estrecha_xs.svg'

function Cta() {

  const [isWideScreen, setIsWideScreen] = useState(false)

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth > 768)
    }

    // Check on initial render
    checkScreenWidth()

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenWidth)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenWidth)
  }, [])

  return (
    <section className='ctaSection'>
        <img src={ThinXs} alt="" className='ctaSection-img1'/>
        <div className={`ctaSection-cta1 ${isWideScreen ? "hidden" : ""}`}>
          <p className='ctaSection-cta1-p'>transformando </p>
          <p className='ctaSection-cta1-p'>
            <em className='ctaSection-cta1-em'>conflictos</em> 
            en
          </p>
          <p className='ctaSection-cta1-p'>
            <em className='ctaSection-cta1-em'> 
              oportunidades
            </em>
          </p>
          <p className='ctaSection-cta1-p'> 
            de crecimiento
          </p>
          <div className='ctaSection-cta1-btn'>
            <md-filled-button href="https://calendly.com/leyreramospsico" target="_blank">
              Reserva tu cita
            </md-filled-button>
          </div>
        </div>
        <div className={`ctaSection-cta2 ${isWideScreen ? "" : "hidden"}`}>
          <p className='ctaSection-cta2-p'>
            transformando <em className='ctaSection-cta2-em'> conflictos</em>
          </p>
          <p className='ctaSection-cta2-p'>
            en <em className='ctaSection-cta2-em'> 
              oportunidades
            </em> de crecimiento
          </p>
          <div className='ctaSection-cta2-btn'>
            <md-filled-button href="https://calendly.com/leyreramospsico" target="_blank">
              Reserva tu cita
            </md-filled-button>
          </div>
        </div>
        <img src={ThinXs} alt="" className='ctaSection-img2'/>
    </section>
  )
}

export default Cta