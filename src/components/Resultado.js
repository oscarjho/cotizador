import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppsercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {
    return (
            (cotizacion === 0) ? 
    ( <Mensaje>Elige marca, año y tipo de seguro</Mensaje> ) 
    : 
    ( <ResultadoCotizacion>
        <TextoCotizacion> {cotizacion} </TextoCotizacion>
        </ResultadoCotizacion> )        
    );
}

export default Resultado;