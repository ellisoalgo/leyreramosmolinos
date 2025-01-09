import React from 'react'
import Terminos from './Terminos.jsx'
import "../styles/Cookies.scss"

function Cookies() {
  return (
    <>
      <Terminos/>
      <section className='cookies'>
          <h2 className='cookies_h2'>Política de Cookies</h2>
          <h3 className='cookies_h3'>Uso de Cookies</h3>
          <p className='cookies_p'>
              Este sitio web utiliza cookies para mejorar la experiencia de navegación y recopilar datos estadísticos anónimos sobre el uso del sitio. Las cookies son pequeños archivos de texto que el navegador almacena en el dispositivo del usuario.
          </p>
          <h3 className='cookies_h3'>Tipos de Cookies Utilizadas</h3>
          <p className='cookies_p'>
              {/* [Indica el tipo de cookies, por ejemplo, “cookies de análisis, cookies de sesión, cookies de funcionalidad…”].*/}
          </p> 
          <h3 className='cookies_h3'>Gestión de Cookies</h3>
          <p className='cookies_p'>
              El usuario puede configurar su navegador para rechazar las cookies o eliminarlas después de cada sesión. Este sitio cumple con el RGPD y la LSSI-CE, que exigen informar a los usuarios sobre el uso de cookies y la obtención de su consentimiento.
          </p>
      </section>
    </>
  )
}

export default Cookies