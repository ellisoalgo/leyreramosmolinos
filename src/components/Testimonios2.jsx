import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton.jsx'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons.jsx'
import useEmblaCarousel from 'embla-carousel-react'
import Star from '../images/star_xs.svg'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

useEmblaCarousel.globalOptions = { loop: true };


const Testimonios2 = (props) => {
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
    <section className='embla'>
        <h2 className='embla__h2'>Testimonios</h2>
        <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            <div className='embla__slide'>
                <div className='embla__slide--block'>
                    <h4 className='embla__slide--block__name'>Alejandro Sánchez</h4>
                    <img src={Star} alt="" className='embla__slide--block__img'/>
                </div>
                <p className='embla__slide--text'>Apenas llevo dos visitas, pero desde luego el trato que he recibido de Leyre es excelente. Se preocupa por escucharte, y te hace las preguntas que realmente importan haciendo que la comunicación sea muy fluida.</p>
            </div>
            <div className='embla__slide'>
                <div className='embla__slide--block'>
                    <h4 className='embla__slide--block__name'>X.S</h4>
                    <img src={Star} alt="" className='embla__slide--block__img'/>
                </div>
                <p className='embla__slide--text'>Leyre es una excelente profesional, muy cercana y fácil de transmitir lo que sientes. Empatiza mucho y está pendiente de cualquier detalle que pueda ayudar a mejorar la situación.</p>
            </div>
            <div className='embla__slide'>
                <div className='embla__slide--block'>
                    <h4 className='embla__slide--block__name'>Ainara Suñe</h4>
                    <img src={Star} alt="" className='embla__slide--block__img'/>
                </div>
                <p className='embla__slide--text'>He tenido mucha suerte con ella! Me ha ayudado mucho tanto a nivel personal, ademico y profesional, estoy suuuper agradecida.</p>
            </div>
            <div className='embla__slide'>
                <div className='embla__slide--block'>
                    <h4 className='embla__slide--block__name'>Karla Martínez</h4>
                    <img src={Star} alt="" className='embla__slide--block__img'/>
                </div>
                <p className='embla__slide--text'>Me sentí muy tranquila y en confianza con Leyre! Es mi primera vez que voy con un psicólogo y me sentí bastante bien.</p>
            </div>
            <div className='embla__slide'>
                <div className='embla__slide--block'>
                    <h4 className='embla__slide--block__name'>I.C</h4>
                    <img src={Star} alt="" className='embla__slide--block__img'/>
                </div>
                <p className='embla__slide--text'>Llevo ya 3 visitas con Leyre y estoy super contenta de haber acertado con ella. Es una professional super dedicada con su trabajo y con la que te sientes super cómoda para abrirte con ella. Sus consejos me están ayudando para empezar a mejorar aquellas cosas que me preocupan y sentirme mejor conmigo misma.</p>
            </div>
            <div className='embla__slide'>
                <div className='embla__slide--block'>
                    <h4 className='embla__slide--block__name'>Lucas</h4>
                    <img src={Star} alt="" className='embla__slide--block__img'/>
                </div>
                <p className='embla__slide--text'>Siempre me ha costado mucho acudir y ser constante en terapia. Pero esta vez me he sentido muy cómodo, Leyre es muy profesional, escucha atentamente y hace que la sesión fluya de manera muy natural. Sin duda recomiendo</p>
            </div>
            <div className='embla__slide'>
                <div className='embla__slide--block'>
                    <h4 className='embla__slide--block__name'>A.S</h4>
                    <img src={Star} alt="" className='embla__slide--block__img'/>
                </div>
                <p className='embla__slide--text'>Una primera visita muy buena y sana, Leyre es muy abierta y amable, y se nota que la psicóloga es su vocación.</p>
            </div>
            <div className='embla__slide'>
                <div className='embla__slide--block'>
                    <h4 className='embla__slide--block__name'>C.R</h4>
                    <img src={Star} alt="" className='embla__slide--block__img'/>
                </div>
                <p className='embla__slide--text'>Me hace sentir muy cómoda y me gusta mucho su trato, es una gran profesional :)</p>
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

export default Testimonios2
