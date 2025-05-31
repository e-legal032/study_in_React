import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';


function App() {
  const [numClics, setnumClics]= useState(0);

  const manejarClic = () =>{
    setnumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setnumClics(0);
  }
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCode Camp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics} />
        <Boton
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );  
}

export default App;
