import React from 'react'
import "../styles/Terminos.scss";
import Cta from './Cta.jsx'

function Terminos() {
  return (
    <>
        <section>
            <h2>Términos Legales y Privacidad</h2>
            <div>
                <a href="">
                    <img src="" alt="" />
                    <p>Política de Privacidad</p>
                </a>
            </div>
            <div>
                <a href="">
                    <img src="" alt="" />
                    <p>Aviso legal</p>
                </a>
            </div>
            <div>
                <a href="">
                    <img src="" alt="" />
                    <p>Política de Cookies</p>
                </a>
            </div>
        </section>

        <section className='politicaPrivacidad'>
            <h2>Política de Privacidad</h2>
            <h3>Responsable del Tratamiento</h3>
            <p>
                Leyre Ramos Molinos
                <a href="">Carrer de Casp 172, 2º A, 08008 Barcelona, España.</a>
                <a href="mailto:psicoterapeutaleyre@outlook.com">psicoterapeutaleyre@outlook.com</a>
            </p>
            <h3>Finalidad del Tratamiento de los Datos Personales</h3>
            <p>
                Los datos personales proporcionados a través de este sitio web (Leyre Ramos Molinos, <a href="mailto:psicoterapeutaleyre@outlook.com">psicoterapeutaleyre@outlook.com</a>) serán utilizados con el fin de responder a consultas y gestionar los servicios solicitados, de acuerdo con lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y la libre circulación de estos datos (Reglamento General de Protección de Datos o RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>
            <h3>Legitimación para el Tratamiento de los Datos</h3>
            <p>
                El tratamiento de los datos personales se basa en el consentimiento expreso del usuario, obtenido a través del formulario correspondiente, conforme al RGPD y la LOPDGDD.
            </p>
            <h3>Conservación de los Datos</h3>
            <p>
                Los datos personales se conservarán mientras se mantenga la relación entre el usuario y el sitio web o hasta que el usuario solicite su eliminación, en línea con los principios de minimización y limitación del plazo de conservación del RGPD.
            </p>
            <h3>Derechos de los Usuarios</h3>
            <p>
                Los usuarios tienen derecho a acceder a sus datos, solicitar la rectificación de datos incorrectos, suprimir sus datos, limitar u oponerse a su tratamiento, y solicitar la portabilidad de sus datos, de acuerdo con el RGPD y la LOPDGDD. Para ejercer estos derechos, pueden enviar una solicitud a <a href="mailto:psicoterapeutaleyre@outlook.com">psicoterapeutaleyre@outlook.com</a>.
            </p>
        </section>

        <section className='avisoLegal'>
            <h2>Aviso Legal</h2>
            <h3>Titular del Sitio Web</h3>
            <p>
                Leyre Ramos Molinos
                <a href="">Carrer de Casp 172, 2º A, 08008 Barcelona, España.</a>
                <a href="mailto:psicoterapeutaleyre@outlook.com">psicoterapeutaleyre@outlook.com</a>
            </p>
            <h3>Objeto de la Web</h3>
            <p>
                Este sitio tiene como objetivo proporcionar información sobre servicios de psicoterapia, responder a consultas y gestionar los servicios solicitados.
            </p>
            <h3>Condiciones de Uso</h3>
            <p>
                El uso de este sitio implica la aceptación de estas condiciones, que podrán ser modificadas en cualquier momento para asegurar el cumplimiento de la normativa vigente, en particular el RGPD y la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).
            </p>
        </section>

        <section className='cookies'>
            <h2>Política de Cookies</h2>
            <h3>Uso de Cookies</h3>
            <p>
                Este sitio web utiliza cookies para mejorar la experiencia de navegación y recopilar datos estadísticos anónimos sobre el uso del sitio. Las cookies son pequeños archivos de texto que el navegador almacena en el dispositivo del usuario.
            </p>
            <h3>Tipos de Cookies Utilizadas</h3>
            <p>
                {/* [Indica el tipo de cookies, por ejemplo, “cookies de análisis, cookies de sesión, cookies de funcionalidad…”].*/}
            </p> 
            <h3>Gestión de Cookies</h3>
            <p>
                El usuario puede configurar su navegador para rechazar las cookies o eliminarlas después de cada sesión. Este sitio cumple con el RGPD y la LSSI-CE, que exigen informar a los usuarios sobre el uso de cookies y la obtención de su consentimiento.
            </p>
        </section>
        <Cta/>
    </>
  )
}

export default Terminos