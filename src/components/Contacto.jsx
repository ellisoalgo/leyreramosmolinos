import { useState, useRef } from "react"
import "../styles/Contacto.scss"
import { Link } from "react-router-dom"
import "@material/web/all.js"
import Hero2 from "./Hero2.jsx"
import ContactXl from "../images/contacto_xl.svg"
import emailjs from "@emailjs/browser"

function Contacto() {
  const [selectedContactMethod, setSelectedContactMethod] = useState("email")
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const refs = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    msj: useRef(null),
    check: useRef(null),
  }

  const handleRadioChange = (e) => {
    setSelectedContactMethod(e.target.value)
  }

  const handleBlur = (name) => {
    // Mark the field as touched
    setTouched((prev) => ({ ...prev, [name]: true }))
    validateField(name)
  }

  const validateField = (name) => {
    const value =
      refs[name]?.current?.type === "checkbox" ? refs[name].current.checked : refs[name]?.current?.value || ""

    const isValid = refs[name]?.current?.type === "checkbox" ? value : value.trim() !== ""

    if (refs[name].current) {
      refs[name].current.error = touched[name] && !isValid
    }

    setErrors((prev) => ({ ...prev, [name]: !isValid }))
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setTouched({
      name: true,
      email: selectedContactMethod !== "phone",
      phone: selectedContactMethod !== "email",
      msj: true,
      check: true,
    })

    const fieldsToValidate = ["name", "msj", "check"]
    if (selectedContactMethod !== "phone") fieldsToValidate.push("email")
    if (selectedContactMethod !== "email") fieldsToValidate.push("phone")

    const isValid = fieldsToValidate.every(validateField)

    if (isValid) {
      console.log("Form submitted")
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState(null)
  const sendEmail = (e) => {
    e.persist()
    e.preventDefault()
    setIsSubmitting(true)
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          setStateMessage("Message sent!")
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage(null)
          }, 5000) // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later")
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage(null)
          }, 5000) // hide message after 5 seconds
        },
      )

    // Clears the form after sending the email
    e.target.reset()
  }

  return (
    <>
      <Hero2 />
      <section className="contact">
        <img src={ContactXl || "/placeholder.svg"} alt="" className="contact-img" />
        <div className="contact-text">
          <div className="contact-text_titles">
            <h2 className="contact-text_titles_title">Contacta conmigo</h2>
            <p className="contact-text_titles_text">
              Estoy aquí para escucharte. Si tienes preguntas o necesitas más información, no dudes en escribirme.
            </p>
          </div>
          <form className="contact-text_form" onSubmit={sendEmail}>
            <div className="contact-text_form-field">
              <md-outlined-text-field
                ref={refs.name}
                type="text"
                id="name"
                name="name"
                label="Nombre"
                required
                error={errors.name}
                error-text="Este campo es necesario para continuar"
                onBlur={() => handleBlur("name")}
              ></md-outlined-text-field>
            </div>
            <div role="radiogroup" aria-labelledby="contact-type" className="contact-text_form-radio">
              <label className="contact-text_form-field_label">
                ¿Prefieres que te contacte por teléfono o por correo electrónico?
              </label>
              <div className="contact-text_form-radio_opt">
                <input
                  type="radio"
                  id="contact-email"
                  name="contact"
                  value="email"
                  aria-label="email"
                  checked={selectedContactMethod === "email"}
                  onChange={handleRadioChange}
                />
                <label htmlFor="contact-email" className="contact-text_form-field_label">
                  Correo electrónico
                </label>
              </div>
              <div className="contact-text_form-radio_opt">
                <input
                  type="radio"
                  id="contact-phone"
                  name="contact"
                  value="phone"
                  aria-label="phone"
                  checked={selectedContactMethod === "phone"}
                  onChange={handleRadioChange}
                />
                <label htmlFor="contact-phone" className="contact-text_form-field_label">
                  Teléfono
                </label>
              </div>
              <div className="contact-text_form-radio_opt">
                <input
                  type="radio"
                  id="contact-both"
                  name="contact"
                  value="both"
                  aria-label="both"
                  checked={selectedContactMethod === "both"}
                  onChange={handleRadioChange}
                />
                <label htmlFor="contact-both" className="contact-text_form-field_label">
                  Por ambos
                </label>
              </div>
            </div>
            {selectedContactMethod === "email" || selectedContactMethod === "both" ? (
              <div className="contact-text_form-field">
                <label htmlFor="email" className="contact-text_form-field_label">
                  Escribe tu correo electrónico:
                </label>
                <md-outlined-text-field
                  ref={refs.email}
                  id="email"
                  name="email"
                  label="Correo electrónico"
                  type="email"
                  required
                  error-text="Por favor ingrese un correo válido"
                  onBlur={() => handleBlur("email")}
                ></md-outlined-text-field>
              </div>
            ) : null}
            {selectedContactMethod === "phone" || selectedContactMethod === "both" ? (
              <div className="contact-text_form-field">
                <label htmlFor="phone" className="contact-text_form-field_label">
                  Escribe tu número de teléfono:
                </label>
                <md-outlined-text-field
                  ref={refs.phone}
                  id="phone"
                  name="phone"
                  label="Teléfono"
                  type="tel"
                  // pattern='^\[6-9][0-9]{8}$'
                  required
                  error-text="Por favor ingrese un número de teléfono válido"
                  onBlur={() => handleBlur("phone")}
                ></md-outlined-text-field>
              </div>
            ) : null}
            <div className="contact-text_form-field">
              <label for="msj" className="contact-text_form-field_label">
                Escribe tu mensaje:
              </label>
              <md-outlined-text-field
                ref={refs.msj}
                type="textarea"
                id="msj"
                name="msj"
                label="Mensaje"
                required
                error-text="Este campo es necesario para continuar"
                onBlur={() => handleBlur("msj")}
                className="textaArea"
              ></md-outlined-text-field>
            </div>
            <div className="contact-text_form-check">
              <md-checkbox
                type="checkbox"
                id="check"
                name="check"
                value="check"
                error-text="Este campo es necesario para continuar"
                required
              ></md-checkbox>
              <label for="check" className="contact-text_form-field_label">
                He leído, entendido y acepto la{" "}
                <Link to="/terminos-legales-privacidad" className="contact-text_form-field_label-link">
                  política de privacidad
                </Link>
              </label>
            </div>
            <md-filled-button type="submit" className="contact-text_form-submit">
              Enviar mensaje
            </md-filled-button>
            {stateMessage && (
              <div className={`submission-message ${stateMessage.includes("error") ? "error" : "success"}`}>
                {stateMessage}
              </div>
            )}
          </form>
        </div>
      </section>
      <section className="sectAdd">
        <div className="sectAdd-address">
          <div className="sectAdd-address_map">
            <div className="sectAdd-address_map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.943190876602!2d2.1785503757215796!3d41.39704007129856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a33a09c0b97d%3A0x6ed197842ca15201!2sLeyre%20Ramos%20Molinos!5e0!3m2!1sen!2ses!4v1738598229621!5m2!1sen!2ses"
                allowFullScreen=""
                loading="lazy"
                className="sectAdd-address_map-wrapper-iframe"
              ></iframe>
            </div>
          </div>
          <div className="sectAdd-address_links">
            <h2 className="sectAdd-address_links-h2">Cómo llegar</h2>
            <p className="sectAdd-address_links-p">Carrer de Casp 172, 2º A, 08008 Barcelona, España.</p>
            <p className="sectAdd-address_links-p">Metro y Rodalies Arc de Triomf.</p>
            <p className="sectAdd-address_links-p">614 278 073</p>
            <div className="sectAdd-address_links-btn">
              <md-outlined-button href="https://maps.app.goo.gl/SZDsLjan8uCMw6q86" target="_blank">
                Ver en Google Maps
              </md-outlined-button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto

