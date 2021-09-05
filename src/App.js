import {useState} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  //State para el spinner
  const [ loading, setLoading ] = useState(false);

  //Extraer los datos
  const {cotizacion, datos} = resumen;

  return (
    <Contenedor>
      <Header 
        titulo='Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario guardarResumen={guardarResumen} setLoading={setLoading} />
        { loading ? <Spinner /> : null }
        <Resumen datos={datos} />
        { !loading ? <Resultado cotizacion={cotizacion} /> : null }
      </ContenedorFormulario>
    </Contenedor> 
  );
}

export default App;
