import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton.jsx'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons.jsx'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import Children from '../images/children.svg';
import Couple from '../images/couple.svg';
import People from '../images/people.svg';
import Sexual from '../images/sexual.svg';

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [WheelGesturesPlugin({ forceWheelAxis: 'x' })]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section id='tipos-de-terapia' className='embla'>
        <h2 className='embla__h2'>Tipos de terapia</h2>
        <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            <div className='embla__slide'>
                <img src={Children} alt="" className='embla__slide--img'/>
                <h3 className='embla__slide--h3'>Psicoterapia infantil y juvenil</h3>
                <p className='embla__slide--text'>Ayudamos a niños y adolescentes a gestionar sus emociones y desarrollar habilidades, en un espacio de confianza donde pueden crecer de forma sana.</p>
            </div>
            <div className='embla__slide'>
                <img src={People} alt="" className='embla__slide--img'/>
                <h3 className='embla__slide--h3'>Psicoterapia para adultos</h3>
                <p className='embla__slide--text'>Te acompañamos a superar retos emocionales, ofreciéndote herramientas para encontrar un mayor equilibrio y bienestar en tu vida diaria.</p>
            </div>
            <div className='embla__slide'>
                <img src={Couple} alt="" className='embla__slide--img'/>
                <h3 className='embla__slide--h3'>Terapia de pareja</h3>
                <p className='embla__slide--text'>Fortalece tu relación de pareja y mejora la comunicación trabajando juntos en la resolución de conflictos y la comprensión para el crecimiento emocional.</p>
            </div>
            <div className='embla__slide'>
                <img src={Sexual} alt="" className='embla__slide--img'/>
                <h3 className='embla__slide--h3'>Terapia sexual</h3>
                <p className='embla__slide--text'>Un espacio seguro y profesional para abordar y resolver dificultades en la intimidad, mejorando tu satisfacción, conexión y bienestar sexual.</p>
            </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /> 
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
