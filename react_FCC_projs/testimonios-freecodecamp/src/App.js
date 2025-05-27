
import './App.css';
import Testimonio from './componentes/Testimonio';
import datos_testimonios from './datos/datos-testimonios'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'> 
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {datos_testimonios.map((datos, index) => (
          <Testimonio
            key={index}
            nombre={datos.nombre}
            pais={datos.pais}
            imagen={datos.imagen}
            cargo={datos.cargo}
            empresa={datos.empresa}
            testimonio={datos.testimonio}
          />
          ))}
        
      </div>
    </div>
  );
}

export default App;
