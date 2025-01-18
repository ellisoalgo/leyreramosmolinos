import "../styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Header from './Header.jsx'
import Cta from './Cta.jsx'
import Footer from './Footer.jsx'
import {routes} from './router';
import ScrollToTop from "./ScrollToTop.jsx";

function App() {
  return (
    <div className="body">
      <ScrollToTop/>
      <Header/>
      <div>
      <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default App
