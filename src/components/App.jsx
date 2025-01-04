import "../styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Sobremi from './Sobremi.jsx'
import MasSobreMi from "./MasSobreMi.jsx";
import Terapia from './Terapia.jsx'
import Tipos from './Tipos.jsx'
import Reserva from './Reserva.jsx'
import Testimonios from './Testimonios.jsx'
import Cta from './Cta.jsx'
import Footer from './Footer.jsx'


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ }/>
        <Route path='/' element={ }/>
      </Routes>
      <Hero/>
      <Sobremi/>
      <MasSobreMi/>
      <Terapia/>
      <Tipos/>
      <Reserva/>
      <Testimonios/>
      <Cta/>
      <Footer/>
    </>
  )
}

export default App
