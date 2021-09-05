import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
            <Mensaje>Elige marca, año y tipo de seguro</Mensaje>  
        : 
            <ResultadoCotizacion>
                <TransitionGroup 
                    component="p"
                    className="resultado"
                    >
                    <CSSTransition
                        className="resultado"
                        key={cotizacion}
                        timeout={{ enter: 500, exit: 1 }}
                    >
                        <TextoCotizacion> {cotizacion} </TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>       
    );
}

export default Resultado;