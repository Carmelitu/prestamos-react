import React, {Fragment, useState} from 'react';
import Header from './Comps/Header';
import Formulario from './Comps/Formulario';
import Mensaje from './Comps/Mensaje';
import Resultado from './Comps/Resultado';

function App() {

  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);

  let componente;
  if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado 
      total = {total}
      plazo = {plazo}
      cantidad = {cantidad}
    />
  }

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
          total={total}
          guardarTotal={guardarTotal}
        />
        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
