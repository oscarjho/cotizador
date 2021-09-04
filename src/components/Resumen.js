const Resumen = ({datos}) => {

    //extraer datos
    const {marca, year, plan} = datos;
    //if (marca==='' || year === '' || plan === '' ) return null;
    return (
        <div>
        <h2>Resumen de Cotizacion</h2>
        <ul>
            <li>Marca: </li>
            <li>Plan: </li>
            <li>Año del Auto: </li>
        </ul>
        </div>
    );
}

export default Resumen;