import "../styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Header from './Header.jsx'
import MasSobreMi from "./MasSobreMi.jsx";
import Cta from './Cta.jsx'
import Footer from './Footer.jsx'
import Contacto from "./Contacto.jsx";
import Privacidad from './Privacidad.jsx'
import Aviso from './Aviso.jsx'
import Cookies from './Cookies.jsx'
import Main from './Main.jsx'


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <Main/> }/>
        <Route path='/sobre-mi' element={ <MasSobreMi/> }/>
        <Route path='/contacto' element={ <Contacto/> }/>
        <Route path='/terminos-legales-privacidad' element={ <Privacidad/> }/>
        <Route path='/aviso-legal' element={ <Aviso/> }/>
        <Route path='/cookies' element={ <Cookies/> }/>
      </Routes>
      <Cta/>
      <Footer/>
    </>
  )
}

export default App
