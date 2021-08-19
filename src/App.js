import React, {Fragment, useState} from 'react';
import Header from './Comps/Header';
import Formulario from './Comps/Formulario';

function App() {

  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');

  return (
    <Fragment>
      <Header 
        titulo="Cotizador de Préstamos"
      />

      <div className="container">
        <Formulario 
          cantidad = {cantidad}
          guardarCantidad = {guardarCantidad}
          plazo = {plazo}
          guardarPlazo = {guardarPlazo}
        />
      </div>
    </Fragment>
  );
}

export default App;
