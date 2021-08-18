import React, {Fragment} from 'react';
import Header from './Comps/Header';
import Formulario from './Comps/Formulario';

function App() {
  return (
    <Fragment>
      <Header 
        titulo="Cotizador de Préstamos"
      />

      <div className="container">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
