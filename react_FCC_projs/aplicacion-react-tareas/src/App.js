import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCode Camp'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='TextoDefault AprenderReact' />
      </div>

    </div>
  );
}

export default App;
