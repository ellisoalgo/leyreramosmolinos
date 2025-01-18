import Main from './Main';
import MasSobreMi from './MasSobreMi';
import Contacto from './Contacto';
import Terminos from './Terminos';


export const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/sobre-mi',
    element: <MasSobreMi />,
  },
  {
    path: '/contacto',
    element: <Contacto />,
  },
  {
    path: '/terminos-legales-privacidad',
    element: <Terminos/>,
  }
];
